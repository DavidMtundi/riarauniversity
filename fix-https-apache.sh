#!/bin/bash

# Fix Apache HTTPS to properly proxy to Docker container
# This script configures Apache SSL virtual host to proxy to Docker

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🔧 Fixing Apache HTTPS Configuration${NC}"
echo ""

DOMAIN="ru.ac.ke"
DOCKER_PORT="8081"  # Change this if your Docker container uses a different port

# Check if SSL certificates exist
SSL_CERT="/etc/letsencrypt/live/${DOMAIN}/fullchain.pem"
SSL_KEY="/etc/letsencrypt/live/${DOMAIN}/privkey.pem"

if [ ! -f "$SSL_CERT" ] || [ ! -f "$SSL_KEY" ]; then
    echo -e "${RED}❌ SSL certificates not found!${NC}"
    echo "Expected locations:"
    echo "  Certificate: $SSL_CERT"
    echo "  Key: $SSL_KEY"
    echo ""
    echo "If you haven't set up SSL yet, run:"
    echo "  ${YELLOW}sudo certbot --apache -d ${DOMAIN} -d www.${DOMAIN}${NC}"
    echo ""
    read -p "Do you want to continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
    # Use placeholder paths (will need to be updated)
    SSL_CERT="/etc/ssl/certs/ssl-cert-snakeoil.pem"
    SSL_KEY="/etc/ssl/private/ssl-cert-snakeoil.key"
fi

# Enable required Apache modules
echo -e "${YELLOW}Enabling Apache modules...${NC}"
a2enmod proxy proxy_http headers ssl 2>/dev/null || sudo a2enmod proxy proxy_http headers ssl

# Check if ru.ac.ke.conf already exists and handles HTTPS
EXISTING_SSL_CONF="/etc/apache2/sites-available/ru.ac.ke.conf"
if [ -f "$EXISTING_SSL_CONF" ] && grep -q "<VirtualHost.*:443" "$EXISTING_SSL_CONF"; then
    echo -e "${YELLOW}Found existing ru.ac.ke.conf with HTTPS configuration${NC}"
    echo -e "${YELLOW}Updating it to proxy to Docker instead of showing directory listing...${NC}"
    
    # Extract SSL certificate paths from existing config if available
    if grep -q "SSLCertificateFile" "$EXISTING_SSL_CONF"; then
        EXISTING_CERT=$(grep "SSLCertificateFile" "$EXISTING_SSL_CONF" | head -1 | awk '{print $2}' | tr -d ' ')
        EXISTING_KEY=$(grep "SSLCertificateKeyFile" "$EXISTING_SSL_CONF" | head -1 | awk '{print $2}' | tr -d ' ')
        
        if [ -n "$EXISTING_CERT" ] && [ -f "$EXISTING_CERT" ]; then
            SSL_CERT="$EXISTING_CERT"
            echo -e "${GREEN}Using existing SSL certificate: $SSL_CERT${NC}"
        fi
        if [ -n "$EXISTING_KEY" ] && [ -f "$EXISTING_KEY" ]; then
            SSL_KEY="$EXISTING_KEY"
            echo -e "${GREEN}Using existing SSL key: $SSL_KEY${NC}"
        fi
    fi
    
    # Create a backup
    BACKUP_FILE="${EXISTING_SSL_CONF}.backup.$(date +%Y%m%d_%H%M%S)"
    sudo cp "$EXISTING_SSL_CONF" "$BACKUP_FILE"
    echo -e "${GREEN}✅ Created backup: $BACKUP_FILE${NC}"
    
    # Use awk to replace the 443 VirtualHost section
    # This preserves any other VirtualHost blocks (like port 80)
    sudo awk -v domain="$DOMAIN" -v cert="$SSL_CERT" -v key="$SSL_KEY" -v port="$DOCKER_PORT" '
    BEGIN { in_443_block = 0; skip_until_close = 0 }
    /<VirtualHost\s+\*:443/ { 
        in_443_block = 1
        skip_until_close = 1
        print "<VirtualHost *:443>"
        print "    ServerName " domain
        print "    ServerAlias www." domain
        print ""
        print "    # SSL Configuration"
        print "    SSLEngine on"
        print "    SSLCertificateFile " cert
        print "    SSLCertificateKeyFile " key
        print ""
        print "    # Modern SSL configuration"
        print "    SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1"
        print "    SSLCipherSuite ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384"
        print "    SSLHonorCipherOrder off"
        print "    SSLSessionTickets off"
        print ""
        print "    # Security headers"
        print "    Header always set Strict-Transport-Security \"max-age=63072000; includeSubDomains; preload\""
        print "    Header always set X-Frame-Options \"SAMEORIGIN\""
        print "    Header always set X-Content-Type-Options \"nosniff\""
        print "    Header always set X-XSS-Protection \"1; mode=block\""
        print ""
        print "    # Reverse proxy to Docker container"
        print "    ProxyPreserveHost On"
        print "    ProxyPass / http://localhost:" port "/"
        print "    ProxyPassReverse / http://localhost:" port "/"
        print ""
        print "    # Headers for proper proxying"
        print "    RequestHeader set X-Forwarded-Proto \"https\""
        print "    RequestHeader set X-Forwarded-Port \"443\""
        print "    RequestHeader set X-Forwarded-For \"%{REMOTE_ADDR}s\""
        print ""
        print "    # Logging"
        print "    ErrorLog ${APACHE_LOG_DIR}/riara-frontend-ssl-error.log"
        print "    CustomLog ${APACHE_LOG_DIR}/riara-frontend-ssl-access.log combined"
        next
    }
    /<\/VirtualHost>/ {
        if (skip_until_close) {
            skip_until_close = 0
            in_443_block = 0
            print "</VirtualHost>"
            next
        }
    }
    {
        if (!skip_until_close) {
            print
        }
    }
    ' "$EXISTING_SSL_CONF" > /tmp/ru.ac.ke.conf.new
    
    sudo mv /tmp/ru.ac.ke.conf.new "$EXISTING_SSL_CONF"
    APACHE_SSL_CONF="$EXISTING_SSL_CONF"
    echo -e "${GREEN}✅ Updated existing ru.ac.ke.conf${NC}"
else
    # Create new SSL virtual host configuration
    APACHE_SSL_CONF="/etc/apache2/sites-available/riara-frontend-ssl.conf"
    echo -e "${YELLOW}Creating new Apache SSL configuration...${NC}"
    
    sudo tee "$APACHE_SSL_CONF" > /dev/null << EOF
<VirtualHost *:443>
    ServerName ${DOMAIN}
    ServerAlias www.${DOMAIN}
    
    # SSL Configuration
    SSLEngine on
    SSLCertificateFile ${SSL_CERT}
    SSLCertificateKeyFile ${SSL_KEY}
    
    # Modern SSL configuration
    SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1
    SSLCipherSuite ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384
    SSLHonorCipherOrder off
    SSLSessionTickets off
    
    # Security headers
    Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"
    
    # Reverse proxy to Docker container
    ProxyPreserveHost On
    ProxyPass / http://localhost:${DOCKER_PORT}/
    ProxyPassReverse / http://localhost:${DOCKER_PORT}/
    
    # Headers for proper proxying
    RequestHeader set X-Forwarded-Proto "https"
    RequestHeader set X-Forwarded-Port "443"
    RequestHeader set X-Forwarded-For "%{REMOTE_ADDR}s"
    
    # Logging
    ErrorLog \${APACHE_LOG_DIR}/riara-frontend-ssl-error.log
    CustomLog \${APACHE_LOG_DIR}/riara-frontend-ssl-access.log combined
</VirtualHost>

# Redirect HTTP to HTTPS
<VirtualHost *:80>
    ServerName ${DOMAIN}
    ServerAlias www.${DOMAIN}
    
    # Redirect all HTTP traffic to HTTPS
    Redirect permanent / https://${DOMAIN}/
    
    # Logging
    ErrorLog \${APACHE_LOG_DIR}/riara-frontend-redirect-error.log
    CustomLog \${APACHE_LOG_DIR}/riara-frontend-redirect-access.log combined
</VirtualHost>
EOF
    echo -e "${GREEN}✅ Created new Apache SSL configuration${NC}"
fi

echo -e "${GREEN}✅ Apache SSL configuration ready${NC}"

# Disable default SSL site if it exists (this is likely causing the directory listing)
if [ -f /etc/apache2/sites-enabled/000-default-ssl.conf ]; then
    echo -e "${YELLOW}Disabling default Apache SSL site...${NC}"
    a2dissite 000-default-ssl.conf 2>/dev/null || sudo a2dissite 000-default-ssl.conf
    echo -e "${GREEN}✅ Disabled default SSL site${NC}"
fi

if [ -f /etc/apache2/sites-enabled/default-ssl.conf ]; then
    echo -e "${YELLOW}Disabling default-ssl Apache site...${NC}"
    a2dissite default-ssl.conf 2>/dev/null || sudo a2dissite default-ssl.conf
    echo -e "${GREEN}✅ Disabled default-ssl site${NC}"
fi

# Enable the SSL site (only if it's a new file, ru.ac.ke.conf is already enabled)
if [ "$APACHE_SSL_CONF" != "/etc/apache2/sites-available/ru.ac.ke.conf" ]; then
    echo -e "${YELLOW}Enabling riara-frontend SSL site...${NC}"
    SITE_NAME=$(basename "$APACHE_SSL_CONF")
    a2ensite "$SITE_NAME" 2>/dev/null || sudo a2ensite "$SITE_NAME"
    echo -e "${GREEN}✅ Enabled $SITE_NAME${NC}"
else
    echo -e "${GREEN}✅ ru.ac.ke.conf is already enabled${NC}"
fi

# Note: HTTP (port 80) is already handled by riara-frontend.conf
# which proxies to Docker. We can optionally update it to redirect to HTTPS
# but that's a separate decision. For now, we keep it as-is since it's working.

# Test Apache configuration
echo ""
echo -e "${YELLOW}🧪 Testing Apache configuration...${NC}"
apache2ctl configtest 2>/dev/null || sudo apache2ctl configtest

if [ $? -eq 0 ]; then
    # Reload Apache
    echo -e "${YELLOW}🔄 Reloading Apache...${NC}"
    systemctl reload apache2 2>/dev/null || sudo systemctl reload apache2
    echo -e "${GREEN}✅ Apache reloaded successfully${NC}"
else
    echo -e "${RED}❌ Apache configuration test failed!${NC}"
    echo "Please check the configuration manually."
    exit 1
fi

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✅ Apache HTTPS Configuration Fixed!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Configuration:"
echo "  - Apache listens on port 443 (HTTPS)"
echo "  - Proxies HTTPS requests to Docker on port ${DOCKER_PORT}"
echo "  - HTTP (port 80) redirects to HTTPS"
echo "  - ServerName: ${DOMAIN}"
echo ""
echo "Test your site:"
echo "  ${BLUE}https://${DOMAIN}${NC}"
echo "  ${BLUE}http://${DOMAIN}${NC} (should redirect to HTTPS)"
echo ""
echo "Check logs:"
echo "  ${YELLOW}tail -f /var/log/apache2/riara-frontend-ssl-*.log${NC}"
echo ""
echo "⚠️  IMPORTANT:"
echo "  - Make sure your Docker container is running on port ${DOCKER_PORT}"
echo "  - Verify SSL certificates are valid: ${YELLOW}sudo certbot certificates${NC}"
echo "  - If Docker uses a different port, update DOCKER_PORT in this script"
echo ""


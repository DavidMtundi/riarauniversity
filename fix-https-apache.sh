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

# Create or update Apache SSL virtual host configuration
APACHE_SSL_CONF="/etc/apache2/sites-available/riara-frontend-ssl.conf"

echo -e "${YELLOW}Creating/updating Apache SSL configuration...${NC}"

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

echo -e "${GREEN}✅ Created/updated Apache SSL configuration${NC}"

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

# Enable the SSL site
echo -e "${YELLOW}Enabling riara-frontend SSL site...${NC}"
a2ensite riara-frontend-ssl.conf 2>/dev/null || sudo a2ensite riara-frontend-ssl.conf

# Also ensure HTTP site is configured (update existing if needed)
APACHE_HTTP_CONF="/etc/apache2/sites-available/riara-frontend.conf"
if [ -f "$APACHE_HTTP_CONF" ]; then
    # Update existing HTTP config to redirect to HTTPS
    if ! grep -q "Redirect permanent" "$APACHE_HTTP_CONF"; then
        echo -e "${YELLOW}Updating HTTP configuration to redirect to HTTPS...${NC}"
        sudo tee "$APACHE_HTTP_CONF" > /dev/null << EOF
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
        echo -e "${GREEN}✅ Updated HTTP configuration${NC}"
    fi
fi

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


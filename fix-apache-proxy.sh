#!/bin/bash

# Fix Apache to properly proxy to Docker container

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🔧 Fixing Apache Reverse Proxy Configuration${NC}"
echo ""

# Check if Apache config exists
APACHE_CONF="/etc/apache2/sites-available/riara-frontend.conf"

if [ ! -f "$APACHE_CONF" ]; then
    echo -e "${YELLOW}Creating Apache configuration...${NC}"
    
    # Enable required modules
    a2enmod proxy proxy_http headers 2>/dev/null || sudo a2enmod proxy proxy_http headers
    
    # Create config
    sudo tee "$APACHE_CONF" > /dev/null << 'EOF'
<VirtualHost *:80>
    ServerName ru.ac.ke
    ServerAlias www.ru.ac.ke
    
    # Reverse proxy to Docker container
    ProxyPreserveHost On
    ProxyPass / http://localhost:8081/
    ProxyPassReverse / http://localhost:8081/
    
    # Headers
    RequestHeader set X-Forwarded-Proto "http"
    RequestHeader set X-Forwarded-Port "80"
    
    # Logging
    ErrorLog ${APACHE_LOG_DIR}/riara-frontend-error.log
    CustomLog ${APACHE_LOG_DIR}/riara-frontend-access.log combined
</VirtualHost>
EOF
    
    echo -e "${GREEN}✅ Created Apache configuration${NC}"
else
    echo -e "${GREEN}✅ Apache configuration already exists${NC}"
    
    # Update ServerName to ru.ac.ke if needed
    if ! grep -q "ServerName ru.ac.ke" "$APACHE_CONF"; then
        echo -e "${YELLOW}Updating ServerName to ru.ac.ke...${NC}"
        sudo sed -i 's/ServerName.*/ServerName ru.ac.ke/' "$APACHE_CONF"
        sudo sed -i 's/ServerAlias.*/ServerAlias www.ru.ac.ke/' "$APACHE_CONF"
    fi
fi

# Enable required modules
echo -e "${YELLOW}Enabling Apache modules...${NC}"
a2enmod proxy proxy_http headers 2>/dev/null || sudo a2enmod proxy proxy_http headers

# Enable the site
echo -e "${YELLOW}Enabling riara-frontend site...${NC}"
a2ensite riara-frontend.conf 2>/dev/null || sudo a2ensite riara-frontend.conf

# Disable default site if it exists (to prevent directory listing)
if [ -f /etc/apache2/sites-enabled/000-default.conf ]; then
    echo -e "${YELLOW}Disabling default Apache site...${NC}"
    a2dissite 000-default.conf 2>/dev/null || sudo a2dissite 000-default.conf
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
    exit 1
fi

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✅ Apache Proxy Configuration Fixed!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Configuration:"
echo "  - Apache listens on port 80"
echo "  - Proxies requests to Docker on port 8081"
echo "  - ServerName: ru.ac.ke"
echo ""
echo "Test your site:"
echo "  http://ru.ac.ke"
echo "  https://ru.ac.ke"
echo ""
echo "Check logs:"
echo "  ${YELLOW}tail -f /var/log/apache2/riara-frontend-*.log${NC}"
echo ""


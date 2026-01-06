#!/bin/bash

# Deploy with Apache already running on port 80
# Uses reverse proxy: Apache (port 80) → Docker (port 8081)

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 Deploying with Apache Reverse Proxy${NC}"
echo ""

# Check if we're in the right directory
if [ ! -f "docker-compose.yml" ]; then
    echo -e "${RED}❌ docker-compose.yml not found. Are you in the project directory?${NC}"
    exit 1
fi

# Step 1: Change Docker to use port 8081 (since 8080 is taken by Java)
echo -e "${YELLOW}📝 Configuring Docker to use port 8081...${NC}"
sed -i 's/"80:80"/"8081:80"/' docker-compose.yml
echo -e "${GREEN}✅ Updated docker-compose.yml to use port 8081${NC}"
echo ""

# Step 2: Build and start Docker container
echo -e "${YELLOW}🔨 Building Docker image...${NC}"
docker compose build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

echo ""
echo -e "${YELLOW}🚀 Starting Docker container on port 8081...${NC}"
docker compose up -d

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to start container!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Docker container started on port 8081${NC}"
echo ""

# Step 3: Wait for container to be ready
echo -e "${YELLOW}⏳ Waiting for container to be ready...${NC}"
sleep 5

# Step 4: Configure Apache reverse proxy
echo -e "${YELLOW}🌐 Configuring Apache reverse proxy...${NC}"

# Check if Apache modules are enabled
if [ ! -f /etc/apache2/mods-enabled/proxy.load ]; then
    echo "Enabling Apache proxy modules..."
    a2enmod proxy proxy_http headers 2>/dev/null || sudo a2enmod proxy proxy_http headers
fi

# Create Apache virtual host configuration
APACHE_CONF="/etc/apache2/sites-available/riara-frontend.conf"

cat > "$APACHE_CONF" << 'EOF'
<VirtualHost *:80>
    ServerName riarauniversity.com
    ServerAlias www.riarauniversity.com
    
    # Reverse proxy to Docker container
    ProxyPreserveHost On
    ProxyPass / http://localhost:8081/
    ProxyPassReverse / http://localhost:8081/
    
    # Headers
    ProxyPassReverse / http://localhost:8081/
    RequestHeader set X-Forwarded-Proto "http"
    RequestHeader set X-Forwarded-Port "80"
    
    # Logging
    ErrorLog ${APACHE_LOG_DIR}/riara-frontend-error.log
    CustomLog ${APACHE_LOG_DIR}/riara-frontend-access.log combined
</VirtualHost>
EOF

echo -e "${GREEN}✅ Created Apache configuration: $APACHE_CONF${NC}"

# Enable the site
a2ensite riara-frontend.conf 2>/dev/null || sudo a2ensite riara-frontend.conf

# Test Apache configuration
echo ""
echo -e "${YELLOW}🧪 Testing Apache configuration...${NC}"
apache2ctl configtest 2>/dev/null || sudo apache2ctl configtest

if [ $? -eq 0 ]; then
    # Reload Apache
    systemctl reload apache2 2>/dev/null || sudo systemctl reload apache2
    echo -e "${GREEN}✅ Apache reloaded successfully${NC}"
else
    echo -e "${RED}❌ Apache configuration test failed!${NC}"
    echo "Please check the configuration manually."
    exit 1
fi

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✅ Deployment Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Container status:"
docker ps | grep riara-frontend || echo "Container not found"
echo ""
echo "Access your website:"
echo -e "  ${BLUE}http://$(hostname -I | awk '{print $1}')${NC}"
echo -e "  ${BLUE}http://YOUR_VPS_IP${NC}"
echo ""
echo "Configuration:"
echo "  - Apache listens on port 80"
echo "  - Docker container runs on port 8081"
echo "  - Apache proxies requests to Docker"
echo ""
echo "⚠️  IMPORTANT: Update ServerName in $APACHE_CONF with your actual domain name"
echo ""
echo "Useful commands:"
echo "  View Docker logs:    ${YELLOW}docker logs -f riara-frontend${NC}"
echo "  View Apache logs:    ${YELLOW}tail -f /var/log/apache2/riara-frontend-*.log${NC}"
echo "  Restart Docker:      ${YELLOW}docker compose restart${NC}"
echo "  Rebuild Docker:      ${YELLOW}docker compose up -d --build${NC}"
echo ""

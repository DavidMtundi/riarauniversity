#!/bin/bash

# Deployment Script for Riara University Projects
# Usage: ./deploy.sh [frontend|api|admin|all]

set -e

VPS_USER="root"
VPS_HOST="YOUR_VPS_IP"  # Update this
VPS_APP_DIR="/var/www"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

deploy_api() {
    echo -e "${GREEN}Deploying Backend API...${NC}"
    
    # Build API
    cd ../riara-university-api
    npm run build
    
    # Upload to server
    scp -r dist package.json .env $VPS_USER@$VPS_HOST:$VPS_APP_DIR/riara-university-api/
    
    # Install and restart on server
    ssh $VPS_USER@$VPS_HOST << 'ENDSSH'
cd /var/www/riara-university-api
npm install --production
pm2 restart riara-api
pm2 save
ENDSSH
    
    echo -e "${GREEN}✅ API deployed${NC}"
}

deploy_frontend() {
    echo -e "${GREEN}Deploying Frontend...${NC}"
    
    # Build frontend
    cd ../riarauniversity
    npm run build
    
    # Upload to server
    scp -r dist/public $VPS_USER@$VPS_HOST:$VPS_APP_DIR/riara-university-frontend/dist/
    
    echo -e "${GREEN}✅ Frontend deployed${NC}"
}

deploy_admin() {
    echo -e "${GREEN}Deploying Admin Dashboard...${NC}"
    
    # Build admin
    cd ../riara-university-admin
    npm run build
    
    # Upload to server
    scp -r dist $VPS_USER@$VPS_HOST:$VPS_APP_DIR/riara-university-admin/
    
    echo -e "${GREEN}✅ Admin deployed${NC}"
}

# Main
case "${1:-all}" in
    api)
        deploy_api
        ;;
    frontend)
        deploy_frontend
        ;;
    admin)
        deploy_admin
        ;;
    all)
        deploy_api
        deploy_frontend
        deploy_admin
        ;;
    *)
        echo "Usage: $0 [api|frontend|admin|all]"
        exit 1
        ;;
esac

echo -e "${GREEN}🎉 Deployment complete!${NC}"



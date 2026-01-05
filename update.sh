#!/bin/bash

# Easy Update Script for Riara University Frontend
# Usage: ./update.sh [git|upload]

set -e

VPS_USER="root"
VPS_HOST="YOUR_VPS_IP"  # Update this
VPS_DIR="/var/www/riara-frontend"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}🚀 Updating Riara University Frontend${NC}"
echo ""

# Check if using git or upload method
METHOD="${1:-git}"

if [ "$METHOD" = "git" ]; then
    echo -e "${YELLOW}Using Git method...${NC}"
    
    # On VPS: Pull and rebuild
    ssh $VPS_USER@$VPS_HOST << 'ENDSSH'
cd /var/www/riara-frontend
echo "📥 Pulling latest changes..."
git pull
echo "🔨 Rebuilding Docker container..."
docker compose up -d --build
echo "✅ Update complete!"
docker ps | grep riara-frontend
ENDSSH

elif [ "$METHOD" = "upload" ]; then
    echo -e "${YELLOW}Using Upload method...${NC}"
    
    # Build locally first
    echo "🔨 Building locally..."
    npm run build
    
    # Upload files
    echo "📤 Uploading files..."
    scp -r * $VPS_USER@$VPS_HOST:$VPS_DIR/
    
    # Rebuild on server
    echo "🔨 Rebuilding on server..."
    ssh $VPS_USER@$VPS_HOST << 'ENDSSH'
cd /var/www/riara-frontend
docker compose up -d --build
echo "✅ Update complete!"
ENDSSH

else
    echo "Usage: ./update.sh [git|upload]"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Update complete!${NC}"
echo ""
echo "Check status:"
echo "  ssh $VPS_USER@$VPS_HOST 'docker logs riara-frontend'"



#!/bin/bash

# Test Docker Build and Run Script
# This script tests the Docker setup locally

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}🐳 Testing Riara University Docker Setup${NC}"
echo ""

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}❌ Docker daemon is not running!${NC}"
    echo ""
    echo "Please start Docker Desktop and try again."
    echo "  macOS: Open Docker Desktop application"
    echo "  Linux: sudo systemctl start docker"
    exit 1
fi

echo -e "${GREEN}✅ Docker is running${NC}"
echo ""

# Clean up any existing containers
echo -e "${YELLOW}🧹 Cleaning up old containers...${NC}"
docker compose down 2>/dev/null || true
docker rmi riara-frontend 2>/dev/null || true

# Build the image
echo -e "${YELLOW}🔨 Building Docker image...${NC}"
docker compose build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build successful!${NC}"
else
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

# Start the container
echo ""
echo -e "${YELLOW}🚀 Starting container...${NC}"
docker compose up -d

# Wait a moment for container to start
sleep 3

# Check if container is running
if docker ps | grep -q riara-frontend; then
    echo -e "${GREEN}✅ Container is running!${NC}"
    echo ""
    echo -e "${GREEN}📊 Container Status:${NC}"
    docker ps | grep riara-frontend
    echo ""
    echo -e "${GREEN}📝 Container Logs:${NC}"
    docker logs riara-frontend --tail 20
    echo ""
    echo -e "${GREEN}🌐 Testing HTTP response...${NC}"
    
    # Test if website is accessible
    if curl -s -o /dev/null -w "%{http_code}" http://localhost | grep -q "200"; then
        echo -e "${GREEN}✅ Website is accessible at http://localhost${NC}"
        echo ""
        echo -e "${GREEN}🎉 Docker setup is working!${NC}"
        echo ""
        echo "You can now:"
        echo "  - Visit http://localhost in your browser"
        echo "  - View logs: docker logs -f riara-frontend"
        echo "  - Stop: docker compose down"
    else
        echo -e "${YELLOW}⚠️  Container is running but website may not be ready yet${NC}"
        echo "Check logs: docker logs riara-frontend"
    fi
else
    echo -e "${RED}❌ Container failed to start${NC}"
    echo "Check logs: docker logs riara-frontend"
    exit 1
fi


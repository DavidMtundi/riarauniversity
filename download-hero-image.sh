#!/bin/bash

# Script to download and optimize hero background image
# Run this script to set up the hero image locally

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}📥 Downloading Hero Background Image${NC}"
echo ""

# Create images directory if it doesn't exist
mkdir -p client/public/images

# Download the image
echo -e "${YELLOW}Downloading image from riarauniversity.ac.ke...${NC}"
curl -L -o client/public/images/hero-background-original.jpg \
  "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Image downloaded successfully${NC}"
    
    # Get file size
    FILE_SIZE=$(du -h client/public/images/hero-background-original.jpg | cut -f1)
    echo -e "   File size: ${FILE_SIZE}"
    echo ""
    
    # Copy as hero-background.jpg (will be optimized manually)
    cp client/public/images/hero-background-original.jpg client/public/images/hero-background.jpg
    echo -e "${GREEN}✅ Image ready at: client/public/images/hero-background.jpg${NC}"
    echo ""
    echo -e "${YELLOW}📝 Next Steps:${NC}"
    echo "1. Optimize the image using https://squoosh.app/"
    echo "   - Upload: client/public/images/hero-background.jpg"
    echo "   - Format: WebP"
    echo "   - Quality: 80-85"
    echo "   - Save as: hero-background.webp"
    echo ""
    echo "2. Or use command line (if you have imagemagick/cwebp):"
    echo "   cwebp -q 85 client/public/images/hero-background.jpg -o client/public/images/hero-background.webp"
    echo ""
    echo "3. Rebuild Docker container:"
    echo "   docker compose up -d --build"
    echo ""
    echo -e "${GREEN}✅ Setup complete!${NC}"
else
    echo -e "${RED}❌ Failed to download image${NC}"
    exit 1
fi


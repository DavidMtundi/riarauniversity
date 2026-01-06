# Image Optimization Guide

## Best Practices for Fast Image Loading

### Option 1: Host Images Locally (Recommended - Fastest)

**Pros:**
- ✅ Fastest loading (same server, no external DNS)
- ✅ Most reliable (no dependency on external servers)
- ✅ Full control over caching and optimization
- ✅ Works offline
- ✅ Better for SEO

**Cons:**
- Requires downloading and optimizing images
- Uses your server bandwidth

### Option 2: Use a CDN (Best for Global Distribution)

**Recommended CDNs:**
- **Cloudinary** (Free tier: 25GB storage, 25GB bandwidth/month)
- **Cloudflare Images** (Free tier: 100,000 images served/month)
- **AWS CloudFront** (Pay as you go)
- **Bunny CDN** (Very affordable, $1/TB)

**Pros:**
- ✅ Automatic optimization (WebP, responsive sizes)
- ✅ Global edge caching
- ✅ Image transformations on-the-fly
- ✅ Free tiers available

**Cons:**
- Requires account setup
- External dependency

### Option 3: Optimize External Images

If you must use external URLs:
- Use `preconnect` and `dns-prefetch` (already added)
- Consider using a proxy service
- Cache aggressively

## Implementation Steps

### Step 1: Download Hero Image

```bash
# On your local machine or VPS
cd client/public
mkdir -p images

# Download the hero image
curl -o images/hero-background.jpg \
  "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg"
```

### Step 2: Optimize the Image

**Using Online Tools (Easiest):**
1. Go to https://squoosh.app/
2. Upload your image
3. Choose WebP format, quality 80-85
4. Download optimized version

**Using Command Line (if you have tools installed):**
```bash
# Install imagemagick (if not installed)
# macOS: brew install imagemagick
# Ubuntu: sudo apt install imagemagick

# Convert to WebP (if you have cwebp)
cwebp -q 85 images/hero-background.jpg -o images/hero-background.webp

# Or compress JPEG
convert images/hero-background.jpg -quality 85 -strip images/hero-background-optimized.jpg
```

**Recommended Sizes:**
- Desktop: 1920x1080px (or larger, max 2MB)
- Mobile: 1280x720px (max 500KB)
- Create both sizes for responsive images

### Step 3: Update Component

The component will be updated to use local images with proper preloading.

### Step 4: Add Preloading (Already in HTML)

The HTML head will include:
```html
<link rel="preload" as="image" href="/images/hero-background.webp" fetchpriority="high">
```

## Performance Tips

1. **Use WebP format** - 25-35% smaller than JPEG
2. **Compress images** - Target 80-85% quality
3. **Use responsive images** - Different sizes for mobile/desktop
4. **Lazy load** - Only for below-the-fold images (hero should be eager)
5. **Cache aggressively** - Already configured in nginx

## Future Images

For all new images:
1. Download to `client/public/images/`
2. Optimize using Squoosh.app or similar
3. Use WebP format when possible
4. Reference as `/images/filename.webp` in code


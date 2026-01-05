# Riara University Frontend - Contabo VPS Deployment

Simple Docker-based deployment for easy updates.

## Why Docker? 🐳

✅ **One-command updates**: `docker compose up -d --build`  
✅ **Easy rollback**: Keep previous images  
✅ **Consistent**: Same environment every time  
✅ **Automated**: Ready for CI/CD  

## Prerequisites

- Contabo VPS with Ubuntu 20.04+ or Debian 11+
- Root SSH access
- Domain name (optional)

## Step 1: Initial Server Setup

### Connect to VPS

```bash
ssh root@YOUR_VPS_IP
```

### Install Docker

```bash
# Update system
apt update && apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
apt install -y docker-compose-plugin

# Verify
docker --version
docker compose version
```

### Configure Firewall

```bash
ufw allow 80/tcp
ufw allow 443/tcp
ufw reload
```

## Step 2: Deploy Application

### Option A: Using Git (Recommended)

```bash
# On VPS
cd /var/www
git clone https://github.com/YOUR_USERNAME/riara-university-frontend.git riara-frontend
cd riara-frontend

# Build and start
docker compose up -d --build

# Check status
docker ps
docker logs riara-frontend
```

### Option B: Upload Files

From your local machine:

```bash
# Upload project files
scp -r /path/to/riarauniversity/* root@YOUR_VPS_IP:/var/www/riara-frontend/
```

On VPS:

```bash
cd /var/www/riara-frontend
docker compose up -d --build
```

## Step 3: Verify Deployment

```bash
# Check container is running
docker ps

# View logs
docker logs riara-frontend

# Test website
curl http://localhost
# Or visit http://YOUR_VPS_IP in browser
```

## Step 4: Set Up SSL (Optional)

If you have a domain:

```bash
# Install Certbot
apt install -y certbot

# Get certificate (standalone mode)
certbot certonly --standalone -d yourdomain.com -d www.yourdomain.com

# Update nginx-frontend.conf to use SSL (see SSL section below)
# Then restart container
docker compose up -d --build
```

## Updating the Site (Super Easy!)

### Method 1: Git-based Update (Easiest)

```bash
# On VPS - ONE COMMAND!
cd /var/www/riara-frontend
git pull && docker compose up -d --build
```

**That's it!** Takes ~1-2 minutes.

### Method 2: Using Update Script

From your local machine:

```bash
# Make script executable
chmod +x update.sh

# Update via Git
./update.sh git

# Or upload and update
./update.sh upload
```

### Method 3: Manual Update

```bash
# 1. Build locally
npm run build

# 2. Upload to VPS
scp -r dist/public/* root@VPS_IP:/var/www/riara-frontend/

# 3. Rebuild container
ssh root@VPS_IP "cd /var/www/riara-frontend && docker compose up -d --build"
```

## SSL Configuration

To enable HTTPS, update `nginx-frontend.conf`:

```nginx
server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;
    
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # ... rest of config
}

server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}
```

Update `docker-compose.yml` to mount certificates:

```yaml
services:
  frontend:
    volumes:
      - /etc/letsencrypt:/etc/letsencrypt:ro
```

## Monitoring & Maintenance

### View Logs

```bash
# Real-time logs
docker logs -f riara-frontend

# Last 100 lines
docker logs --tail 100 riara-frontend
```

### Container Status

```bash
# Check if running
docker ps | grep riara-frontend

# Resource usage
docker stats riara-frontend
```

### Restart Container

```bash
docker compose restart
```

### Stop/Start

```bash
docker compose down    # Stop
docker compose up -d   # Start
```

## Rollback (If Something Goes Wrong)

```bash
# List images
docker images | grep riara-frontend

# Rollback to previous version
docker compose down
docker tag riara-frontend:latest riara-frontend:backup
# Restore previous image and restart
docker compose up -d
```

## Troubleshooting

### Container won't start

```bash
# Check logs
docker logs riara-frontend

# Rebuild from scratch
docker compose down
docker compose build --no-cache
docker compose up -d
```

### Port 80 already in use

```bash
# Check what's using port 80
lsof -i :80

# Or change port in docker-compose.yml
ports:
  - "8080:80"  # Access via port 8080
```

### Permission issues

```bash
# Fix ownership
chown -R root:root /var/www/riara-frontend
```

### Out of disk space

```bash
# Clean up Docker
docker system prune -a
```

## Automation (Optional)

### Cron Job for Auto-updates

```bash
# Edit crontab
crontab -e

# Add (updates daily at 2 AM)
0 2 * * * cd /var/www/riara-frontend && git pull && docker compose up -d --build >> /var/log/riara-update.log 2>&1
```

### GitHub Actions (Advanced)

Set up CI/CD to automatically deploy on git push.

## Performance Tips

1. **Enable Nginx caching** (already in config)
2. **Use CDN** for static assets (Cloudflare, etc.)
3. **Enable HTTP/2** (already enabled with SSL)
4. **Monitor resource usage**: `docker stats`

## Security

1. ✅ Keep Docker updated: `apt upgrade docker.io`
2. ✅ Use strong passwords for VPS
3. ✅ Enable firewall (already done)
4. ✅ Use SSL certificates
5. ✅ Regular backups of code

## Next Steps

When ready to add API:
1. Add API service to docker-compose.yml
2. Update Nginx to proxy API requests
3. Configure environment variables

---

**That's it!** Your site is now deployed and easy to update! 🎉

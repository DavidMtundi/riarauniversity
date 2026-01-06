# Fix HTTPS Directory Listing Issue

## Problem
When accessing `https://ru.ac.ke`, you see a directory listing instead of the web application. HTTP works correctly.

## Root Cause
Apache has a default SSL virtual host (port 443) that's serving a directory listing instead of proxying to your Docker container.

## Solution

### Step 1: Check Docker Container Port

First, verify what port your Docker container is using:

```bash
docker ps | grep riara-frontend
# Or
docker port riara-frontend
```

Look for the port mapping. It should be something like `0.0.0.0:8081->80/tcp` or `0.0.0.0:80->80/tcp`.

### Step 2: Update the Fix Script (if needed)

If your Docker container uses a port other than 8081, edit `fix-https-apache.sh` and change this line:

```bash
DOCKER_PORT="8081"  # Change to your actual port
```

### Step 3: Run the Fix Script

On your VPS, run:

```bash
cd /path/to/riarauniversity  # Navigate to your project directory
sudo ./fix-https-apache.sh
```

The script will:
1. ✅ Enable required Apache modules (proxy, ssl, headers)
2. ✅ Create/update SSL virtual host configuration
3. ✅ Disable default SSL site (that shows directory listing)
4. ✅ Configure HTTPS to proxy to Docker container
5. ✅ Set up HTTP to HTTPS redirect
6. ✅ Test and reload Apache

### Step 4: Verify

1. **Check Apache configuration:**
   ```bash
   sudo apache2ctl configtest
   ```

2. **Check if SSL site is enabled:**
   ```bash
   sudo a2ensite -l | grep riara-frontend
   ```

3. **Check if default SSL site is disabled:**
   ```bash
   sudo a2dissite 000-default-ssl.conf  # Should say "Site 000-default-ssl already disabled"
   ```

4. **Test in browser:**
   - Visit `https://ru.ac.ke` - should show your web app
   - Visit `http://ru.ac.ke` - should redirect to HTTPS

## Manual Configuration (Alternative)

If the script doesn't work, you can manually configure:

### 1. Enable Apache Modules

```bash
sudo a2enmod proxy proxy_http headers ssl
```

### 2. Create SSL Virtual Host

Create `/etc/apache2/sites-available/riara-frontend-ssl.conf`:

```apache
<VirtualHost *:443>
    ServerName ru.ac.ke
    ServerAlias www.ru.ac.ke
    
    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/ru.ac.ke/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/ru.ac.ke/privkey.pem
    
    # Security headers
    Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
    
    # Reverse proxy to Docker container
    ProxyPreserveHost On
    ProxyPass / http://localhost:8081/
    ProxyPassReverse / http://localhost:8081/
    
    RequestHeader set X-Forwarded-Proto "https"
    RequestHeader set X-Forwarded-Port "443"
</VirtualHost>
```

**Important:** Change `8081` to the actual port your Docker container uses!

### 3. Disable Default SSL Site

```bash
sudo a2dissite 000-default-ssl.conf
sudo a2dissite default-ssl.conf
```

### 4. Enable Your SSL Site

```bash
sudo a2ensite riara-frontend-ssl.conf
```

### 5. Test and Reload

```bash
sudo apache2ctl configtest
sudo systemctl reload apache2
```

## Troubleshooting

### Issue: SSL certificates not found

If you see an error about SSL certificates:

```bash
# Check if certificates exist
sudo ls -la /etc/letsencrypt/live/ru.ac.ke/

# If they don't exist, get them:
sudo certbot --apache -d ru.ac.ke -d www.ru.ac.ke
```

### Issue: Docker container not accessible

Check if Docker container is running:

```bash
docker ps | grep riara-frontend
docker logs riara-frontend
```

### Issue: Port conflict

Check what port Docker is using:

```bash
docker ps --format "table {{.Names}}\t{{.Ports}}"
```

Then update the Apache configuration to match.

### Issue: Still seeing directory listing

1. Make sure default SSL site is disabled:
   ```bash
   sudo a2dissite 000-default-ssl.conf
   sudo a2dissite default-ssl.conf
   ```

2. Check which sites are enabled:
   ```bash
   sudo a2ensite -l
   ```

3. Reload Apache:
   ```bash
   sudo systemctl reload apache2
   ```

### Check Apache Logs

```bash
# SSL errors
sudo tail -f /var/log/apache2/riara-frontend-ssl-error.log

# SSL access
sudo tail -f /var/log/apache2/riara-frontend-ssl-access.log
```

## Verification Checklist

- [ ] Docker container is running
- [ ] Docker container port is correct in Apache config
- [ ] SSL certificates exist and are valid
- [ ] Default SSL site is disabled
- [ ] Your SSL site is enabled
- [ ] Apache configuration test passes
- [ ] Apache reloaded successfully
- [ ] HTTPS shows web app (not directory listing)
- [ ] HTTP redirects to HTTPS

## After Fix

Your setup should now:
- ✅ Serve web app on HTTPS
- ✅ Redirect HTTP to HTTPS
- ✅ No directory listings on HTTPS


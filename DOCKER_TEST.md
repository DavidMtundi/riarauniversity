# Docker Test Instructions

## Quick Test

Once Docker Desktop is running, execute:

```bash
./test-docker.sh
```

This script will:
1. ✅ Check if Docker is running
2. ✅ Build the Docker image
3. ✅ Start the container
4. ✅ Test if website is accessible
5. ✅ Show container status and logs

## Manual Test Steps

### 1. Start Docker Desktop

**macOS:** Open Docker Desktop application  
**Linux:** `sudo systemctl start docker`

### 2. Build the Image

```bash
docker compose build
```

### 3. Start the Container

```bash
docker compose up -d
```

### 4. Check Status

```bash
# View running containers
docker ps

# View logs
docker logs riara-frontend

# Test website
curl http://localhost
# Or visit http://localhost in browser
```

### 5. Stop Container

```bash
docker compose down
```

## Expected Output

When successful, you should see:
- Container running on port 80
- Website accessible at http://localhost
- Nginx serving the React app
- All static files loading correctly

## Troubleshooting

### Port 80 already in use

```bash
# Change port in docker-compose.yml
ports:
  - "8080:80"  # Then access via http://localhost:8080
```

### Build fails

```bash
# Check Dockerfile syntax
docker build -t test .

# View detailed build output
docker compose build --progress=plain
```

### Container won't start

```bash
# Check logs
docker logs riara-frontend

# Check if port is available
lsof -i :80
```

## Next Steps After Successful Test

1. ✅ Test works locally
2. ✅ Ready to deploy to Contabo VPS
3. ✅ Follow DEPLOYMENT.md for VPS setup


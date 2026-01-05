# Riara University Website

Public-facing website for Riara University.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Wouter (routing)
- TanStack Query

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Docker Deployment

### Build and Run

```bash
# Build Docker image
docker build -t riara-frontend .

# Run container
docker run -d -p 80:80 --name riara-frontend riara-frontend

# Or use docker-compose
docker compose up -d
```

### Update

```bash
docker compose up -d --build
```

## Manual Deployment

See `DEPLOYMENT.md` for Contabo VPS deployment instructions.

## Project Structure

```
riarauniversity/
├── client/          # Frontend React app
├── server/          # Express server (dev only)
├── shared/          # Shared types/schemas
└── dist/            # Build output
```

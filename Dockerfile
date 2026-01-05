# Multi-stage build for Riara University Frontend

# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY tailwind.config.ts ./
COPY postcss.config.js ./
COPY components.json ./

# Copy source files
COPY client ./client
COPY shared ./shared
COPY attached_assets ./attached_assets

# Install dependencies
RUN npm ci

# Build only the frontend (vite build only, skip server build)
RUN npx vite build

# Stage 2: Production (Nginx)
FROM nginx:alpine

# Install wget for healthcheck
RUN apk add --no-cache wget

# Copy built files from builder
COPY --from=builder /app/dist/public /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx-frontend.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Health check (nginx:alpine has wget)
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]



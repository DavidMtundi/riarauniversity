import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react({
      // Enable automatic JSX runtime
      jsxRuntime: 'automatic',
    }),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    // Optimize chunk sizes
    chunkSizeWarningLimit: 600, // Reduced from 1000kb
    minify: 'esbuild',
    // Enable source maps only in development
    sourcemap: process.env.NODE_ENV === 'development',
    // Optimize CSS
    cssCodeSplit: true,
    cssMinify: true,
    rollupOptions: {
      output: {
        // Better chunking strategy for optimal caching
        manualChunks: (id) => {
          // React core
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }
          // React Query
          if (id.includes('node_modules/@tanstack/react-query')) {
            return 'query-vendor';
          }
          // Router
          if (id.includes('node_modules/wouter')) {
            return 'router-vendor';
          }
          // Radix UI - split into smaller chunks
          if (id.includes('node_modules/@radix-ui')) {
            const match = id.match(/@radix-ui\/([^/]+)/);
            if (match) {
              return `radix-${match[1]}`;
            }
            return 'radix-vendor';
          }
          // Heavy libraries - lazy load
          if (id.includes('node_modules/framer-motion')) {
            return 'framer-motion';
          }
          if (id.includes('node_modules/recharts')) {
            return 'recharts';
          }
          // Lucide icons - tree-shake unused
          if (id.includes('node_modules/lucide-react')) {
            return 'lucide-icons';
          }
          // Form libraries
          if (id.includes('node_modules/react-hook-form') || id.includes('node_modules/@hookform')) {
            return 'form-vendor';
          }
          // Date libraries
          if (id.includes('node_modules/date-fns')) {
            return 'date-vendor';
          }
          // Other vendor code
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Optimize chunk file names for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'wouter',
      '@tanstack/react-query',
    ],
    exclude: ['framer-motion', 'recharts'], // Lazy load these
  },
});

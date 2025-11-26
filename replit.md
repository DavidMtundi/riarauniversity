# Riara University Website

## Overview

This is a modern, institutional website built for Riara University, featuring a comprehensive information architecture that showcases academics, research, Student Life, athletics, healthcare, and arts programs. The application follows a full-stack architecture with a React frontend and Express backend, implementing a component-based design system inspired by leading university websites (Riara, Harvard, MIT, Yale).

The website presents a rich, content-driven experience with multiple sections including news articles, educational pathways, school information, research statistics, faculty/student profiles, events, and various content sections for different university programs. The design emphasizes academic authority with approachable elegance, utilizing a carefully crafted typography system and consistent spacing patterns.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript using Vite as the build tool

**Routing**: Wouter (lightweight client-side routing)
- Single-page application structure
- Currently implements home page and 404 page

**State Management**: TanStack Query (React Query)
- Server state management for all API data fetching
- Configured with infinite stale time and disabled refetching
- Custom query client with error handling
- Supports unauthorized behavior handling (401 responses)

**UI Component Library**: Radix UI primitives with shadcn/ui styling system
- "New York" style variant
- Comprehensive component set: Accordion, Alert Dialog, Avatar, Badge, Button, Card, Calendar, Carousel, Chart, Checkbox, Command, Context Menu, Dialog, Drawer, Dropdown Menu, Form, Hover Card, Input, Label, Menubar, Navigation Menu, Pagination, Popover, Progress, Radio Group, Resizable, Scroll Area, Select, Separator, Sheet, Skeleton, Slider, Switch, Tabs, Textarea, Toast, Toggle, Tooltip
- Custom utility class merging with `clsx` and `tailwind-merge`

**Styling**: Tailwind CSS with extensive customization
- Custom color system using HSL color space with alpha channel support
- Neutral base color scheme
- CSS variables for theme consistency
- Custom border radius scale: lg (9px), md (6px), sm (3px)
- Elevation system for hover/active states (elevate-1, elevate-2)
- Custom button and badge outline variables
- Light/dark mode support via class-based dark mode

**Typography**: Multi-font system
- Google Fonts integration: Architects Daughter, DM Sans, Fira Code, Geist Mono
- Serif fonts for headings (gravitas and authority)
- Sans-serif fonts for body text (clean, professional)
- Responsive type scale (5xl to 7xl for hero, down to sm for labels)

**Layout System**:
- Container-based with max-width constraints (7xl, 6xl, 4xl)
- Consistent spacing using Tailwind units (4, 6, 8, 12, 16, 20, 24)
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Grid-based layouts with responsive columns

**Component Structure**:
- Page components: Home, NotFound
- Section components: AdmissionSection, ArtsSection, AthleticsSection, CampusLifeSection, EducationSection, EventsSection, Footer, Header, HealthcareSection, HeroSection, NewsSection, ResearchSection
- Shared UI components from shadcn/ui
- Custom hooks: use-mobile, use-toast

### Backend Architecture

**Framework**: Express.js with TypeScript (ESM modules)

**Server Setup**:
- Vite middleware integration for development
- Custom logging middleware for API requests
- Request body parsing (JSON and URL-encoded)
- Raw body capture for webhook/signature verification support
- CORS and credentials handling

**API Routes** (RESTful endpoints):
- `GET /api/news` - News articles
- `GET /api/education-paths` - Educational pathways
- `GET /api/schools` - School listings
- `GET /api/research-stats` - Research statistics
- `GET /api/profiles/:type` - Profile data by type (research, campus, arts)
- `GET /api/campus-life` - Student Life sections
- `GET /api/arts` - Arts sections
- `GET /api/events` - Event listings
- `GET /api/healthcare` - Healthcare sections
- `GET /api/athletics` - Athletics sections

**Data Storage Strategy**:
- Interface-based storage abstraction (`IStorage`)
- In-memory storage implementation (`MemStorage`) for development
- Ready for database integration via storage interface
- Pre-populated with comprehensive mock data

**Development Environment**:
- Replit-specific plugins for runtime error overlay, cartographer, and dev banner
- Hot module replacement (HMR) via Vite
- Custom logging with timestamps
- Path aliases for clean imports (@, @shared, @assets)

### Data Storage Solutions

**Current Implementation**: In-memory storage with TypeScript interfaces

**Database Configuration**: Drizzle ORM with PostgreSQL
- Connection: Neon Database serverless driver
- Schema location: `shared/schema.ts`
- Migrations directory: `./migrations`
- Configured but not actively used (schema defines only users table)

**Data Models**:
- User (authentication ready with username/password)
- NewsArticle (category, title, excerpt, image, link, featured flag)
- EducationPath (title, description)
- School (name, URL)
- ResearchStat (value, label)
- Profile (name, title, quote, image, link)
- Event (type, title, date, time, image, link)
- ContentSection (title, description for reusable content blocks)

**Schema Validation**: Zod schemas generated from Drizzle tables
- Type-safe insert schemas
- Runtime validation ready

### External Dependencies

**UI Framework Dependencies**:
- @radix-ui/* (20+ component primitives for accessible UI)
- @tanstack/react-query (server state management)
- class-variance-authority (component variant management)
- cmdk (command menu component)
- embla-carousel-react (carousel functionality)
- lucide-react (icon library)
- react-hook-form with @hookform/resolvers (form management)
- vaul (drawer component)
- recharts (charting library)

**Database & ORM**:
- @neondatabase/serverless (PostgreSQL serverless driver)
- drizzle-orm (TypeScript ORM)
- drizzle-zod (Zod schema generation)
- connect-pg-simple (PostgreSQL session store for future authentication)

**Build & Development Tools**:
- vite (build tool and dev server)
- @vitejs/plugin-react (React support)
- esbuild (server bundling)
- tsx (TypeScript execution)
- @replit/vite-plugin-* (Replit-specific development tools)
- tailwindcss with autoprefixer (styling)

**Utilities**:
- date-fns (date manipulation)
- nanoid (unique ID generation)
- wouter (lightweight routing)

**Fonts**: Google Fonts API
- Architects Daughter, DM Sans, Fira Code, Geist Mono

**Future Integration Points**:
- Session management (connect-pg-simple configured)
- User authentication (schema and routes prepared)
- PostgreSQL database (Drizzle configured, needs provisioning)
- File uploads/assets (path alias configured)
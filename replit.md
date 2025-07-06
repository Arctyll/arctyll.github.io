# Arctyll - Minecraft Modding Platform

## Overview

Arctyll is a modern, open-source development platform dedicated to Minecraft modding. It features a professional, dark-themed website showcasing projects, team members, and community initiatives. The platform is built with a full-stack TypeScript architecture using React for the frontend and Express.js for the backend, with PostgreSQL as the database solution.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **UI Components**: Radix UI primitives with custom theming
- **Animations**: AOS (Animate On Scroll) library
- **Font**: Google Fonts (Outfit)

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Build Tool**: Vite for frontend, esbuild for backend
- **Development**: Hot module replacement with Vite middleware

### Database Layer
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: User management system with username/password authentication

## Key Components

### User Interface
- **Theme System**: Dark/light mode toggle with system preference detection
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Component Architecture**: Reusable UI components following shadcn/ui patterns
- **Navigation**: Sticky navbar with dropdown menus and mobile sheet navigation

### Page Structure
1. **Landing Page**: Hero section with call-to-action buttons
2. **Projects**: Categorized display of mods, clients, and APIs
3. **Team**: Contributor profiles with GitHub integration
4. **Downloads**: Filterable project downloads with version support
5. **Blog**: Announcements and community updates
6. **Contact**: EmailJS-powered contact form
7. **Commitment**: Open source philosophy page

### Styling System
- **Design Tokens**: CSS custom properties for theming
- **Component Variants**: Class Variance Authority for component styling
- **Animations**: Smooth transitions and hover effects
- **Status Badges**: Color-coded project status indicators (alpha/beta/stable)

## Data Flow

### Frontend Data Management
- **Query Client**: TanStack Query for API state management
- **Form Handling**: React Hook Form with Zod validation
- **Toast Notifications**: Radix UI toast system for user feedback
- **Theme Persistence**: localStorage for theme preferences

### Backend API Structure
- **Route Registration**: Centralized route management in `server/routes.ts`
- **Storage Interface**: Abstracted storage layer supporting multiple implementations
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Logging**: Comprehensive request/response logging for API endpoints

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Libraries**: Radix UI components, Lucide React icons
- **Styling**: Tailwind CSS, Class Variance Authority, clsx
- **Backend**: Express.js, Drizzle ORM, connect-pg-simple
- **Build Tools**: Vite, esbuild, TypeScript

### Third-Party Integrations
- **EmailJS**: Contact form email delivery
- **Neon Database**: Serverless PostgreSQL hosting
- **Google Fonts**: Outfit font family
- **AOS Library**: Scroll-based animations

### Development Tools
- **Replit Integration**: Development environment support
- **Runtime Error Overlay**: Enhanced development debugging
- **Cartographer**: Replit-specific development tooling

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild compiles Express server to `dist/index.js`
3. **Database Migrations**: Drizzle Kit manages schema migrations

### Environment Configuration
- **Development**: Hot reload with Vite dev server
- **Production**: Static file serving with Express
- **Database**: Environment variable-based connection string

### Deployment Commands
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Database schema migration

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
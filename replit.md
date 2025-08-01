# Portfolio Website

## Overview

This is a modern personal portfolio website for Kanhiya Solanki, an AI-ML enthusiast and full stack developer. The application showcases his skills, projects, education, and extensive certifications (15+) through an interactive, responsive web interface. Features a stunning mountain landscape background, gradient-styled name presentation, and functional contact form with SendGrid email integration. Built as a full-stack application with React frontend and Express backend, it demonstrates modern web development practices and serves as both a portfolio and a foundation for future enhancements.

## Recent Updates (August 2025)
- Updated hero section with mountain landscape background and gradient name styling
- Increased profile photo size and improved layout spacing  
- Changed navigation to "KS" logo design
- Added functional contact form with SendGrid email integration
- Updated GitHub and LinkedIn links to correct profiles
- Expanded certifications section with 15+ achievements including:
  - Java Programming, OOP, DSA courses from LPU
  - Computer Communications Specialization from University of Colorado
  - Google Networking certifications
  - Community service and theatre achievements
- Improved certifications display with scrollable layout and external links

## User Preferences

Preferred communication style: Simple, everyday language.
Portfolio Design: Dark classy background with mountain landscape, vibrant gradient name styling, larger profile photos, minimal spacing, "KS" logo design for navigation.

## System Architecture

### Frontend Architecture
- **React with TypeScript**: Modern component-based UI framework using functional components and hooks
- **Routing**: Wouter for lightweight client-side routing with support for single-page navigation
- **State Management**: React Query (@tanstack/react-query) for server state management and caching
- **Styling**: Tailwind CSS for utility-first styling with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Animations**: Framer Motion for smooth page transitions and interactive animations
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Express.js**: Node.js web framework serving as API backend and static file server
- **TypeScript**: Full type safety across the entire application stack
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) ready for database integration
- **Development Setup**: Vite middleware integration for hot module replacement in development
- **Production Ready**: ESBuild bundling for optimized server-side code

### Database Design
- **Schema**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **User Model**: Basic user schema with username/password fields and UUID primary keys
- **Validation**: Zod schema validation integrated with Drizzle for runtime type checking
- **Migrations**: Drizzle Kit for database schema management and migrations

### Development Environment
- **Replit Integration**: Configured for Replit hosting with development banner and cartographer support
- **Hot Reload**: Full-stack hot reload with Vite for frontend and tsx for backend development
- **TypeScript Configuration**: Shared types between client and server with path mapping
- **Linting & Formatting**: Consistent code style across the entire project

### Design System
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Theme System**: CSS custom properties with light/dark mode support
- **Typography**: Inter font family for modern, readable text
- **Color Palette**: Professional blue-based color scheme with semantic color tokens
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities

The architecture prioritizes developer experience, type safety, and scalability while maintaining a clean separation of concerns between frontend presentation, backend logic, and data persistence layers.

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express.js**: Backend web server framework
- **TypeScript**: Static typing for both frontend and backend
- **Vite**: Build tool and development server
- **Node.js**: Server runtime environment

### Database & ORM
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **Drizzle Kit**: Database migration and schema management tools

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI component primitives for accessibility
- **shadcn/ui**: Pre-built component library based on Radix UI
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library with consistent design

### State Management & Data Fetching
- **@tanstack/react-query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **@hookform/resolvers**: Integration with validation libraries

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Development tooling for Replit
- **tsx**: TypeScript execution for Node.js development

### Validation & Utilities
- **Zod**: Runtime type validation and schema parsing
- **date-fns**: Date manipulation and formatting utilities
- **clsx**: Conditional className utility
- **class-variance-authority**: Component variant management

### Routing & Navigation
- **Wouter**: Lightweight routing library for React
- **React Router**: Alternative routing solution (available but not actively used)

The dependency structure emphasizes modern development practices, type safety, and developer experience while maintaining a relatively lightweight bundle size for optimal performance.
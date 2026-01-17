# ComNex.

> A modern, full-featured e-commerce platform built with Next.js and cutting-edge web technologies.

## 🌟 Features

- **Modern UI Components** - Beautifully crafted components powered by Radix UI and shadcn/ui
- **Product Management** - Browse, view, and manage products with detailed pages
- **Authentication** - Secure user authentication with NextAuth.js
- **Dark Mode** - Seamless theme switching with next-themes
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Form Handling** - Robust form validation using React Hook Form
- **Icons & Animations** - Rich icon library with smooth animations
- **API Routes** - RESTful API endpoints for products and other resources

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js 16.1](https://nextjs.org) - React framework for production
- **UI Library**: [React 19.2](https://react.dev) - JavaScript library for building user interfaces
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com) - Utility-first CSS framework
- **Component Libraries**:
  - [shadcn/ui](https://ui.shadcn.com) - Built on Radix UI and Tailwind CSS
- **Authentication**: [NextAuth.js 4.24](https://next-auth.js.org) - Authentication for Next.js
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support
- **Form Handling**: [React Hook Form 7.71](https://react-hook-form.com) - Performant forms
- **Icons**:
  - [Lucide React](https://lucide.dev) - Beautiful SVG icons
  - [Hugeicons React](https://hugeicons.com) - Modern icon library
- **Notifications**: [Sonner](https://sonner.emilkowal.ski) - Toast notifications
- **Linting**: [ESLint 9](https://eslint.org) - JavaScript linter

## 📦 Installation

### Prerequisites

- **Node.js** 18+ or **Bun** runtime
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Setup

1. **Clone the repository**

   ```bash
   git clone <repo_url>
   cd comnex
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Environment Variables** (if needed)
   ```bash
   touch .env
   # Edit .env.local with your configuration
   ```

## 🚀 Getting Started

### Development Server

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The app will auto-reload as you make changes to the code.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📝 Key Features Explained

### Authentication

The application includes secure authentication using NextAuth.js with dedicated login and sign-up pages. Authentication actions are managed in the `actions/` directory.

### Product Management

Browse and view detailed product information with:

- Product listing page
- Individual product detail pages
- API endpoints for product data retrieval

### Component Library

Utilizes a comprehensive component library built on Shadcn and Tailwind CSS, ensuring accessibility and consistency across the application.

### Theme Support

Integrated dark mode support with `next-themes` for seamless theme switching across the entire application.

## 🔗 API Endpoints

- `GET /api/products` - Fetch all products
- `GET /api/products/[id]` - Fetch product by ID

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://radix-ui.com)
- [NextAuth.js Documentation](https://next-auth.js.org)

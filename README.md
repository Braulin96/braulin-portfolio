# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite, showcasing my front-end development skills and projects.

## 🚀 Live Demo

[View Live Portfolio](your-portfolio-url-here)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contact](#contact)

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Project Showcase**: Interactive gallery of development projects
- **Skills Visualization**: Dynamic display of technical skills and expertise
- **Contact Integration**: Direct contact form with EmailJS integration
- **Performance Optimized**: Fast loading with Vite's lightning-fast build tool
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Type Safety**: Full TypeScript implementation for better code reliability
- **CMS Integration**: Dynamic content management with DatoCMS

## 🛠 Tech Stack

### Core
- **React 19** - UI library for building user interfaces
- **TypeScript** - Static type checking for JavaScript
- **Vite 7** - Next generation frontend build tool

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **SCSS** - CSS preprocessor for enhanced styling capabilities
- **Framer Motion** - Production-ready motion library for React
- **HeadlessUI** - Unstyled, accessible UI components
- **AOS** - Animate On Scroll library

### Components & Interactions
- **React Slick** - Carousel component for image galleries
- **Swiper** - Modern slider component
- **React Responsive** - Media queries in React component

### Content Management
- **DatoCMS** - Headless CMS for content management
- **GraphQL Request** - GraphQL client for data fetching

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Jest** - JavaScript testing framework
- **Testing Library** - Testing utilities for React components
- **Generate React CLI (GRC)** - Component generation tool

### Integrations
- **EmailJS** - Email service for contact form functionality

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── sections/           # Page sections and layouts
├── assets/             # Images, icons, and static files
├── styles/             # Global styles and SCSS modules
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and helpers
└── grc/                # Component templates for GRC
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Braulin96/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Update the environment variables with your EmailJS and DatoCMS configuration.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the project for production (includes TypeScript compilation) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run test` | Run Jest tests |

## 🔧 Development

### Component Generation

This project uses [Generate React CLI](https://github.com/arminbro/generate-react-cli) for consistent component creation:

```bash
# Generate a new component
npx grc component ComponentName

# Generate a new section
npx grc section SectionName
```

### Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with React and TypeScript rules
- **Prettier**: Code formatting (configure according to your preferences)

### Testing

The project includes comprehensive testing setup with Jest and React Testing Library:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test -- --coverage
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3 + CloudFront**: For scalable static hosting

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS 4 with the new Vite plugin (`@tailwindcss/vite`) for improved performance. Custom color variables are defined in the main CSS file.

### TypeScript

TypeScript configuration uses the latest TypeScript 5.8 with strict type checking enabled.

### Testing

Jest is configured with:
- **jsdom** environment for DOM testing
- **@testing-library/jest-dom** for enhanced assertions
- **identity-obj-proxy** for CSS module mocking

## 📱 Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Please open an issue to discuss any changes.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Braulin Pires**
- Email: braulinpires.email@hotmail.com
- LinkedIn: [Braulin Pires](https://www.linkedin.com/in/braulin-pires-7a13b3145/)
- GitHub: [@Braulin96](https://github.com/Braulin96)
- Portfolio: [your-portfolio-url.com](https://your-portfolio-url.com)

---

*Built with ❤️ using React, TypeScript, and modern web technologies*
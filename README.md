# 🍭 BonBon - Vite & Rollup Super Library

**Created by Kimberley Hale**

*Where the treat is both, and one is the fallback.*

---

**BonBon** is a revolutionary super library that combines the power of **Vite** (lightning-fast dev server) with the flexibility and reliability of **Rollup** (proven fallback bundler). The best of both worlds for modern web development.

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development with Vite
```bash
npm run dev
```

### Development Server Only
```bash
npm run dev:server
```

### Build with Vite
```bash
npm run build
```

### Build with Rollup (Fallback)
```bash
npm run build:rollup
```

### Watch Mode
```bash
npm run watch
```

## 🍬 What is BonBon?

BonBon is a **dual-bundler system** that leverages:

- **Vite** - Primary bundler for development & production
  - Sub-millisecond HMR (Hot Module Replacement)
  - Lightning-fast dev server
  - Modern ES module support
  
- **Rollup** - Fallback/alternative bundler
  - Battle-tested reliability
  - Extensive plugin ecosystem
  - Advanced code splitting control
  - Legacy browser compatibility

## 📁 Project Structure

```
bonbon/
├── public/
│   ├── index.html              # Master HTML with BonBon branding
│   ├── css/
│   │   └── style.css           # Custom styles
│   └── js/
│       └── main.js             # BonBon utilities
├── src/
│   └── index.js                # Vite/Rollup entry point
├── dist/
│   ├── bundle-[hash].js        # Vite output
│   └── bundle-fallback.js      # Rollup fallback output
├── server.js                   # Express.js server
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration (PRIMARY)
├── rollup.config.js            # Rollup configuration (FALLBACK)
├── tailwind.config.js          # Tailwind CSS config
└── .github/workflows/
    └── node.yml                # GitHub Actions CI/CD
```

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Bundlers** | Vite + Rollup |
| **Runtime** | Node.js + Express.js |
| **Frontend** | HTML5 + Bootstrap 5 + Tailwind CSS |
| **Deployment** | cPanel Ready |
| **CI/CD** | GitHub Actions |

## 🎯 BonBon Features

✨ **Dual Bundling System**
- Use Vite for blazing-fast development
- Fall back to Rollup if needed
- Automatic output to separate bundles

✅ **Production Ready**
- Optimized builds with code splitting
- Tree-shaking and minification
- Source maps for debugging

🔄 **Hot Module Replacement (HMR)**
- Instant updates during development
- Smooth development experience

📦 **Multiple Formats**
- IIFE format for browser compatibility
- Named output exports
- Asset optimization

🚀 **cPanel Compatible**
- Ready for production deployment
- Express.js backend included
- Static file serving pre-configured

## 🌐 API Endpoints

- `GET /` - BonBon homepage
- `GET /api/health` - Server health check with bundler info
- `POST /api/contact` - Contact form submission

## 📝 Scripts Explained

```bash
npm run dev              # Start Vite dev server on port 5173
npm run dev:server      # Start Express backend on port 3000
npm run build           # Build with Vite (PRIMARY)
npm run build:rollup    # Build with Rollup (FALLBACK)
npm run preview         # Preview Vite production build
npm run watch           # Watch mode for Vite builds
```

## 🎨 Development Workflow

### Primary (Vite)
```bash
npm run dev              # Start Vite dev server
# Changes auto-reload with HMR
npm run build            # Production build
```

### Fallback (Rollup)
```bash
npm run build:rollup     # Alternative build method
# Useful if Vite encounters issues
```

### Full Stack Development
```bash
# Terminal 1: Start Express backend
npm run dev:server

# Terminal 2: Start Vite frontend dev server
npm run dev

# Access at http://localhost:5173
```

## 🚢 Deployment to cPanel

1. Push to GitHub
2. SSH into cPanel
3. Clone the repository
4. Run `npm install`
5. Run `npm run build` (uses Vite by default)
6. Configure Node.js application in cPanel
7. Set `server.js` as entry point
8. Set build folder to `dist`

## 🔄 Switching Between Bundlers

**Use Vite if:**
- Developing locally (faster HMR)
- Need modern ES module support
- Want zero configuration

**Use Rollup if:**
- Need legacy browser support
- Require advanced code-splitting control
- Vite has compatibility issues

## 📚 Documentation

- [Vite Official Docs](https://vitejs.dev/)
- [Rollup Official Docs](https://rollupjs.org/)
- [Bootstrap Docs](https://getbootstrap.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Express.js Docs](https://expressjs.com/)

## 🍭 Why "BonBon"?

BonBon represents the sweet combination of two powerful technologies:
- **Vite** = Fast, modern, cutting-edge ⚡
- **Rollup** = Reliable, flexible, proven 🔧
- **BonBon** = The sweet treat where both are enjoyed, and one is the fallback 🍬

Created with ❤️ by **Kimberley Hale**

*Where the treat is both, and one is the fallback.*

## 📄 License

ISC

---

**BonBon: Where Vite's Speed Meets Rollup's Reliability** 🍭✨

# Playground - Master Rollup Configuration

Your complete Node.js application with Bootstrap, Tailwind CSS, and Rollup bundler.

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
npm run watch
```

## 📁 Project Structure

```
playground/
├── public/
│   ├── index.html          # Master HTML file with Bootstrap & Tailwind
│   ├── css/
│   │   └── style.css       # Custom styles
│   └── js/
│       └── main.js         # JavaScript utilities
├── src/
│   └── index.js            # Rollup entry point
├── dist/
│   └── bundle.js           # Rollup bundled output
├── server.js               # Express.js server
├── package.json            # Dependencies & scripts
├── rollup.config.js        # Rollup bundler config
├── tailwind.config.js      # Tailwind CSS config
└── .github/workflows/
    └── node.yml            # GitHub Actions CI/CD
```

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **Frontend**: HTML5 + Bootstrap 5 + Tailwind CSS
- **Bundler**: Rollup.js
- **Deployment**: cPanel Compatible
- **CI/CD**: GitHub Actions

## 📦 Included Features

✅ Responsive master HTML layout
✅ Bootstrap navigation and components
✅ Tailwind CSS utility classes
✅ Rollup bundler configuration
✅ Express.js API endpoints
✅ Contact form handling
✅ GitHub Actions workflow
✅ Smooth scrolling & Bootstrap initialization

## 🌐 API Endpoints

- `GET /` - Master HTML page
- `GET /api/health` - Server health check
- `POST /api/contact` - Contact form submission

## 🚢 Deployment to cPanel

1. Push to GitHub
2. SSH into cPanel
3. Clone the repository
4. Run `npm install`
5. Configure Node.js application in cPanel
6. Set `server.js` as entry point

## 📝 Environment Variables

Create `.env` file:
```
PORT=3000
NODE_ENV=production
```

## 📖 Documentation

- [Bootstrap Docs](https://getbootstrap.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Rollup Docs](https://rollupjs.org/)
- [Express.js Docs](https://expressjs.com/)

## 📄 License

ISC

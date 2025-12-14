# Garami Jiu Jitsu

A React + TypeScript project built with Vite, deployed on GitHub Pages.

## Environment Setup

### Prerequisites

1. **Node.js** (version 16.x or 18.x recommended for macOS 11)
   - Your current system Node.js is incompatible with macOS 11
   - **Option 1: Use nvm (Recommended)**
     ```bash
     # Load nvm (add to ~/.zshrc if not already there)
     export NVM_DIR="$HOME/.nvm"
     [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
     
     # Install and use Node.js 16 or 18
     nvm install 16
     nvm use 16
     ```
   
   - **Option 2: Download directly**
     - Visit [nodejs.org](https://nodejs.org/)
     - Download Node.js 16.x or 18.x LTS for macOS
     - Install the .pkg file

2. **Verify installation**
   ```bash
   node --version  # Should show v16.x.x or v18.x.x
   npm --version   # Should show version number
   ```

### Project Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## Deployment to GitHub Pages

### Initial Setup

1. **Create a GitHub repository**
   - Create a new repository on GitHub (e.g., `GaramiJiujitsu`)
   - Note the repository name - you'll need it for the base path

2. **Update base path in `vite.config.ts`**
   - If your repository is named `GaramiJiujitsu`, the base path is already set correctly
   - If using a different name, update the `base` property in `vite.config.ts`:
     ```typescript
     base: process.env.NODE_ENV === 'production' ? '/YourRepoName/' : '/',
     ```
   - If using a custom domain, set `base: '/'`

3. **Initialize Git and push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Nerddbucket/GaramiJiujitsu.git
   git push -u origin main
   ```

4. **Enable GitHub Pages (REQUIRED - Do this first!)**
   - Go to your repository on GitHub: `https://github.com/Nerddbucket/GaramiJiujitsu`
   - Navigate to **Settings** → **Pages** (in the left sidebar)
   - Under **Source**, select **GitHub Actions** (NOT "Deploy from a branch")
   - Click **Save**
   - The workflow will automatically deploy on every push to `main`
   - **Note**: If you see "Not Found" errors, make sure Pages is enabled in Settings first!

### Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
- Automatically builds and deploys on every push to `main`
- Can be manually triggered from the Actions tab
- Deploys to GitHub Pages using the latest GitHub Actions

### Manual Deployment

If you need to deploy manually:
```bash
npm run build
# Then upload the dist/ folder contents to GitHub Pages
```

## Project Structure

```
GaramiJiujitsu/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
├── public/
│   └── assets/             # Static assets (logos, images)
├── src/
│   ├── components/         # React components
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # React entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── .gitignore            # Git ignore rules
```

## Troubleshooting

- **"Node.js incompatible" error**: Install a compatible Node.js version using nvm or download from nodejs.org
- **"Cannot find module 'react'"**: Run `npm install` to install dependencies
- **TypeScript errors**: Ensure all dependencies are installed and TypeScript is properly configured
- **GitHub Pages 404 errors**: Verify the `base` path in `vite.config.ts` matches your repository name
- **Assets not loading**: Ensure asset paths use `/assets/` (with leading slash) for GitHub Pages


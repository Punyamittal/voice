# Netlify Deployment Guide

## Prerequisites
- Your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- You have a Netlify account

## Deployment Steps

### 1. Connect to Netlify
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "New site from Git"
3. Choose your Git provider and select your repository

### 2. Configure Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node version**: 18 (or your preferred version)

### 3. Environment Variables (if needed)
Add any environment variables your app needs in the Netlify dashboard under Site settings > Environment variables.

### 4. Deploy
Click "Deploy site" and wait for the build to complete.

## Important Notes

### API Routes
This project uses Netlify Functions instead of Next.js API routes:
- `/api/form/submit` → `/.netlify/functions/form-submit`
- `/api/form/status` → `/.netlify/functions/form-status`
- `/api/form/questions` → `/.netlify/functions/form-questions`

### Static Export
The app is configured for static export (`output: 'export'`), which means:
- No server-side rendering
- All pages are pre-built at build time
- API routes are handled by Netlify Functions

### Troubleshooting
If you get a 404 error:
1. Check that the build completed successfully
2. Verify the publish directory is set to `out`
3. Check that all API calls use the `/.netlify/functions/` prefix
4. Ensure your `netlify.toml` file is in the root directory

## Local Development
```bash
npm run dev
```

## Build Locally
```bash
npm run build
```

The built files will be in the `out` directory. 
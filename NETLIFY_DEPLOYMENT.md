# Netlify Deployment Guide

## Quick Deploy

### Option 1: Deploy via Netlify Dashboard

1. **Connect your repository** to Netlify
2. **Build settings** (auto-configured via `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

3. **Add Environment Variable**:
   - Go to: Site settings → Environment variables
   - Add: `GEMINI_API_KEY` = `your_api_key_here`

4. Click **Deploy site**

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Environment Variables

The following environment variable must be set in Netlify:

- `GEMINI_API_KEY`: Your Google Gemini API key (get it from https://aistudio.google.com/app/apikey)

**Important**: Do NOT commit `.env.local` to git. It's already ignored via `.gitignore`.

## Configuration Files

- `netlify.toml`: Build configuration
- `public/_redirects`: SPA routing (redirects all routes to index.html)
- `.env.example`: Template for environment variables

## Verify Deployment

After deployment:
1. Check if the site loads correctly
2. Test the chat widget functionality
3. Verify all page routes work (Home, Research, Methodology, Training, Services)

## Troubleshooting

### Chat widget shows "Communication Failure"
- Verify `GEMINI_API_KEY` is set in Netlify environment variables
- Check API key is valid at https://aistudio.google.com/app/apikey

### 404 errors on page refresh
- Ensure `public/_redirects` exists and contains: `/*    /index.html   200`
- Verify the file was copied to `dist/_redirects` during build

### Build fails
- Check Node version is 18 or higher
- Verify all dependencies are in `package.json`
- Run `npm install` and `npm run build` locally first

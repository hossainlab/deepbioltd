# Performance Optimization Guide (Next.js)

## Implemented Optimizations

### 1. Next.js Image Optimization
- ✅ Switched to `next/image` for all assets.
- ✅ Automatic WebP/AVIF conversion enabled in `next.config.mjs`.
- ✅ Responsive sizes implemented with `sizes` attribute.
- ✅ Priority loading for LCP elements (Hero sections).
- ✅ Reduced CLS (Cumulative Layout Shift) by providing explicit dimensions.

### 2. Code Splitting & Dynamic Imports
- ✅ Large components are loaded using `next/dynamic`.
- ✅ Strategic use of Server Components for zero-bundle impact.
- ✅ Route-based splitting handled automatically by Next.js App Router.

### 3. Asset Compression
- ✅ Custom `scripts/compress-images.mjs` using `sharp` for pre-build optimization.
- ✅ Fixed Unsplash URL typos (`auto=format`) for better CDN delivery.
- ✅ Removed unused assets and components (`LazyImage.tsx`).

### 4. Runtime Performance
- ✅ Optimized `.glass` CSS effect with hardware acceleration (`transform: translateZ(0)`).
- ✅ Throttled scroll handlers and passive event listeners.
- ✅ Optimized font delivery via `next/font/google`.

### 5. Code Health
- ✅ Refactored large static data (ambassadors, speakers) into `lib/data.ts` to reduce component size.
- ✅ Enforced strict type checking for better build-time optimization.

## Usage Instructions

### Adding New Images
1. Always use the `<Image />` component from `next/image`.
2. Provide a descriptive `alt` tag.
3. For Hero images, add the `priority` attribute.
4. Run the compression script before committing large images:
   ```bash
   node scripts/compress-images.mjs
   ```

### Performance Monitoring
- **Lighthouse**: Run in Chrome DevTools (Incognito mode).
- **Vercel Analytics**: Monitor Core Web Vitals in production.
- **Bundle Analyzer**: Run `npm run build` to see chunk sizes.

## Goals
- **LCP (Largest Contentful Paint)**: < 1.2s
- **CLS (Cumulative Layout Shift)**: < 0.05
- **TBT (Total Blocking Time)**: < 200ms

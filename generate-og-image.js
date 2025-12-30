/**
 * OG Image Generator Script
 * Generates a 1200x630 social media preview image from the HTML template
 *
 * Usage:
 * 1. Install dependencies: npm install puppeteer
 * 2. Run: npm run generate-og-image
 *    OR: node generate-og-image.js
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateOGImage() {
  console.log('🚀 Starting OG image generation...');

  let browser;
  try {
    // Launch browser
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set viewport to exact OG image dimensions
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 2 // 2x for high DPI displays
    });

    // Load the HTML template
    const templatePath = path.join(__dirname, 'public', 'og-image-template.html');
    const templateUrl = `file://${templatePath.replace(/\\/g, '/')}`;

    console.log('📄 Loading template:', templateUrl);
    await page.goto(templateUrl, {
      waitUntil: 'networkidle0'
    });

    // Wait for fonts to load
    await page.waitForTimeout(1000);

    // Take screenshot
    const outputPath = path.join(__dirname, 'public', 'og-image.png');

    await page.screenshot({
      path: outputPath,
      type: 'png',
      clip: {
        x: 0,
        y: 0,
        width: 1200,
        height: 630
      }
    });

    console.log('✅ OG image generated successfully!');
    console.log('📁 Saved to:', outputPath);
    console.log('');
    console.log('Next steps:');
    console.log('1. Check the generated image at:', outputPath);
    console.log('2. Test your social preview at: https://www.opengraph.xyz/');
    console.log('3. Deploy your site to see it live!');

  } catch (error) {
    console.error('❌ Error generating OG image:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the generator
generateOGImage().catch((error) => {
  if (error.message.includes('Cannot find module')) {
    console.error('❌ Puppeteer is not installed!');
    console.log('');
    console.log('Please install it by running:');
    console.log('  npm install puppeteer');
    console.log('');
    console.log('Or use the manual method described in og-image-template.html');
  }
  process.exit(1);
});

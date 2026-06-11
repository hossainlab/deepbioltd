import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const TARGET_KB = 200;
const TARGET_BYTES = TARGET_KB * 1024;
const MIN_SIZE = TARGET_BYTES; // Only compress files over 200KB

const IMAGE_DIRS = [
  'public/images/career-guide/ambassador_photo',
  'public/images/career-guide/partners',
  'public/images/career-guide/speakers',
  'public/images/team',
  'public/images/papers',
  'public/images/management',
  'public/partner_logos',
  'public/case_studies/img',
  'public/biohpc',
  'public/images/biohpc',
];

async function getImageFiles(dir) {
  try {
    const entries = await readdir(dir);
    const files = [];
    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const ext = extname(entry).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        const s = await stat(fullPath);
        if (s.size > MIN_SIZE) {
          files.push({ path: fullPath, size: s.size });
        }
      }
    }
    return files;
  } catch {
    return [];
  }
}

async function compressImage(filePath, originalSize) {
  const ext = extname(filePath).toLowerCase();
  const name = basename(filePath);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Resize if very large (max 1200px width for photos, 800px for logos)
    const isLogo = filePath.includes('partner_logos') || filePath.includes('partners');
    const maxWidth = isLogo ? 800 : 1200;
    const maxHeight = isLogo ? 800 : 1200;

    let pipeline = sharp(filePath);

    if (metadata.width > maxWidth || metadata.height > maxHeight) {
      pipeline = pipeline.resize(maxWidth, maxHeight, { fit: 'inside', withoutEnlargement: true });
    }

    // Compress based on format
    let outputPath = filePath;
    let buffer;

    if (ext === '.png') {
      // Try WebP first for PNGs (much smaller)
      buffer = await pipeline.webp({ quality: 80 }).toBuffer();
      if (buffer.length > TARGET_BYTES) {
        buffer = await pipeline.webp({ quality: 65 }).toBuffer();
      }
      if (buffer.length > TARGET_BYTES) {
        buffer = await pipeline.webp({ quality: 50 }).toBuffer();
      }
      // Keep .png extension but write WebP content — actually, keep original ext for compatibility
      // Just compress as PNG
      buffer = await pipeline.png({ quality: 80, compressionLevel: 9 }).toBuffer();
      if (buffer.length > TARGET_BYTES) {
        // Fall back to JPEG if PNG is still too large and image is not transparent
        if (!metadata.hasAlpha) {
          buffer = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
          if (buffer.length > TARGET_BYTES) {
            buffer = await pipeline.jpeg({ quality: 65, mozjpeg: true }).toBuffer();
          }
          if (buffer.length > TARGET_BYTES) {
            buffer = await pipeline.jpeg({ quality: 50, mozjpeg: true }).toBuffer();
          }
        } else {
          // Try lower quality PNG
          buffer = await pipeline.png({ quality: 60, compressionLevel: 9 }).toBuffer();
        }
      }
    } else {
      // JPEG/WebP
      buffer = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
      if (buffer.length > TARGET_BYTES) {
        buffer = await pipeline.jpeg({ quality: 65, mozjpeg: true }).toBuffer();
      }
      if (buffer.length > TARGET_BYTES) {
        buffer = await pipeline.jpeg({ quality: 50, mozjpeg: true }).toBuffer();
      }
      if (buffer.length > TARGET_BYTES) {
        buffer = await pipeline.jpeg({ quality: 40, mozjpeg: true }).toBuffer();
      }
    }

    // Write compressed buffer back to original path
    await sharp(buffer).toFile(filePath + '.tmp');
    await unlink(filePath);
    await rename(filePath + '.tmp', filePath);

    const newSize = buffer.length;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    console.log(`✓ ${name}: ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (${savings}% saved)`);
    return { original: originalSize, compressed: newSize };
  } catch (err) {
    console.error(`✗ ${name}: ${err.message}`);
    return { original: originalSize, compressed: originalSize };
  }
}

async function main() {
  let totalOriginal = 0;
  let totalCompressed = 0;
  let fileCount = 0;

  for (const dir of IMAGE_DIRS) {
    const files = await getImageFiles(dir);
    if (files.length === 0) continue;

    console.log(`\n📁 ${dir} (${files.length} files over ${TARGET_KB}KB)`);

    for (const file of files) {
      const result = await compressImage(file.path, file.size);
      totalOriginal += result.original;
      totalCompressed += result.compressed;
      fileCount++;
    }
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`Total: ${fileCount} files`);
  console.log(`Before: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB`);
  console.log(`After:  ${(totalCompressed / 1024 / 1024).toFixed(1)}MB`);
  console.log(`Saved:  ${((totalOriginal - totalCompressed) / 1024 / 1024).toFixed(1)}MB (${((totalOriginal - totalCompressed) / totalOriginal * 100).toFixed(1)}%)`);
}

main();

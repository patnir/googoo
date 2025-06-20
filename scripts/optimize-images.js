const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const outputDir = path.join(process.cwd(), 'public/optimized');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const optimizeImages = async () => {
  const files = fs.readdirSync(publicDir)
    .filter(file => /\.(png|jpg|jpeg)$/i.test(file));

  for (const file of files) {
    const inputPath = path.join(publicDir, file);
    const name = path.parse(file).name;
    
    console.log(`Optimizing ${file}...`);
    
    // Create WebP version
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(path.join(outputDir, `${name}.webp`));
      
    // Create AVIF version (even smaller)
    await sharp(inputPath)
      .avif({ quality: 80 })
      .toFile(path.join(outputDir, `${name}.avif`));
      
    // Create responsive sizes
    const sizes = [400, 800, 1200];
    for (const size of sizes) {
      await sharp(inputPath)
        .resize(size, null, { withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(path.join(outputDir, `${name}-${size}w.webp`));
    }
  }
  
  console.log('Image optimization complete!');
};

optimizeImages().catch(console.error); 
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Render at 2x for sharp display on high-DPI screens.
const SCALE = 2;
const W = 1200 * SCALE;
const H = 630 * SCALE;
const NAVY = '#0f172a';
const NAVY_MID = '#1e293b';
const WHITE = '#f1f5f9';
const SKY = '#38bdf8';

// `node build-og-image.js` builds the site image; `node build-og-image.js careers` builds the careers one.
const VARIANTS = {
  site: {
    file: 'og-image-v3.png',
    line1: 'Holistic', line2: 'Governance',
    tag1: 'Clarity and confidence in governance', tag2: 'through knowledge, data, and technology.',
    footer: 'HG-AU.COM',
  },
  careers: {
    file: 'og-careers.png',
    line1: 'Help build', line2: 'HG Intel',
    tag1: 'Developer roles: TypeScript / Next.js.', tag2: 'Remote, anywhere in Australia.',
    footer: 'HG-AU.COM/CAREERS',
  },
};

async function build(v) {
  const logoPath = path.join(__dirname, 'logo-hg-trimmed.png');
  const logoMeta = await sharp(logoPath).metadata();
  const logoTargetH = 360 * SCALE;
  const logoTargetW = Math.round(logoMeta.width * (logoTargetH / logoMeta.height));
  const logoBuf = await sharp(logoPath)
    .resize({ height: logoTargetH, kernel: sharp.kernel.lanczos3 })
    .toBuffer();

  const logoX = 90 * SCALE;
  const logoY = Math.round((H - logoTargetH) / 2);
  const textX = logoX + logoTargetW + 60 * SCALE;
  const s = v => v * SCALE;

  const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${NAVY}"/>
      <stop offset="100%" stop-color="${NAVY_MID}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="${H - s(6)}" width="${W}" height="${s(6)}" fill="${SKY}"/>

  <text x="${textX}" y="${s(260)}" font-family="Georgia, 'Cormorant Garamond', serif" font-size="${s(86)}" font-weight="400" fill="${WHITE}">${v.line1}</text>
  <text x="${textX}" y="${s(360)}" font-family="Georgia, 'Cormorant Garamond', serif" font-size="${s(86)}" font-weight="400" fill="${SKY}">${v.line2}</text>

  <line x1="${textX}" y1="${s(400)}" x2="${textX + s(80)}" y2="${s(400)}" stroke="${SKY}" stroke-width="${s(2)}"/>

  <text x="${textX}" y="${s(450)}" font-family="'Segoe UI', 'DM Sans', Arial, sans-serif" font-size="${s(22)}" fill="${WHITE}" opacity="0.85">${v.tag1}</text>
  <text x="${textX}" y="${s(482)}" font-family="'Segoe UI', 'DM Sans', Arial, sans-serif" font-size="${s(22)}" fill="${WHITE}" opacity="0.85">${v.tag2}</text>

  <text x="${textX}" y="${s(560)}" font-family="'Segoe UI', 'DM Sans', Arial, sans-serif" font-size="${s(18)}" fill="${SKY}" letter-spacing="${s(3)}">${v.footer}</text>
</svg>`;

  await sharp(Buffer.from(svg))
    .composite([{ input: logoBuf, left: logoX, top: logoY }])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(path.join(__dirname, v.file));

  console.log(`Wrote ${v.file} (${W}x${H})`);
}

build(VARIANTS[process.argv[2] || 'site']).catch(e => { console.error(e); process.exit(1); });

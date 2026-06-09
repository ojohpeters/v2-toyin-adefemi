/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in `out/` so it can be hosted on Bluehost
  // (shared cPanel hosting) alongside contact.php. No Node server required.
  output: 'export',
  // Without a server, next/image can't optimize on the fly — serve images as-is.
  images: {
    unoptimized: true,
  },
  // Emit `route/index.html` per page so Apache serves clean URLs on Bluehost.
  trailingSlash: true,
};

module.exports = nextConfig;

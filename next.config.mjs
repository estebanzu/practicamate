/** @type {import('next').NextConfig} */
const nextConfig = {
  // Sitio 100% estático, listo para GitHub Pages / Vercel / cualquier CDN
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
};

export default nextConfig;

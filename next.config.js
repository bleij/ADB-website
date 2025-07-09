/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ отключает падение билда из-за ошибок ESLint
  },
};

module.exports = nextConfig;

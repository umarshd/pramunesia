const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      'pixabay.com',
      'www.pexels.com',
      'images.pexels.com',
      'cdn.pixabay.com',
      'randomuser.me',
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
});

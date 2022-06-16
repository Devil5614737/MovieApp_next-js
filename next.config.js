/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org','assets.nflxext.com','occ-0-4409-3647.1.nflxso.net','localhost','images.unsplash.com'],
  },
};

module.exports = nextConfig;

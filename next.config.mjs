/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "api.unsplash.com",
      },
      {
        hostname: "unsplash.com",
      },
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

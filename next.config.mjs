/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "janadesh.gowell.edu.np",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;

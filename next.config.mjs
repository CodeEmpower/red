/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['img.clerk.com'],
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'img.clerk.com',
          }
        ]
      }
};

export default nextConfig;

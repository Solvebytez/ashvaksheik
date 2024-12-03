/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['rl-backend-6c6af7ff6474.herokuapp.com'],
      
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',       
          },
          {
            protocol: 'https',
            hostname: 'images.pexels.com',       
          },
          {
            protocol: 'https',
            hostname: 'dq1niho2427i9.cloudfront.net',
          },
          {
            protocol: 'https',
            hostname: 'dlajgvw9htjpb.cloudfront.net',
          },
          {
            protocol: 'http',
            hostname: 'localhost',       
          },
        ],
      },
};

export default nextConfig;
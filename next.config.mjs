/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
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
        ],
      },
};

export default nextConfig;
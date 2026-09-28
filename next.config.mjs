/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: "/blog/7-costly-mistakes-bubuyer-mistakes-gta-home-purchase-guide",
          destination: "/blog/7-costly-mistakes-gta-buyers-home-purchase-guide",
          permanent: true,
        },
      ];
    },
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
          {
            protocol: 'https',
            hostname: 'rl-backend-6c6af7ff6474.herokuapp.comhttps',       
          },
          {
            protocol: 'https',
            hostname: 'sahil-machines-web.s3.ap-south-1.amazonaws.com',       
          },
        ],
      },
};

export default nextConfig;
/** @type {import('next').NextConfig} */

const nextConfig = {
    // Your existing configuration options here
    webpack: (config, { isServer }) => {
      // Add the file loader rule for PDF files
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'public/pdfs/',
            },
          },
        ],
      });
  
      // Return the modified webpack configuration
      return config;
    },
  };
  
  module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const { withGluestackUI } = require('@gluestack/ui-next-adapter');

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@gluestack-ui/themed"],
  webpack: (config) => {
    config.resolve.alias['react-native-svg'] = 'react-native-svg-web'
    return config
  }
};

module.exports = withGluestackUI(nextConfig);

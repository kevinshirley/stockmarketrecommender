/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    config.resolve.alias['src'] = path.join(__dirname, 'src');
    config.resolve.extensions.push('.js', '.tsx', '.ts');
    config.node = {
      // Some libraries import Node modules but don't use them in the browser.
      // Tell Webpack to provide empty mocks for them so importing them works.
      ...config.node,
      fs: 'empty',
      child_process : 'empty',
      net : 'empty',
      tls: 'empty',
    };
    return config;
  },
}

module.exports = nextConfig

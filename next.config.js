const images = process.env.NODE_ENV === "production" ? {
  loader: "akamai",
  path: '/',
  formats: ['image/avif', 'image/webp'],
} : {}

const nextConfig = {
  images,
  webpack: (config) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );


    return config;
  }
}

const plugins = [];

module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig)
/** @type {import('next').NextConfig} */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  //swcMinify: true,
  reactStrictMode: true,
  webpack: (config, options) => {
    /*  config.module.rules.push(
      {
        test: /\.ts|.tsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
        },
      },
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ); */

    config.optimization.minimize = true;
    config.optimization.minimizer.push(new CssMinimizerPlugin());
    config.optimization.splitChunks = {
      chunks: "async",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    };

    config.plugins.push(new MiniCssExtractPlugin());

    return config;
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false,
});

module.exports = nextConfig;

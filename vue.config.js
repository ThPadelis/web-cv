// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin({ analyzerPort: "auto" }),
      new MomentLocalesPlugin(),
    ],
    optimization: {
      splitChunks: {
        name: "manifest",
        minChunks: Infinity,
        cacheGroups: {
          commons: {
            name: "commons",
            chunks: "initial",
            minChunks: 2,
          },
        },
      },
      minimizer: [new UglifyJsPlugin()],
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/_variables.scss";`,
      },
    },
  },
};

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const webpack = require("webpack");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin(), new MomentLocalesPlugin()],
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
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          cacheKeys(defaultCacheKeys) {
            delete defaultCacheKeys["uglify-js"];

            return Object.assign({}, defaultCacheKeys, {
              "uglify-js": require("uglify-js/package.json").version,
            });
          },
          minify(file, sourceMap) {
            // https://github.com/mishoo/UglifyJS2#minify-options
            const uglifyJsOptions = {
              /* your `uglify-js` package options */
              ie8: true,
            };

            if (sourceMap) {
              uglifyJsOptions.sourceMap = {
                content: sourceMap,
              };
            }

            return require("terser").minify(file, uglifyJsOptions);
          },
        }),
      ],
    },
  },
  css: {
    loaderOptions: {
      // by default the `sass` option will apply to both syntaxes
      // because `scss` syntax is also processed by sass-loader underlyingly
      // but when configuring the `data` option
      // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
      // in that case, we can target the `scss` syntax separately using the `scss` option
      scss: {
        prependData: `@import "~@/assets/_variables.scss";`,
      },
    },
  },
};

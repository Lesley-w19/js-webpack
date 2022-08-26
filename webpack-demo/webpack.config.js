// const path = require("path");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     filename: "main.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   watch: true,
//   watchOptions: {
//     aggregateTimeout: 300,
//     poll: 1000,
//     ignored: /node_modules/,
//   },
//   hot: true,

//   plugins: [
//     // Plugin for hot module replacement
//     new webpack.HotModuleReplacementPlugin(),
//     new HtmlWebpackPlugin({
//       title: 'Hot Module Replacement',
//     }),
//   ],
// };

// // `hot` and `client` options are disabled because we added them manually
// const server = new webpackDevServer({ hot: false, client: false }, compiler);

// (async () => {
//   await server.start();
//   console.log('dev server is running');
// })();

const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  watch: true,
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 9876,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};

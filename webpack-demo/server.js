// require the modules to be used
const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config");

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

// server.startCallback(() => {
//   console.log("Server successfully started on port http://localhost:9876");
// });

const runServer = async () => {
  console.log("Starting server...");

  //start  - It instructs webpack-dev-server instance to start the server.
  await server.start();
};

// const stopServer = async () => {
//   console.log("Stopping server...");

//   //stop  - It instructs webpack-dev-server instance to stop the server.
//   await server.stop();
// };

runServer();
// setTimeout(6000, stopServer);

// const stopServer = () =>
//   server.stopCallback(() => {
//     console.log("Server stopped.");
//   });

// setTimeout(stopServer, 5000);

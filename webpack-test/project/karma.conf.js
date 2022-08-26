// Karma configuration
// Generated on Thu Aug 25 2022 09:15:15 GMT+0300 (East Africa Time)

// const webpack = require("webpack")

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],
    // list of files / patterns to load in the browser
    files: [
      { pattern: "tests/*.js", watched: true, served: true, included: true },
      /*parameters:
          watched: if autoWatch is true all files that have set watched to true will be watched for changes
          served: should the files be served by Karma's webserver?
          included: should the files be included in the browser using <script> tag?
          nocache: should the files be served from disk on each request by Karma's webserver? */
      /*assets:
          {pattern: '*.html', watched:true, served:true, included:false}
          {pattern: 'images/*', watched:false, served:true, included:false} */
    ],
    // list of files / patterns to exclude
    exclude: [],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress"],
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    //reduce the kind of information passed to the bash
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Chrome", "PhantomJS", "Firefox"],

    //address that the server will listen on, '0.0.0.0' is default
    listenAddress: "0.0.0.0",
    //hostname to be used when capturing browsers, 'localhost' is default
    hostname: "localhost",

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    client: {
      //capture all console output and pipe it to the terminal, true is default
      captureConsole: false,
      //if true, Karma clears the context window upon the completion of running the tests, true is default
      clearContext: false,
      //run the tests on the same window as the client, without using iframe or a new window, false is default
      runInParent: false,
      //true: runs the tests inside an iFrame; false: runs the tests in a new window, true is default
      useIframe: true,
      jasmine: {
        //tells jasmine to run specs in semi random order, false is default
        random: false,
      },
    },

    webpack: {
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
    },
    preprocessors: {
      //add webpack as preprocessor to support require() in test-suits .js files
      "./tests/*.js": ["webpack"],
    },
    webpackMiddleware: {
      //turn off webpack bash output when run the tests
      noInfo: true,
      stats: "errors-only",
    },
  });
};

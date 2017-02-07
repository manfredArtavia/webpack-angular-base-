'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const ENV = process.env.npm_lifecycle_event;
const isTest = ENV === 'test' || ENV === 'test-watch';
const isProd = ENV === 'build';

const port = 9000;

module.exports = function makeWebpackConfig() {
  const config = {};

  config.entry = isTest ? void 0 : {
    app: './client/js/app.js'
  };

  config.output = isTest ? {} : {
    path: __dirname + '/dist',
    publicPath: isProd ? '/' : `http://localhost:${port}/`,
    filename: isProd ? 'bundle.min.js' : 'bundle.js',
    chunkFilename: isProd ? 'bundle.min.js' : 'bundle.js'
  };

  if (isTest) {
    config.devtool = 'inline-source-map';
  }
  else if (isProd) {
    config.devtool = '';
  }
  else {
    config.devtool = 'eval-source-map';
  }

  config.module = {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$|\.scss$|\.sass$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  };

  if (isTest) {
    config.module.rules.push({
      enforce: 'pre',
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /\.spec\.js$/
      ],
      loader: 'istanbul-instrumenter-loader',
      query: {
        esModules: true
      }
    })
  }

  config.plugins = [
    new webpack.LoaderOptionsPlugin({
      test: /\.scss$/i
    })
  ];

  if (!isTest) {
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: './client/index.html',
        inject: 'body'
      }),
      new ExtractTextPlugin({filename: 'css/[name].css', disable: !isProd, allChunks: true})
    );
    config.plugins.push(
      new OpenBrowserPlugin({ url: `http://localhost:${port}` })
    );
  }

  if (isProd) {
    config.plugins.push(
      new CopyWebpackPlugin([{
        from: __dirname + '/client/img',
        to: './img'
      }])
    )
  }

  config.devServer = {
    contentBase: './client',
    stats: 'minimal',
    inline: true,
    port,
    contentBase: __dirname,
  };

  return config;
}();

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    widget: './src/widget.js',
    settings: './src/settings.js',
    testHolder: './src/testHolder.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Webpack Example App',
      header: 'Webpack Example Title',
      metaDesc: 'Webpack Example Description',
      template: './src/widget.html',
      filename: 'widget.html',
      chunks: ['widget'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Webpack Example App',
      header: 'Webpack Example Title',
      metaDesc: 'Webpack Example Description',
      template: './src/settings.html',
      filename: 'settings.html',
      chunks: ['settings'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Webpack Example App',
      header: 'Webpack Example Title',
      metaDesc: 'Webpack Example Description',
      template: './src/testHolder.html',
      filename: 'testHolder.html',
      chunks: ['testHolder'],
      inject: 'body'
    }),
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
    ]
  },
  devServer: {
    open: ['/testHolder.html'],
    port: 9010,
    compress: true,
    https:true,
    allowedHosts: "all",
    static: './dist'
  },
  output: {
    clean: true
  }
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: 'source-map',

  entry: {
    main: './src/index.js',
    second: './src/secondScript.js'
  },

  output: {
    filename: "[name].js",
    path: path.join(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ filename: "index.html", template: "./src/index.html", excludeChunks: ['second'] }),
    new HtmlWebpackPlugin({ filename: "index2.html", template: "./src/index2.html",
    })
  ],
  devServer: {
    open: true
  },
  optimization: {
    splitChunks: { chunks: "all" }
  },
}
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/scripts/main.js",
  },
  output: {
    filename: "main-[hash:8].js",
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'images/[hash][ext][query]'
},
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CleanWebpackPlugin({}),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    port: 4200,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          { loader: MiniCssExtractPlugin.loader, options: { esModule: false } },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          
          // Disables attributes processing
          sources: true,
        },
      },
      {
        test: /\.(gif|png|jpeg|svg)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                  name:'[name].[ext]',
                  outputPath: './images/',
                  publicPath: './images/'
                }
            },
            {
                loader: 'image-webpack-loader',
                options: { 
                  
                }
            }
        ]
      },
      {
        test: `/.\m?js$/`,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
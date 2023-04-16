const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  
  output: {
    filename: 'js/app.min.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\\.html$/,
        use: 'html-loader',
      },
    //   {
    //     test: /\\.s?css$/,
    //     use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    //   },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/html/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    //new MiniCssExtractPlugin(),
    //new StylelintPlugin(),
    new ESLintPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
        //new CssMinimizerPlugin(), 
        new TerserPlugin()]
  },
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.[contenthash].js', // Output file with cache-busting
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: '/',
  },
  mode: 'production', // Use 'development' or 'production'

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(), // Cleans the output directory before every build
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template HTML file
      favicon: './public/favicon.ico',
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'], // File extensions to process
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000, // Development server port
    historyApiFallback: true, // Handle React Router
    open: true, // Automatically opens the browser
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',

  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },

  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpg|jpeg|png|gif|ico)$/,
        generator: {
          filename: 'static/[name][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 40 * 1024,
          },
        },
      },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: 'public', to: 'public' }],
    }),
  ],
};

const resolve = require('path').resolve;
const webpack = require('webpack');

const config = {
  devtool: 'eval',
  context: resolve(__dirname, '..'),
  entry: {
    styleguide: [
      'react-hot-loader/patch',
      './src/styleguide.jsx',
    ],
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '/public/bundle/'),
    publicPath: '/bundle/',
  },
  module: {
    rules: [
      {
        exclude: [
          /\.(jsx|js)$/,
          /\.(css)$/,
        ],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
            },
          },
        ],
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['env'],
          // },
        },
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [
      resolve(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.css'],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    // contentBase: resolve(__dirname, 'public'),
    contentBase: 'public',
    compress: true,
    hot: true,
    inline: true,
    lazy: false,
    port: 3001,
  },
};

module.exports = config;

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
          /\.(sass|scss|css)$/,
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
        },
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              // includePaths: [
              //   resolve(__dirname, '../node_modules'),
              // ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    // modules: [
    //   'src',
    //   'node_modules',
    // ],
    extensions: ['.js', '.jsx', '.css', '.scss'],
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
    contentBase: 'public',
    compress: true,
    hot: true,
    inline: true,
    lazy: false,
    port: 3001,
  },
};

module.exports = config;

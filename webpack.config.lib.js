const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const package = require('./package.json');

const libraryName = package.name;
module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/lib']),
    new CopyPlugin([
      { from: 'lib/package.json', to: '' },
      { from: 'lib/*.md', to: '', flatten: true },
      { from: 'LICENSE', to: '' }
    ])
  ],
  entry: {
    main: './lib/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    filename: libraryName + '.min.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.js?$/,
        use: 'webpack-strip-log-loader'
      }
    ]
  }
};

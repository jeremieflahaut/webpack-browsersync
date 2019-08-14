const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

let config = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve('./public/assets'),
    filename: 'main.js',
    publicPath: '/public/assets'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(js)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      host: 'localhost',
      port: 3000,
      files: ['./public/*.html', './public/*.php'],
      proxy: 'apache_webpack',
      notify: true,
      open: false
    })
  ]
}

module.exports = config

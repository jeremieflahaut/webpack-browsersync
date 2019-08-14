const path = require('path')

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
  plugins: []
}

module.exports = config

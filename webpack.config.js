const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
 
module.exports = {
    entry: './src/js/index.js',
    output: {
      path: path.resolve('./public/assets'),
      filename: 'main.js',
      publicPath: '/dist/assets'
  },
  // ...
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      host: 'localhost',
      port: 3000,
      files: ['./public/*.html', './public/*.php'],
      proxy: 'http://localhost/' 
    })
  ]
}
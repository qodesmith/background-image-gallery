const path = require('path')

module.exports = (env, argv) => ({
  mode: 'production',
  entry: path.resolve(__dirname, 'src/backgroundImageGallery.js'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'big.js',
    library: 'big',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      }
    ]
  }
})

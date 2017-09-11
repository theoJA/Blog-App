import path from 'path'

export default {
  entry: path.join(__dirname, '/client/src/index.js'),
  output: {
    path: '/' //middleware will serve this from memory
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: [ 'babel' ]
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js' ]
  }
}
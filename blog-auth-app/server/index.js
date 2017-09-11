import express from 'express'
import path from 'path'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config.dev'

let app = express()

app.use(webpackMiddleware(webpack(webpackConfig)))

// '/*' is catch all routes
// __dirname is current dir
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(3300, () => console.log('Running on localhost:3300'))
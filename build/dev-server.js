'use strict'

const path = require('path')
const opn = require('opn')
const webpack = require('webpack')
const express = require('express')
const httpProxyMiddleware = require('http-proxy-middleware')
const baseConfig = require('./webpack.config')

const webpackConfig = Object.assign({}, baseConfig, {
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    // extract vendor chunks for better caching
    /*
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    */
  ].concat(baseConfig.plugins)
})

// modify client config to work with hot middleware
// add hot-reload related code to entry chunks
Object.keys(webpackConfig.entry).forEach(name => {
  webpackConfig.entry[name] = ['webpack-hot-middleware/client?noInfo=true&reload=true'].concat(webpackConfig.entry[name])
})

// default port where dev server listens for incoming traffic
const port = process.env.PORT || 2333
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = {}

const app = express()
const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

const hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', compilation => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(context => {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
const staticPath = path.posix.join('/', 'assets')
app.use(staticPath, express.static('./assets'))

module.exports = app.listen(port, err => {
  if (err) {
    console.log(err)
    return
  }
  const uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
  opn(uri)
})

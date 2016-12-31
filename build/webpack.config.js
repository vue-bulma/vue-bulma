'use strict'

const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const vueConfig = require('./vue-loader.config')

const config = {

  devtool: '#source-map',

  entry: {
    app: './src/main.js'
  },

  output: {
    path: path.resolve(__dirname, '../site'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'buble-loader',
        exclude: /node_modules/,
        options: {
          objectAssign: 'Object.assign'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // generate output HTML
    new HTMLPlugin({
      template: 'src/index.html'
    })
  ],

  performance: {
    hints: process.env.NODE_ENV === 'production'
  }

}

if (process.env.NODE_ENV === 'production') {
  const ExtractTextPlugin = require('extract-text-webpack-plugin')
  // Use ExtractTextPlugin to extract CSS into a single file
  // so it's applied on initial render.
  // vueConfig is already included in the config via LoaderOptionsPlugin
  // here we overwrite the loader config for <style lang="sass">
  // so they are extracted.
  vueConfig.loaders = {
    sass: ExtractTextPlugin.extract({
      loader: 'css-loader!sass-loader',
      fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader
    })
  }

  config.plugins.push(
    new ExtractTextPlugin('styles.[hash].css'),
    // minifying CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // minifying JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}

module.exports = config

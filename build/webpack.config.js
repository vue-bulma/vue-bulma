'use strict'

const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const vueConfig = require('./vue-loader.config')

const isProduction = process.env.NODE_ENV === 'production'

const config = {

  devtool: '#source-map',

  entry: {
    app: './src/main.js',
    vendor: [
      'es6-promise',
      'vue'
    ]
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
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('assets', 'fonts/[name].[hash:7].[ext]')
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
    hints: isProduction ? 'warning' : false
  }
}

if (isProduction) {
  const ExtractTextPlugin = require('extract-text-webpack-plugin')
  // Use ExtractTextPlugin to extract CSS into a single file
  // so it's applied on initial render.
  // vueConfig is already included in the config via LoaderOptionsPlugin
  // here we overwrite the loader config for <style lang="sass">
  // so they are extracted.
  vueConfig.loaders = {
    sass: ExtractTextPlugin.extract({
      use: 'css-loader!sass-loader?indentedSyntax',
      fallback: 'vue-style-loader' // <- this is a dep of vue-loader
    }),
    scss: ExtractTextPlugin.extract({
      use: 'css-loader!sass-loader',
      fallback: 'vue-style-loader' // <- this is a dep of vue-loader
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
} else {
  vueConfig.loaders = {
    sass: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax'].join('!'),
    scss: ['vue-style-loader', 'css-loader', 'sass-loader'].join('!')
  }
}

module.exports = config

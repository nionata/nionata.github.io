const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Webpack = require('webpack')

module.exports = {
  entry: './app/main.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
      { test: /\.sass$/, 
        use: [
          'vue-style-loader', 
          'css-loader', 
          {   
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              data: `@import colors`
            }
          }
        ]
      }
    ]
  },
  devServer: {
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
    }),
    new VueLoaderPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
  ]
}
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './app/main.js',
  resolve: {
    alias: {
        comp: path.resolve(__dirname, 'app/components/'),
        images: path.resolve(__dirname, 'app/images/'),
        js: path.resolve(__dirname, 'app/js/'),
        styles: path.resolve(__dirname, 'app/styles/'),
    },
    extensions: ['.js', '.vue']
  },
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
      },
      { test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
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
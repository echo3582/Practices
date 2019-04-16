// Imports: Dependencies
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
//__dirname代表当前文件的绝对路径
//node用来解析绝对路径的方法
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');
require('@babel/register');
// Webpack Configuration
const config = {
  // Entry
  entry: path.resolve(APP_PATH, 'index.jsx'),
  // Output
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  resolve:{
    extensions:['.js','.jsx']
  },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.jsx$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ],
        include: APP_PATH
      },
    ]
  },

  // Plugins
  plugins: [
    //自动生成HTML插件
    new htmlWebpackPlugin({
      title: 'todolist react app with webpack'
    }),
    // 热加载插件
    new webpack.HotModuleReplacementPlugin(),

    // // 打开浏览器
    // new openBrowserPlugin({
    //   url: 'http://localhost:8080'
    // }),

    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          autoprefixer
        ],
        devServer: {
          contentBase: "./public", //本地服务器所加载的页面所在的目录
          colors: true, //终端中输出结果为彩色
          historyApiFallback: true, //不跳转
          inline: true, //实时刷新
          hot: true  // 使用热加载插件 HotModuleReplacementPlugin
        }
      }
    }),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ]
};
// Exports
module.exports = config;
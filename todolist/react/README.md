## webpack 配置过程

### 生成package.json文件
npm init

### 安装webpack
npm install webpack webpack-cli webpack-dev-server --save-dev

### 安装babel
npm install @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-react @babel/register --save-dev

### 安装loaders
npm install babel-loader style-loader css-loader

### 配置.babelrc文件
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}

### 安装autoprefixer html-webpack-plugin open-browser-webpack-plugin插件
npm install autoprefixer html-webpack-plugin open-browser-webpack-plugin --save-dev

### 安装react react-dom
npm install react react-dom --save

### 配置webpack.config.js和webpack.production.config.js

### 注意事项
- windows用户 package.json script设置为：
"scripts": {
  "start": "set NODE_ENV=dev && webpack-dev-server --progress --colors",
  "build": "rd/s/q build && set NODE_ENV=production && webpack --config ./webpack.production.config.js --progress --colors"
}
- Webpack 2.1.0-beta23 之后的config里不能直接包含自定义配置项 postcss和devServer需要像下面这样写
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
})
-

#### 参考资料
- Medium: https://medium.com/@jeffrey.allen.lewis/the-ultimate-2018-webpack-4-and-babel-setup-guide-npm-yarn-dependencies-compared-entry-points-866b577da6a
- 慕课网: https://www.imooc.com/article/14499
- 简书: https://www.jianshu.com/p/c82a0447a69f
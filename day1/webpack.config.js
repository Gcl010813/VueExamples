//复制页面到localhost主页面
const HtmlPlugin = require("html-webpack-plugin")
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html',
})

//path模块用于修改位置
const path = require('path');


//重新build时自动删除旧的dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin')




module.exports = {
    // development 开发者模式  production上线模式  package.json里的build中mode优先级高 覆盖此处mode
    mode: 'development',
    //source-map 源码-打包代码错误位置对应 (暴露源码)--eval-source-map
    //source-map 源码-打包代码错误位置对应 (不暴露源码)--nosources-source-map
    devtool: 'nosources-source-map',
    //默认路径(可修改)
    entry: path.join(__dirname, './src/index.js'),//输入
    output: {
        path: path.join(__dirname, './dist'),//输出
        filename: 'js/bundle.js'
    },
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    //自动打开页面
    devServer: {
        open: true,
        host: 'localhost',
        port: 80,
    },
    module: {
        rules: [
            //loader处理从右往左执行
            //处理css
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //处理less
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //处理图片 use只有一个可用字符串 小于或等于limit值时才会转换为base64
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229&outputPath=images' },
            //处理更高级的语法
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, './src/')
        }
    },
}
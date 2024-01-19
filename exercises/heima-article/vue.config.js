const { defineConfig } = require('@vue/cli-service')
/* 动态获取项目文件夹地址 */
const path = require('path')
/* 拼接theme.less文件 */
const themePath = path.join(__dirname, 'src/assets/theme.less')
module.exports = defineConfig({
  publicPath: '',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量 太繁琐 更新就需要重新run
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）使用 模板字符串
            hack: `true; @import "${themePath}";`
          }
        }
      }
    }
  }
})

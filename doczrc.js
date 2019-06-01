const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path')
export default {
  dest: '/docs',
  indexHtml: path.join(__dirname, '/template/index.ejs'),
  typescript: true,
  onCreateWebpackChain: (config, dev) => {
    if (dev) {
      config.resolve.alias
        .set('@antd-x/core', '/packages/antd-x/src');
      config.module
        .rule('less')
        .test(/\.less$/)
        .use('style-loader')
          .loader('style-loader')
          .end()
        .use('css-loader')
          .loader('css-loader')
          .options({
            importLoaders: 1,
            modules: false,
          })
          .end()
        .use('less-loader')
          .loader('less-loader')
          .options({
            javascriptEnabled: true 
          })
          .end()
    } else {
      config
        .plugin('CopyWebpackPlugin')
        .use(
          CopyWebpackPlugin,
          [
            [
              { 
                from: path.join(__dirname, '/template/404.html'), 
                to: path.join(__dirname, '/docs/404.html'), 
                toType: 'file' 
              }
            ]
          ]
        )
      config.module
        .rule('less')
        .test(/\.less$/)
        .use('css-loader')
          .loader('css-loader')
          .options({
            importLoaders: 1,
            modules: false,
          })
          .end()
        .use('less-loader')
          .loader('less-loader')
          .options({
            javascriptEnabled: true 
          })
          .end()
    }
    return config
  },
  modifyBabelRc: (babelrc) => {
    babelrc.plugins = (babelrc.plugins || [])
    babelrc.plugins.push(["import", { "libraryName": "antd", "style": true }])
    return babelrc
  }
}
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path')
export default {
  dest: '/docs',
  indexHtml: path.join(__dirname, '/template/index.ejs'),
  typescript: true,
  onCreateWebpackChain: (config, dev) => {
    // if (dev) {
    //   config.resolve.alias
    //     .set('@antd-x/core', '/packages/antd-x/src')
    // } else {
    //   config
    //     .plugin('CopyWebpackPlugin')
    //     .use(
    //       CopyWebpackPlugin,
    //       [
    //         [
    //           { 
    //             from: path.join(__dirname, '/template/404.html'), 
    //             to: path.join(__dirname, '/docs/404.html'), 
    //             toType: 'file' 
    //           }
    //         ]
    //       ]
    //     )
    // }
    return config
  }
}
const path = require('path')
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// const IconsResolver = require('unplugin-icons/resolver')

module.exports = {
  outputDir: './build',
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       views: '@/views'
  //     }
  //   }
  // }
  // configureWebpack: {
  //   plugins: [
  //     AutoImport({
  //       resolvers: [ElementPlusResolver()]
  //     }),
  //     Components({
  //       resolvers: [
  //         IconsResolver({
  //           enabledCollections: ['ep']
  //         }),
  //         ElementPlusResolver()
  //       ]
  //     })
  //   ]
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('views', '@/views')
      .set('components', '@/components')
  }
}

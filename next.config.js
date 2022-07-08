module.exports = {
  assetPrefix: './',
  trailingSlash: true,
  exportPathMap: function(){
    return {
      '/': { page: '/'}
    }
  },
  reactStrictMode: true,
}

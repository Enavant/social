port = 8081
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
  	host: '0.0.0.0',
  	port: port,
  	open: true,
  	proxy: {
  		// detail: https://cli.vuejs.org/config/#devserver-proxy
  		'/api': {
  			target: `http://localhost:8080`,
  			changeOrigin: true,
  			pathRewrite: {
  				'^/api': ''
  			}
  		}
  	},
  }
}

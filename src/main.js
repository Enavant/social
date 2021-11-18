import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Cookies from 'js-cookie'
import VeeValidate from 'vee-validate'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
new Vue({
  router,
  vuetify,
  Cookies,
  VeeValidate,
  axios,
  render: h => h(App)
}).$mount('#app')
axios.interceptors.request.use(
		config => {
			if (Cookies.get('Admin-Token')) { // 判断是否存在token，如果存在的话，则每个http header都加上token

				config.headers.Authorization = `Bearer ` + Cookies.get('Admin-Token');
			}
			return config;
		},
		err => {
		
			return Promise.reject(err);
		}
)
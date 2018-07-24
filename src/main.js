import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://axios-01-start.firebaseio.com'
// axios.defaults.headers.common['Authorization'] = 'asd'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('request', config)
  return config
})

const resInterceptors = axios.interceptors.response.use(res => {
  console.log('response', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptors);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

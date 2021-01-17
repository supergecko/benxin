import Vue from 'vue'
import App from './App'
import $ajax from "./common/ajax.js"
import service from './service.js'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$ajax = $ajax
Vue.prototype.$service = service

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局cgc-ui
import cgcUi from 'cgc-ui'
Vue.use(cgcUi)

const app = new Vue({
    ...App
})
app.$mount()

import Vue from 'vue'
import App from './App.vue'
import "babel-polyfill";
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import router from './router'
import store from './store'
import './registerServiceWorker'
import '@/assets/stylus/base.styl'
import commonJs from '@/assets/common/common'
import Api from './assets/common/api'

Vue.prototype.getNavList = commonJs.navList
Vue.prototype.getUrlList = commonJs.urlList
Vue.prototype.getNavList2 = commonJs.navList2
Vue.prototype.getUrlList2 = commonJs.urlList2

Vue.prototype.getCipherList = commonJs.mainCipherList
Vue.prototype.getCipherAccountList = commonJs.mainCipherAccountList
Vue.prototype.getCheckList = commonJs.mainCheckList

Vue.prototype.limitNumber = commonJs.isNumber
Vue.prototype.machineIdLimit = commonJs.machineIdLimit
Vue.prototype.machineAccountLimit = commonJs.machineAccountLimit

Vue.prototype.$api = Api

Vue.use(router);
Vue.use(iView);

Vue.config.productionTip = false

//中央事件总线
let bus=new Vue();

Vue.prototype.bus = bus

 new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


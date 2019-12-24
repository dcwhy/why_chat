import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
// import Vant from 'vant';
import { 
  Tabbar,
  TabbarItem,
  NavBar,
  Cell,
  Icon,
  IndexBar,
  IndexAnchor,
  Tab,
  Tabs,
  Skeleton,
  Search,
  PullRefresh,
  Button,
  Notify,
  Field,
  CellGroup,
  Popup 
} from 'vant';
import 'vant/lib/index.css';
import './views/global.js'

// import VueSocketIO from 'vue-socket.io'

// Vue.use(new VueSocketIO({
//   debug: true,  
//   // 服务器端地址  
//   connection: 'http://localhost:3000',  
//   vuex: {  
//   } 
// }))

Vue.config.productionTip = false

// Vue.use(Vant);
Vue.use(Tabbar)
.use(TabbarItem)
.use(NavBar)
.use(Cell)
.use(Icon)
.use(IndexBar)
.use(IndexAnchor)
.use(Tab)
.use(Tabs)
.use(Skeleton)
.use(Search)
.use(PullRefresh)
.use(Button)
.use(Notify)
.use(Field)
.use(CellGroup)
.use(Popup)
;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')

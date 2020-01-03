import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
import Composition from '@vue/composition-api'
// import Vant from 'vant';
import { 
  Button,
  Cell,
  CellGroup,
  Dialog,
  Field,
  Icon,
  IndexBar,
  IndexAnchor,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  Notify,
  NavBar,
  Popup,
  Panel,
  PullRefresh,
  Skeleton,
  Search,
  SwipeCell
} from 'vant';
import 'vant/lib/index.css';
import './views/global.js'

import VueSocketio from 'vue-socket.io';


Vue.use(new VueSocketio({
  // 服务器端地址  
  connection: 'http://localhost:3005'
   
}))

Vue.config.productionTip = false

// Vue.use(Vant);
Vue.use(Button)
.use(Cell)
.use(CellGroup)
.use(Dialog)
.use(Field)
.use(Icon)
.use(IndexBar)
.use(IndexAnchor)
.use(Tab)
.use(Tabs)
.use(Tabbar)
.use(TabbarItem)
.use(Notify)
.use(NavBar)
.use(PullRefresh)
.use(Popup)
.use(Panel)
.use(Skeleton)
.use(Search)
.use(SwipeCell)
;
Vue.use(Composition)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')

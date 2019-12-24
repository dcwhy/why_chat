import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login/index.vue' // 登录
import Register from '../views/register/index.vue' // 注册
import News from '../views/news/index.vue'; // 消息
import Friends from '../views/friends/index.vue' // 联系人


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/news',
        name: 'news',
        component: News,
    },
    {
        path: '/friends',
        name: 'friends',
        component: Friends,
    }
];

const router = new VueRouter({
    routes,
});

// 是否登录
// const getUsers = localStorage.getItem('users')
// 全局前置守卫
// 在Router实例上进行守卫
// router.beforeEach((to, from, next) => {
    // to和from都是路由实例
    // to：即将跳转到的路由
    // from：现在的要离开的路由
    // next：函数
    // 如果未登录，就跳到登录页，如果登录了，选择哪个页面跳到哪个页面；如果登录了还去了login页面，就跳到首页。
    // if (to.name !== 'login') {
    //     if (getUsers) next()
    //     else next({ path: '/login' })
    // } else {
    //     if (getUsers) next({ name: 'news' })
    //     else next()
    // }
    // if(getUsers) {
    //     next()
    // } else {
    //     next()
    // } 
    
// })


export default router;
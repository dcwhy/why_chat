/* eslint-disable */
<template>
  <div id="app">
    <van-tabbar v-model="active">
    <van-skeleton title avatar :row="3" :loading="loading" />
      <van-tabbar-item icon="chat-o"><router-link to="/news">消息</router-link></van-tabbar-item>
      <van-tabbar-item icon="friends-o"><router-link to="/friends">联系人</router-link></van-tabbar-item>
      <van-tabbar-item icon="smile-comment-o"><router-link to="/friends">说说</router-link></van-tabbar-item>
    </van-tabbar>
    <transition :name="transitionName">
      <keep-alive :include="keepAlive">
        <router-view class="Router" ></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      loading: true,
      keepAlive: 'main-keep-alive',  //需要缓存的页面 例如首页
      transitionName: 'slide-right', //初始过渡动画方向
    }
  },
  watch: {
    $route() {
      // 切换动画
      let isBack = this.$router.isBack // 监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
      this.$router.isBack = false
    }
  },
  mounted() {
    this.loading = false;
    this.getUsers = localStorage.getItem('users')
    if(this.getUsers){
      this.$router.push({ path: '/news' });
    } else {
      this.$router.push({ path: '/' });
    }
  }
}
</script>

<style lang="scss">
  body{
    height: 100vh;
  }
  #app{
    height: 100%;
  }
  .Router {
      position: absolute;
      width: 100%;
      transition: all .377s ease;
      will-change: transform;
      top: 0;
      backface-visibility: hidden;
      perspective: 1000;
    }
    .slide-right-enter-active,
  .slide-right-leave-active {
    will-change: transform;
    position: absolute;
  }.slide-right-enter {
    opacity: 0;
     transform: translate3d( 0,0,5% );
   }.slide-right-leave-active {
     opacity: 0;
     transform: translate3d( 0,0,20% );
   }
   .van-tabbar-item__text{
     position: absolute;
     top: 35px;
     a{
       display: inline-block;
       margin-top: -25px;
       padding-top: 25px;
       color: #A77E80;
     }
     a:hover{
       color: #1989FA;
     }
   }
</style>

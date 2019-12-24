<template>
    <van-nav-bar :title='title'>
        <van-icon name="plus" slot="right" />
        <img @click="showxx()" class="headimg" src="https://img.yzcdn.cn/vant/logo.png" slot="left" />
    </van-nav-bar>
</template>
<script>
export default {
    data() {
        return {
            title: '消息',
            count: 0,
            isLoading: false
        }
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
                this.count++;
            }, 500);
        },
        showxx() {
            this.$parent.show = true
        }
    }
}
</script>

<style lang="scss">
    .headimg{
      height: 20px;
      margin-top: 10px;
    }
    .van-nav-bar__left{
        bottom: -5px;
    }
</style>

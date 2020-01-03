<template>
    <van-nav-bar :title='title'>
        <van-icon @click="showadd()" name="plus" slot="right" />
        <img @click="showxx()" class="headimg" src="https://img.yzcdn.cn/vant/logo.png" slot="left" />
    </van-nav-bar>
</template>
<script>
export default {
    data() {
        return {
            title: '消息',
            count: 0,
            isLoading: false,
            show: false
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
        },
        showadd() {
            this.$parent.showad = true
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
    .van-nav-bar{
        background-color: cyan;
    }
</style>

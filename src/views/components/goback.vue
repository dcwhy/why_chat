<template>
    <van-nav-bar
        :title= title
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        class="nav_bar"
    >
    </van-nav-bar>
</template>
<script>
export default {
    data() {
        return {
            title: ""
        }
    },
    methods: {
        onClickLeft() {
            window.history.go(-1);
        }
    }
}
</script>
<template>
    <div style="height:100%">
        <van-popup
            v-model="show"
            position="left"
            :style="{ width: '70%',height: '100%' }"
        >
        <Popup></Popup>
        </van-popup>
        <Navigation ref="headtitle" />
        <van-pull-refresh style="height:85%" v-model="isLoading" @refresh="onRefresh">
            <Search />
            1
        </van-pull-refresh>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false,
            show: false
        }
    },
    mounted(){
        this.$refs.headtitle.title = '消息'
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.isLoading = false;
            }, 500);
        }
    }
}
</script>

<style lang="scss">
    .van-pull-refresh__track{
        height:100%;
    }
</style>

<template>
    <div>
        <van-popup
            v-model="show"
            position="left"
            :style="{ width: '70%',height: '100%' }"
        >
        <Popup></Popup>
        </van-popup>
        <Navigation ref="headtitle" />
        <Search />
        <van-tabs v-model="active" animated>
            <van-tab title="好友">
                <van-index-bar :index-list="indexList">
                    <van-index-anchor index="A">123</van-index-anchor>
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="B">456</van-index-anchor>
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                </van-index-bar>
            </van-tab>
            <van-tab title="群聊">
                <van-index-bar :index-list="indexList">
                    <van-index-anchor index="A">123</van-index-anchor>
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="B">456</van-index-anchor>
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                </van-index-bar>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: '0',
            indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            show: false
        }
    },
    mounted(){
        this.$refs.headtitle.title = '联系人'
    },
}
</script>
<style lang="scss">
.Router{
    height: 93% !important;
}
</style>

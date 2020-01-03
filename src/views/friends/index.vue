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
            <van-tab title="好友" >
                <div @click="interroom(item)" v-for="(item,i) in data" :key="i">
                    <van-panel :title=item.adminName :icon=item.avatar :desc=item._id status="在线"></van-panel>
                </div>
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
        <!-- +号 -->
        <van-popup
        v-model="showad"
        :style="{ position:'absolute',top:'120px',left:'250px',borderRadius:'10px',padding:'0 10px' }"
        >
            <p @click="addto()">添加好友</p>
            <hr>
            <p>加入群聊</p>
            <hr>
            <p>创建群聊</p>
        </van-popup>
    </div>
</template>

<script>
import {
    Allfriends
} from '../../../api/index'
export default {
    data() {
        return {
            data:'',
            active: '0',
            indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            show: false,
            showad: false
        }
    },
    mounted(){
        this.$refs.headtitle.title = '联系人'
        this.allfriend()
    },
    methods: {
        addto() {
            this.$router.push({ path: '/increase' });
        },
        async allfriend() {
            const { data } = await Allfriends()
            this.data = data.data
        },
        interroom(e) {
            this.$router.push({ path: '/room',query: e });
        }
    }
}
</script>
<style lang="scss">
.Router{
    height: 93% !important;
}
.van-index-bar__sidebar{
    display: none !important;
}
</style>

<template>
    <div style="height:100%">
        <!-- 点击头像信息框 -->
        <van-popup
            v-model="show"
            position="left"
            :style="{ width: '70%',height: '100%' }"
        >
            <!-- 个人信息 -->
            <Popup></Popup>
        </van-popup>
        <!-- 导航 -->
        <Navigation ref="headtitle" />
        <van-pull-refresh style="height:85%" v-model="isLoading" @refresh="onRefresh">
            <!-- 查询 -->
            <Search />
            <!-- 消息列表 -->
            <van-swipe-cell class="xxlist" :before-close="beforeClose">
                <van-cell :border="false" title="单元格" value="内容" />
                <template slot="right">
                    <van-button square type="danger" text="删除" />
                </template>
            </van-swipe-cell>
        </van-pull-refresh>
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
import { Dialog } from 'vant' 
export default {
    data() {
        return {
            isLoading: false,
            show: false,
            showad: false
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
        },
        beforeClose({ position, instance }) {
            switch (position) {
                case 'cell':
                case 'outside':
                instance.close();
                break;
                case 'right':
                Dialog.confirm({
                    message: '确定删除吗？'
                }).then(() => {
                    instance.close();
                });
                break;
            }
        },
        addto() {
            this.$router.push({ path: '/increase' });
        }
    }
}
</script>

<style lang="scss">
    .van-pull-refresh__track{
        height:100%;
    }
    hr{
        border: none;
        border-top: 1px solid #ccc;
    }
    p{
        font-size: 13px;
    }
    .xxlist{
        border-top: 1px solid rgb(240, 240, 240);
        border-bottom: 1px solid rgb(240, 240, 240);
    }
    .van-popup--left{
        background-color: cyan !important;
    }
</style>

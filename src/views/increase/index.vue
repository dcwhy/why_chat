<template>
    <div>
        <Goback ref="back" />
        <van-cell-group>
            <van-field
                v-model="inputmodel"
                left-icon="contact"
                center
                clearable
                placeholder="请输入用户账号"
            >
                <van-button @click="query()" slot="button" size="small" type="primary">查找</van-button>
            </van-field>
        </van-cell-group>
        <van-panel v-if="show_panel" :title=data.data.adminName :icon=data.data.avatar :desc=data.data._id status="在线">
                <van-cell-group>
                <van-field
                    v-model="message"
                    rows="1"
                    autosize
                    label="消息验证"
                    type="textarea"
                    placeholder="请输入验证消息"
                />
                </van-cell-group>
                <van-button style="float:right;right:20px;top:10px" plain hairline size="small" type="info" @click="addfriends()" >✙ 好友</van-button>
        </van-panel>
    </div>
</template>

<script>
import {
    Query,
    Friendslist
} from '../../../api/index'
export default {
    data() {
        return {
            data:'',
            getUsers: '',
            inputmodel:'',
            message: '',
            show_panel: false
        }
    },
    mounted(){
        this.$refs.back.title = '添加好友'
    },
    methods: {
        async query() {
            const obj = {
                username: this.inputmodel
            }
            const { data } = await Query(obj)
            this.data = data
            if(data.data) {
                this.show_panel = true
            } else {
                this.show_panel = false
            }
        },
        async addfriends() {
            this.getUsers = JSON.parse(localStorage.getItem('users'))
            const objs = {
                friends: this.getUsers.id,
                username: this.data.data.adminName,
                avatar: this.data.data.avatar
            }
            const { data } = await Friendslist(objs)
            if( data.code === 200 ) {
                this.$notify({ type: 'success', message: data.message, duration: 2000 });
            } else if( data.code === '201' ) {
                this.$notify({ type: 'warning', message: data.message, duration: 2000 });
            }
            
        }
    }
}
</script>
<style lang="scss">
    .van-icon__image{
        width: 42px !important;
        height: 42px !important;
        border-radius: 20px;
        overflow: hidden;
    }
</style>
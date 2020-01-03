<template>
    <div class="room">
        <Goback ref="back" />
        1
        {{chat}}
        <div class="speakinp">
            <van-cell-group>
                <van-field v-model="value" />
            </van-cell-group>
            <van-button style="marginRight:10px" round type="info" @click="send" >发送</van-button>
        </div>
    </div>
</template>
<script>
import { onMounted } from '@vue/composition-api'
export default {
    data(){
        return {
            data: '',
            value: '',
            getUsers: '',
            chat: ''
        }
    },
    mounted(){
        this.mounted()
    },
    setup(vbor,{root}){
        onMounted(()=>{
            root.$socket.emit('inter',{username: root.$route.query.adminName})
            root.$socket.on('sendMessage',(data) => {
                alert(data.news)
            })

            root.sockets.subscribe('inter', (data) => {
                root.chat = data
            })
        })
    },
    methods: {
        mounted() {
            this.getUsers = JSON.parse(localStorage.getItem('users'))
            this.data = this.$route.query;
            this.$refs.back.title = this.data.adminName;
            // const obj = {
            //     you: this.data.adminName,
            //     me: this.getUsers.username
            // }
            // this.socket.emit('inter',obj)
            this.$socket.on('sendMessage',(data) => {
                alert('接收到服务端返回：',data.news)
            })
        },
        send() {
            if(this.value){
                this.$socket.emit('send',{news: this.value});
                this.value = '';
            } else {
                return;
            }
        }
    }
}
</script>
<style lang="scss">
    .room{
        height: 100% !important;
        background: white;
        z-index: 100;
    }
    .speakinp{
        background: cyan;
        position: fixed;
        bottom: 0;
        height: 60px;
        width: 100%;
        text-align: center;
        margin: 0 auto;
        display: flex;
        padding-top: 18px;
        >div{
            margin: 0 auto;
            width: 75%;
            height: 43px;
            border-radius: 30px;
            overflow: hidden;
        }
    }
</style>
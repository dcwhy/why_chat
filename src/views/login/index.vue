<template>
    <div class="login">
        <div class="toptitle">微聊</div>
        <div class="inpdiv">
            <input type="text" v-model="username" placeholder="账 号">
            <input type="password" v-model="password" placeholder="密 码">
        </div>
        <van-button icon="arrow" round type="info" @click="loginClick" color="linear-gradient(to right, #4bb0ff, #6149f6)"></van-button>
        <div class="topregister">
            <span @click="registerClick">注册</span>
            <p>登录即代表阅读并同意服务协议</p>
            {{data}}
        </div>
    </div>
</template>

<script>
import {
    Login
} from '../../../api/index'
export default {
    data() {
        return {
            data:'',
            username: '',
            password: '',
            getUsers: ''
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        getUser() {
            this.getUsers = JSON.parse(localStorage.getItem('users'))
            if(this.getUsers){
                this.username = this.getUsers.username
                this.password = this.getUsers.password
            }
        },
        // 登录
        async loginClick() {
            const obj = {
                username: this.username,
                password: this.password
            }
            const { data } = await Login(obj)
            this.data = data
            if( data.code === 200 ) {
                this.$notify({ type: 'success', message: data.msg, duration: 2000 });
                const objlist = {
                    avatar: this.data.data,
                    username: this.username,
                    password: this.password,
                    id: data.id
                }
                localStorage.setItem('users', JSON.stringify(objlist))
                this.$router.push({ path: '/news' });
            } else {
                this.$notify({ type: 'warning', message:data.message,duration: 2000 });
            }
        },
        // 注册
        registerClick() {
            this.$router.push({ path: '/register' });
        }
    }
}
</script>
<style lang="scss">
    .login{
        height:100%;
        width:100%;
        background:#fff;
        position:absolute;
        z-index:1000;
        text-align: center;
        padding-top: 100px;
        .toptitle{
            margin-bottom: 20px;
        }
        .inpdiv{
            text-align: center;
            margin: 0 auto;
            margin-bottom: 20px;
            input{
                margin: 5px 0;
                border-radius: 25px;
                padding: 7px 15px;
                height: 25px;
                width: 65%;
                border: none;
                background-color: rgb(62, 255, 255);
                font-size: 15px;
            }
        }
        .topregister{
            position: fixed;
            bottom: 130px;
            width: 100%;
            font-size: 14px;
            p{
                font-size: 12px;
            }
        }
        button{
            height: 47px;
            width: 47px;
        }
    }
    
</style>

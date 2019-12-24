/ eslint-disable no-new /
<template>
    <div class="register">
        <!-- 导航 -->
        <van-nav-bar
            title="注册"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            class="nav_bar"
        >
        </van-nav-bar>
        <!-- 输入框 -->
        <van-cell-group style="width:100%;margin:50px auto;">
            <van-field
                v-model="username"
                label-width='70px'
                label="用户名"
                placeholder="请输入用户名"
            />

            <van-field
                v-model="password"
                label-width='70px'
                type="password"
                label="密 码"
                placeholder="请输入密码"
            />
            <van-field
                v-model="yepassword"
                label-width='70px'
                type="password"
                label="确认密码"
                placeholder="请再次输入密码"
            />
        </van-cell-group>
        <van-button @click="loginClick" color="linear-gradient(to right, #4bb0ff, #6149f6)">注册</van-button>
    </div>
</template>

<script>
import {
    Register
} from '../../../api/index'
export default {
    data() {
        return {
            username: '',
            password: '',
            yepassword: '',
        }
    },
    mounted(){
        
    },
    methods: {
        async loginClick() {
            const obj = {
                username: this.username,
                password: this.password,
                yepassword: this.yepassword,
            };
            const {data} = await Register(obj)
            if(data.code === '200'){
                this.$notify({ type: 'success', message: '注册成功',duration: 2000 });
                this.$router.push({ path: '/' });
            } else {
                this.$notify({ type: 'warning', message:data.message,duration: 2000 });
            }
        },
        onClickLeft() {
            window.history.go(-1);
        }
    }
}
</script>
<style lang="scss">
    .register{
        height:100%;
        width:100%;
        background:rgb(247, 247, 247);
        position:absolute;
        z-index:1000;
        text-align: center;
    }
    .van-field__label{
        text-align: left !important;
    }
    .nav_bar>div:nth-of-type(1){
        bottom:0 !important;
    }
</style>

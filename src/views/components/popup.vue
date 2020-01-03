<template>
   <div class="popup">
       {{getUsers.username}}
       <div class="headimage" >
           <img :src=getUsers.avatar />
       </div>
       <div>
            <p>修改密码</p>
            <br>
            <p @click="out">切换账号</p>
       </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
            getUsers: ''
        }
    },
    mounted() {
        this.getUsers = JSON.parse(localStorage.getItem('users'))
    },
    methods:{
        out() {
            this.$dialog.confirm({
                title: '切换账号',
                message: '确定要退出此账号吗？'
            }).then(() => {
                // on confirm
                localStorage.removeItem('users');
                this.$router.push({ path: '/' });
            }).catch(() => {
                // on cancel
            });
            
        }
    }
}
</script>
<style lang="scss">
.popup{
    .headimage{
        text-align: center;
        margin-top: 50px;
        >img{
            height: 70px;
            width: 70px;
            border-radius: 35px;
        }
    }
    >div{
        text-align: center;
    }
    div:nth-of-type(2){
        position: absolute;
        bottom: 20px;
        width: 100%;
        p{
            display: inline-block;
        }
    }
}
</style>
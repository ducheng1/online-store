<template>
<div>
    <div v-if="!login">
        <p class="title">登录</p>
        <van-image
                round
                width="6rem"
                height="6rem"
                src="/src/assets/logo.png"
        />
        <van-form>
            <van-field
                v-model="username"
                name="username"
                label="用户名"
                placeholder="用户名"
                type="text"
                :rules="[{ required: true, message:'请填写用户名'}]"
            />
            <van-field
                v-model="password"
                name="password"
                label="密码"
                placeholder="密码"
                type="text"
                :rules="[{ required: true, message:'请填写密码'}]"
            />
            <div style="margin:16px;">
                <van-button round block type="info" native-type="submit" @click="onSubmit">登录</van-button>
            </div>
            <div class="reg">
                <div @click="toRegister">立即注册！！！</div>
            </div>
        </van-form>
    </div>
    <div v-else>
        你已经登录成功.
    </div>
    </div>
</template>
<script>
import {Toast} from 'vant';
export default {
    name: "UserLogin",
    mounted:function(){
        this.checkLogin();
        if(this.login){
             this.loginSuccess();
        }
    },
    data() {
        return {
            username: '',
            password: '',
            login:false,
        };
    },
    methods: {
        onSubmit() {
            if (this.username == "123456" && this.password == "123456") {
                this.$store.commit('loginSuccess');
                this.loginSuccess();g
            }
                else if(this.username==""&&this.password==""){
                    Toast('请输入账号或密码');
                }
                else{
                    Toast.fail('账号或密码错误');
                }
            },
            toRegister(){
                this.$router.push('/Register')
            },checkLogin(){
                this.login = this.$store.state.login;
            },loginSuccess(){
                                Toast.success('我是杜晓斌，是兄弟就来和我一起购物');
                this.$router.push('/');

            }
    }
    
}
</script>
<style scoped>
    .title{
        size: 1px;
        height: 50px;
        line-height: 50px;
        background-color: #20a0ff;
        color: #fff;
        text-align: center;
    }
</style>
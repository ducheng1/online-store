<template>
    <div>
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
</template>
<script>
import {Toast} from 'vant';
export default {
    name: "UserLogin",
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        onSubmit() {
            if (this.username == "123456" && this.password == "123456") {
                Toast.success('我是杜晓斌，我是Sb');
                this.$router.push('/');
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
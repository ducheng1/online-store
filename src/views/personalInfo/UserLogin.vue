<template>
    <div>
        <div v-if="!login">
            <div class="title">用户登录</div>
            <van-image
                round
                width="6rem"
                height="6rem"
                :src="require('@/assets/logo.png')"
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
                <van-button type="primary" native-type="submit" @click="onSubmit"
                            style="width: 80%; margin-top: 1rem;height: 2rem">登录
                </van-button>
                <div class="reg">
                    <div @click="toRegister"
                         style="text-align: left; margin-left: 2rem;margin-top: 0.5rem;color: gray; font-size: 0.6rem;">
                        没有账号，去注册
                    </div>
                </div>
            </van-form>
        </div>
        <div v-else>
            你已经登录成功.
            <van-button @click="cancelLogin()">
                退出登录
            </van-button>
        </div>
    </div>
</template>
<script>
import {Toast} from 'vant';

export default {
    name: "UserLogin",
    mounted: function () {
        this.checkLogin();
        if (this.login) {
            // this.loginSuccess();
        }
    },
    data() {
        return {
            username: '',
            password: '',
            login: false,
        };
    },
    methods: {
        onSubmit() {
            if (this.username == "123456" && this.password == "123456") {
                this.$store.commit('loginSuccess');
                this.loginSuccess();
            } else if (this.username == "" && this.password == "") {
                Toast('请输入账号或密码');
            } else {
                Toast.fail('账号或密码错误');
            }
        },
        toRegister() {
            this.$router.push('/Register')
        }, checkLogin() {
            this.login = this.$store.state.login;
        }, loginSuccess() {
            Toast.success('我是杜晓斌，是兄弟就来和我一起购物');
            this.$router.push('/');

        }, cancelLogin() {
            this.$store.commit('cancelLogin');
            this.login = this.$store.state.login;
        }
    }

}
</script>
<style scoped>
.title {
    text-align: left;
    font-family: 微软雅黑;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0 2rem 1rem;
}
</style>
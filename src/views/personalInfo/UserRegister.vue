<template>
    <div>
        <div class="icon-back" @click="tologin">
            <van-icon size="25" name="arrow-left"/>
        </div>
        <div class="title">用户注册</div>
        <van-form>
            <van-cell-group>
                <van-field
                    v-model="phone"
                    required
                    label="手机号"
                    placeholder="请输入手机号"
                    :rules="[
                        { required:true },
                        {patterrn: /^1[3456789]\d{9}$/, message:'手机号码输入错误！'},
                    ]"
                />
                <van-field
                    v-model="password"
                    required
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                />
                <van-field
                    v-model="password1"
                    required
                    type="password"
                    label="确认密码"
                    placeholder="请再次输入密码"
                />
            </van-cell-group>
        </van-form>
        <div style="margin:16px">
            <van-button style="width: 80%;" type="primary" native-type="submit" @click="onsubmit">注册</van-button>
        </div>
        <div style="text-align: left; margin-left: 2rem;margin-top: 0.5rem;color: gray; font-size: 0.6rem;"
             @click="$router.push('/login')">
            已有账号，去登录
        </div>
    </div>
</template>

<script>
import {Toast} from "vant";

export default {
    name: 'UserRegister',
    data() {
        return {
            phone: '',
            password: '',
            password1: '',
            value: '',
            columns: ["瓯江", "鹿城", "洞头", "滨海"],
            showPicker: false,
        };
    },
    methods: {
        onConfirm(value) {
            this.value = value;
            this.showPicker = false;
        },
        tologin() {
            this.$router.go(-1);
        },
        onsubmit() {
            if (this.phone == "" || this.password == "" || this.password1 == "") {
                Toast('请完善信息');
            } else if (this.password != this.password1) {
                Toast('两次密码不一致');
            } else {
                Toast('注册成功');
                this.$notify({
                    type: "success",
                    message: "注册成功，返回登录",
                    duration: 3000,
                });
                setTimeout(() => {
                    sessionStorage.clear("regis");
                    this.$router.go(-1);
                }, 3000);
            }
        }
    },
};
</script>

<style scoped>
.icon-back {
    position: absolute;
    left: 2px;
    top: 15px;
}

.title {
    text-align: left;
    font-family: 微软雅黑;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0 2rem 1rem;
}
</style>
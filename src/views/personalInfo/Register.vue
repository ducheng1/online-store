<template>
    <div>
        <div class="icon-back" @click="tologin">
            <van-icon size="25" name="arrow-left" />
        </div>
        <div>
            <p>注册</p>
        </div>
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
            <van-field
                readonly
                clickable
                name="picker"
                :value="value"
                label="选择地区"
                placeholder="点击选择地区"
                @click="showPicker = true"
            />
            <van-popup v-model="showPicker" position="bottom">
                <van-picker
                    show-toolbar
                    :columns="columns"
                    @confirm="onConfirm"
                    @cancel="showPicker = false"
                />
            </van-popup>
        </van-form>
        <div style="margin:16px">
            <van-button round block type="info" native-type="submit" @click="onsubmit">注册</van-button>
        </div>
    </div>
</template>

<script>
    import { Toast } from "vant";
    export default{
        data(){
            return{
                phone:'',
                password:'',
                password1:'',
                value:'',
                columns:["瓯江","鹿城","洞头","滨海"],
                showPicker:false,
            };
        },
        methods:{
            onConfirm(value){
                this.value=value;
                this.showPicker=false;
            },
            tologin(){
                this.$router.go(-1);
            },
            onsubmit(){
                if(this.phone==""||this.password==""||this.password1==""){
                    Toast('请完善信息');
                }
                else if(this.password!=this.password1){
                    Toast('两次密码不一致');
                }
                else{
                    Toast('注册成功');
                    this.$notify({
                        type:"success",
                        message:"注册成功，返回登录",
                        duration:3000,
                    });
                    setTimeout(()=>{
                        sessionStorage.clear("regis");
                        this.$router.go(-1);
                    },3000);
                }
            }
        },
    };
</script>

<style scoped>
    .icon-back{
        position: absolute;
        left: 2px;
        top: 15px;
    }
</style>
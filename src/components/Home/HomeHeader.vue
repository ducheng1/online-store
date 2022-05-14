<template>
    <div id="container">
        <!-- header -->
        <van-row>
            <van-col :span="20">
                <van-search v-model="searchVal" placeholder="请输入关键词"></van-search>
            </van-col>
            <van-col :span="4">
                <div id="userPanel">
                    <van-icon name="user-o" size="30" color="darkgray" class="userIcon"></van-icon>
                </div>
            </van-col>
        </van-row>
        <!-- 走马灯 -->
        <van-swipe class="mainSwipe" :autoplay="5000" lazy-render indicator-color="white">
            <van-swipe-item v-for="(item,index) in pic" :key="index">
                <img :src="item.url" :alt="item.text" class="swipeImg">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import {ref} from "@vue/reactivity";

export default {
    name: 'HomeHeader',
    data() {
        return {
            pic: [
                {
                    url: require("/public/banner/1.jpeg"),
                    text: "法国益生菌种发酵",
                },
                {
                    url: require("/public/banner/2.jpeg"),
                    text: "商品预售",
                },
                {
                    url: require("/public/banner/3.jpeg"),
                    text: "百花蜜",
                },
            ],
            searchVal: ref(''),
        }
    },
    setup() {

    },
}
</script>

<style scoped>
#container {
    margin-left: 20px;
    margin-top: -10px;
}

.userIcon {
    margin-top: 5px;
}

#userPanel {
    border: 1px solid darkgray;
    height: 40px;
    margin-top: 0.4rem;
    width: 40px;
    border-radius: 30px;
}

.mainSwipe {
    margin-right: 20px;
    margin-top: 1rem;
    height: 7.3rem;
    background: darkgray;
}

.swipeImg {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
}
</style>
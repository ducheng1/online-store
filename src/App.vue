<template>
    <div id="app">
        <router-view/>
        <van-tabbar v-model="active" safe-area-inset-bottom>
            <van-tabbar-item icon="home-o">
                <router-link to="/">主页</router-link>
            </van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o">
                <router-link to="/carts">购物车</router-link>
            </van-tabbar-item>
            <van-tabbar-item icon="like-o">
                <router-link to="/stars">收藏</router-link>
            </van-tabbar-item>
            <van-tabbar-item icon="user-o">
                <router-link to="/my">我的</router-link>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import {ref} from '@vue/reactivity'

export default {
    setup() {
        const active = ref(0);
        return {
            active
        };
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
}
</style>
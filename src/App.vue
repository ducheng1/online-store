<template>
    <div id="app">
        <van-nav-bar safe-area-inset-top title="在线商城"></van-nav-bar>
        <div id="view">
            <router-view/>
        </div>
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

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: white;
}

#view {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>
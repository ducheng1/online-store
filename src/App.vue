<template>
    <div id="app">
        <van-nav-bar safe-area-inset-top title="在线商城" fixed placeholder></van-nav-bar>
        <van-notice-bar left-icon="volume-o" text="家用刷牙杯/漱口杯 促销中！"/>
        <div id="view">
            <router-view v-slot="{Component}">
                <transition name="fade" mode="out-in">
                    <component :is="Component"></component>
                </transition>
            </router-view>
        </div>
        <van-tabbar v-model="active" safe-area-inset-bottom route placeholder>
            <van-tabbar-item icon="home-o" replace to="/">
                主页
            </van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o" replace to="/carts">
                购物车
            </van-tabbar-item>
            <van-tabbar-item icon="like-o" replace to="/stars">
                收藏
            </van-tabbar-item>
            <van-tabbar-item icon="user-o" replace to="/my">
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import {ref} from '@vue/reactivity'

export default {
    setup() {
        const active = ref(0);
        return {active}
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

#view {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

/*切换动画*/
.fade-enter-active {
    opacity: 0;
    transition: opacity .25s;
}

.fade-enter {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}

.fade-leave {
    opacity: 1;
}

.fade-leave-active {
    opacity: 0;
    transition: opacity .25s;
}

.fade-leave-to {
    opacity: 0;
}
</style>

<style>
html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    height: 100%;
    width: 100%;
}

</style>
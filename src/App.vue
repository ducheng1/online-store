<template>
    <div id="app">
        <van-nav-bar safe-area-inset-top title="在线商城" fixed></van-nav-bar>
        <van-notice-bar left-icon="volume-o" text="促销中！"/>
        <div id="view">
            <router-view v-slot="{Component}">
                <transition name="fade" mode="out-in">
                    <component :is="Component"></component>
                </transition>
            </router-view>
        </div>
        <van-tabbar v-model="active" safe-area-inset-bottom route>
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
            active,
        };
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
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
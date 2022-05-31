<template>
    <div id="app">
        <van-nav-bar safe-area-inset-top title="在线商城" fixed>
            <template #right v-if="currentRoute=='/stars'">
                <span @click="manageStars">管理</span>
            </template>
        </van-nav-bar>
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
                <router-link to="/stars" :isManage="isManage">收藏</router-link>
            </van-tabbar-item>
            <van-tabbar-item icon="user-o">
                <router-link to="/my">我的</router-link>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import {ref,computed} from '@vue/reactivity'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const active = ref(0);

        /* 根据路由名是否等于'stars'显示收藏页是否显示管理 */
        const router = useRouter();
        let currentRoute=ref();
        //console.log(router.currentRoute.value.path);
        currentRoute=computed(()=>{        
            return router.currentRoute.value.path;
        })
        let isManage=ref(false);
        function manageStars(){
            isManage=!isManage;
        }
        return {active,currentRoute,isManage,manageStars,}
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
<template>
    <div id="container">
        <div class="goodsContainer">
            <div v-for="item in goods" @click="jumpTo(item.id)" :key="item.id" class="goodsItem">
                <img :src="item.url" :alt="item.title" class="goodsImg"/>
                <div class="goodsTitle">{{ item.title }}</div>
                <div class="goodsPrice">￥{{ item.price }}</div>
            </div>
        </div>
        <van-divider></van-divider>
        <div class="alert">没有更多了</div>
    </div>
</template>
<script>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
    name: "HomeMain",
    setup() {
        const store = useStore();
        let goods = store.state.goods;
        const router = useRouter();

        function jumpTo(id) {
            //console.log(id);
            router.push({path: '/detail', query: {id}})
        }
        return {goods,jumpTo};
    },
}
</script>
<style scoped>
.goodsItem {
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 1rem;
    margin-bottom: 1rem;
}

.goodsImg {
    margin-left: -0.6rem;
    width: 205px;
    height: 219px;
    overflow: hidden;
    object-fit: cover;
}

.goodsTitle {
    overflow: hidden;
    text-align: left;
    margin: 0 5px 2px 5px;
    max-height: 1.4rem;
}

.goodsPrice:first-letter {
    font-size: 0.6rem;
    margin-right: -1px;
}

.goodsPrice {
    font-size: 1.2rem;
    text-align: left;
    color: orangered;
    margin: 0 5px 2px 5px;
}

.goodsContainer {
    margin-top: 1.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 390px;
}

#container {
    margin: 10px 0 50px 20px;
}

.alert {
    color: darkgray;
}
</style>
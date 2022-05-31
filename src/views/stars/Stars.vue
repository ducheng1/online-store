<template>
    <div id="container">
        <van-grid :column-num="3">
            <van-grid-item v-for="s in stars"  :key="s.id" class="item">
                <van-image
                    :src="s.url"
                 />
                 <div class="action-bar-over" @click="enter" ref="over">
                     <span>收藏</span>
                    <van-icon name="star" color="yellow"/>
                 </div>
                 <div class="action-bar-del">
                     <span>取消收藏</span>
                    <van-icon name="star" color="WhiteSmoke"/>
                 </div>
            </van-grid-item>
        </van-grid>      
    </div>
</template>
<script>
import {ref,reactive} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
    name: "StarsPage",
    setup(){
        const store = useStore();
        let goods = store.state.goods;//全部商品
        let collections = store.state.collections;//获取商品详情页传入的要加入收藏页的商品的id

        /* 得到收藏页的商品 */
        let stars = reactive([]);
        goods.forEach(g => {
            collections.forEach(c => {
                if(c==g.id){
                    stars.unshift(g);
                    
                }
            });
        });
        //console.log(stars)

        let over=ref('');
        function enter(){
            console.log(over.value)
        }
        const router = useRouter()
        console.log(router,"stars")
        return {stars,over,enter}
    }
}
</script>
<style scoped>
    .action-bar-over{
        width: 60px;
        border:1px solid grey;
        border-radius:10px;
    }
    .action-bar-del{
        width: 100px;
        border:1px solid grey;
        border-radius:10px;
    }
</style>
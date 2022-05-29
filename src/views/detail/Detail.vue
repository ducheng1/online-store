<template>
    <div id="container">
        DetailPage
        <div id="detail">
            <div id="detail-left">
                <div id="pic">
                    <img src="./images/1.jpg"/>
                </div>
            </div>
            <div id="detail-right">
                <div id="detail-title">
                    上班族社畜打工人猫咪设计猫可爱卡通纯棉短袖t恤衫男女半袖衣服
                </div>
                <div id="detail-price">
                    65
                </div>
                <div id="buy">
                    <button>购买</button>
                    <button @click="gowuche">加入购物车</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
export default {
    name: "DetailPage",
    setup(){
        const router=useRouter();
        let id=router.currentRoute.value.query.id;
        console.log(id);
        const store=useStore();
        let goods=store.state.goods;
        console.log(goods);
        function gowuche(){
            store.commit("add",id);
        }
        return {gowuche}
    }

};
</script>
<style scoped>
</style>
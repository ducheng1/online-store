<template>
    <div class="carts">
        <div v-if="cartsGoods.length==0" class="nogood">
            <div style="height: 3rem;">购物车空空的，快去添加商品吧</div>
            <van-button type="primary" @click="toHome">去添加商品</van-button>
        </div>
        <div class="goods-card-group" v-else>
            <van-card v-for="g in cartsGoods" :key="g.id"
                      :price="g.price"
                      :title="g.title"
                      class="goods-card"
                      :thumb="g.url"
                      @click-thumb="goToDetail(g.id)"
            >
                <template #footer>
                    <input type="button" class="delbtn" value="从购物车上删除" @click="delGood(g.id)">
                    购买:<input type="checkbox" name="good" :value="g.id" @change="onChange(g.id)">
                </template>
            </van-card>
        </div>
        <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit" class="submit">
            <!-- <van-checkbox v-model="checked" @change="onAllChange">全选</van-checkbox> -->
        </van-submit-bar>
    </div>
</template>
<script>
import {computed, reactive, ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {Toast} from 'vant'

export default {
    name: "CartsPage",
    setup() {
        const store = useStore();
        let goods = store.state.goods;
        // console.log(goods);
        let shoppingCarts = store.state.shoppingCarts;//获取商品详情页传入的要加入购物车的商品的id
        let cartsGoods = reactive([]);
        goods.forEach(g => {
            shoppingCarts.forEach(o => {
                // console.log(o);
                if (o == g.id) {
                    cartsGoods.unshift(g);
                    // console.log(cartsGoods);
                }
            });
        });

        /* 单击按钮跳转到Home上 */
        const router = useRouter()

        function toHome() {
            router.push('/')
        }

        /* 单击购物车上的商品图片跳转到该商品的详情页面 */
        function goToDetail(id){
            router.push({path: '/detail', query: {id}})
        }

        /* 单击删除按钮不再购买该书 */
        function delGood(goodId) {
            choose.splice(choose.indexOf(goodId), 1);
            cartsGoods.forEach(g => {
                if (g.id == goodId) {
                    store.commit("delFromCarts", goodId);
                    cartsGoods.splice(cartsGoods.indexOf(g, 1), 1);
                    // console.log(cartsGoods);
                    // console.log(store.state.shoppingCarts);
                }
            });
        }
        
        /* 提交订单 */
        function onSubmit() {
            if (totalPrice.value != 0) {
                store.commit("onSubmit", choose);
                choose.forEach(c => {     
                    cartsGoods.forEach(good => {           
                        if (good.id === c) {
                            cartsGoods.splice(cartsGoods.indexOf(good), 1)
                        }
                    });
                });
                choose.splice(0);
                Toast('购买成功');
                //store.commit('onSubmit',choose);
            } else
                Toast('未选择或未添加商品');
        }

        /* 选择商品 */
        let choose = reactive([]);

        function onChange(goodId) {
            if (choose.indexOf(goodId) == -1) {
                choose.unshift(goodId);
                console.log(choose, "choose");
            } else {
                choose.splice(choose.indexOf(goodId), 1);
            }
        }

        /* 计算总价 */
        let totalPrice = ref();
        totalPrice = computed(() => {
            var price = 0;
            for (let index = 0; index < choose.length; index++) {
                cartsGoods.forEach(g => {
                    if (g.id == choose[index]) {
                        price += g.price;
                    }
                });
            }
            return price * 100;
        })

        return {cartsGoods, totalPrice, toHome, delGood, onSubmit, onChange,goToDetail}
    }
}
</script>
<style scoped>
.carts {
    background-color: whitesmoke;
    margin-top: -1rem;
    height: 80vh;
}

.goods-card-group {
    overflow: scroll;
    min-height: 100%;
}

.goods-card {
    text-align: left;
    margin: 0px;
}

.nogood {
    padding-top: 25vh;
    text-align: center;
}

.submit {
    float: left;
    position: fixed;
    left: 0px;
    bottom: 50px;
}

.delbtn {
    background-color: Orange;
    margin-right: 20px;
    border: 1px solid Orange;
}
</style>
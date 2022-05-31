<template>
    <div id="container">
      <div v-show="cartsGood.length==0" class="nogood">
        <!-- <img src="@/assets/购物车空空的.jpg"/><br/> -->
        <span>购物车为空</span><br/>
        <input type="button" value="去添加商品" @click="toHome">  
      </div>
      <van-card v-for="g in cartsGood" :key="g.id"
        :price="g.price"
        :title="g.title"
        class="goods-card"
        :thumb="g.url"
      >
        <template #footer>
          <input type="button" class="delbtn" value="从购物车上删除" @click="delGood(g.id)"> 
          购买:<input type="checkbox" name="good"  :value="g.id"  @change="onChange(g.id)">          
        </template>
      </van-card>
      <div class="occupy"></div>
    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit" class="submit">
      <!-- <van-checkbox v-model="checked" @change="onAllChange">全选</van-checkgox> -->
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
        console.log(goods)
        let shoppingCarts = store.state.shoppingCarts;//获取商品详情页传入的要加入购物车的商品的id
        let cartsGood = reactive([]);
        goods.forEach(g => {
        shoppingCarts.forEach(o => {
          if(o==g.id){
            cartsGood.unshift(g);
            console.log(cartsGood)
          }
        });
      });
      /* 单击按钮跳转到Home上 */
      const router = useRouter()
      function toHome(){
        router.push('/')
      }
      /* 单击删除按钮不再购买该书 */
      function delGood(goodId){
        cartsGood.forEach(g => {
        if(g.id==goodId){
          store.commit("del",goodId)          
          cartsGood.splice(cartsGood.indexOf(g,1))
          // console.log(cartsGood);
          // console.log(store.state.shoppingCarts);
        }
        });
      }
      /* 提交订单 */
      function onSubmit(){
      if(totalPrice.value!=0){
        Toast('购买成功');
        //console.log(shoppingCarts)
        //store.commit('onSubmit',choose);
      }
      else 
        Toast('未选择');
    }
    
    /* 选择商品 */
    let choose=reactive([]);
    function onChange(goodId){
      if(choose.indexOf(goodId)==-1){
        choose.unshift(goodId);
        console.log(choose);
      }
      else {
        choose.splice(choose.indexOf(goodId),1);
      }
    }
    /* 计算总价 */
    let totalPrice=ref();
    totalPrice=computed(()=>{
      var price=0;
      for (let index = 0; index < choose.length; index++) {
        cartsGood.forEach(g => {
          if(g.id==choose[index]){
            price += g.price;
          }
        });        
      }
      return price*100;       
    })

    return {cartsGood,totalPrice,toHome,delGood,onSubmit,onChange}
  }
}
</script>
<style scoped>
  .goods-card {
    text-align: left;
    margin: 0px;
    background-color: white;
  }
  .nogood{ 
    background-color:WhiteSmoke;
    text-align: center;
    margin-bottom: 0px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .nogood input{ 
    background-color:Orange;
    width: 150px;
    height: 50px;
    color: white;
  }
  .submit{ 
    float: left;
    position: fixed;
    left: 0px;
    bottom: 50px;
  }
  .occupy{ 
    height: 50px;
  }
  .delbtn{ 
    margin-right:20px;
  }
</style>
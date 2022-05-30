<template>
  <div id="container">
    <div id="detail">
      <div id="detail-left">
        <div id="pic">
          <img v-bind:src="good.url" />
        </div>
      </div>
      <div id="detail-right">
        <div id="detail-title">
          {{ good.title }}
        </div>
        <div id="detail-price">{{ good.price }}</div>
      </div>
    </div>
    <div id="foot">
        <van-action-bar>
          <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
          <van-action-bar-icon icon="cart-o" text="购物车" />
          <van-action-bar-icon icon="star" text="未收藏"  />
          <van-action-bar-icon icon="star" id="ab1" text="已收藏" color="#ff5000" />
          <van-action-bar-button type="warning" text="加入购物车" @click="gowuche" />
          <van-action-bar-button type="danger" text="立即购买" />
        </van-action-bar>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "DetailPage",

  setup() {
    const router = useRouter();
    let id = router.currentRoute.value.query.id;
    console.log(id);
    const store = useStore();
    let goods = store.state.goods;
    let good;
    goods.forEach((element) => {
      console.log(element);
      if (element.id == id) good = element;
    });
    console.log(good);
    function gowuche() {
      store.commit("add", id);
    }

    const themeVars = {
      
    };
    return {
      gowuche,
      good,
      themeVars,
    };
  },
};
</script>
<style scope>
img {
  width: 100%;
  height: auto;
}
.van-action-bar {
bottom: 50px;
}
#ab1{
    display: none;
}
</style>
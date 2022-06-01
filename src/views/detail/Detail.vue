<template>
  <div id="container">
    <div id="goHome">
      <van-button type="primary" size="small" id="goHomebutton" @click="home"
        >返回首页</van-button
      >
    </div>
    <div id="detail">
      <div id="pic">
        <img v-bind:src="good.url" />
      </div>
      <div id="detail-right">
        <div id="detail-title">
          {{ good.title }}
        </div>
        <div id="detail-price">
          <div id="price">
            价格：&nbsp;<a
              style="font-size: 1.5em; color: red; font-weight: bold"
              >¥{{ good.price }}</a
            >
          </div>
          <div id="sales">月销量：{{ good.sales }}</div>
        </div>
      </div>
    </div>
    <div id="foot">
      <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
        <van-action-bar-icon icon="cart-o" text="购物车" @click="gocarts" />
        <van-action-bar-icon
          icon="star-o"
          id="addToStar"
          text="未收藏"
          @click="addStar"
        />
        <van-action-bar-icon
          icon="star"
          id="delToStar"
          text="已收藏"
          color="#ff5000"
          @click="delStar"
        />
        <van-action-bar-button
          type="warning"
          text="加入购物车"
          @click="addCart"
        />
        <van-action-bar-button
          type="danger"
          text="立即购买"
          @click="onSubmit"
        />
      </van-action-bar>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Toast } from "vant";
export default {
  name: "DetailPage",

  setup() {
    //获取路由
    const router = useRouter();
    let id = router.currentRoute.value.query.id;
    //console.log(id);
    const store = useStore();
    //获取商品信息
    let goods = store.state.goods;
    let good;
    goods.forEach((element) => {
      //console.log(element);
      if (element.id == id) good = element;
    });

    //添加到购物车
    function addCart() {
      var beginadd = store.state.shoppingCarts.length;
      store.commit("addToCarts", id);
      var afteradd = store.state.shoppingCarts.length;
      if (beginadd < afteradd) {
        Toast("添加成功");
      } else {
        Toast("已在购物车中");
      }
    }
    //添加到收藏页
    function addStar() {
      store.commit("addToStars", id);
      let addstar = document.getElementById("addToStar");
      let delstar = document.getElementById("delToStar");
      delstar.style.display = "flex";
      addstar.style.display = "none";
    }
    //从收藏页中删除
    function delStar() {
      store.commit("delToStars", id);
      let addstar = document.getElementById("addToStar");
      let delstar = document.getElementById("delToStar");
      delstar.style.display = "none";
      addstar.style.display = "flex";
    }

    function onSubmit() {
      Toast("购买成功");
      console.log(1);
      //store.commit('onSubmit',choose);
    }

    const themeVars = {};
    return {
      addCart,
      addStar,
      delStar,
      onSubmit,
      good,
      themeVars,
    };
  },
  mounted: function () {
    const router = useRouter();
    let id = router.currentRoute.value.query.id;
    //console.log(id);
    const store = useStore();
    //获取收藏栏信息
    let collections = store.state.collections;
    let iffind = 0;
    let addstar = document.getElementById("addToStar");
    let delstar = document.getElementById("delToStar");
    collections.forEach((element) => {
      if (element == id) {
        delstar.style.display = "flex";
        addstar.style.display = "none";
        iffind = 1;
      }
    });
    if (iffind == 0) {
      delstar.style.display = "none";
      addstar.style.display = "flex";
    }
    //console.log(good);
  },
  methods: {
    home() {
      this.$router.push({ name: "home" });
    },
    gocarts() {
      this.$router.push({ name: "Carts" });
    },
  },
};
</script>
<style scope>
#container {
  display: block;
  flex-direction: column;
}
#detail {
  display: block;

  align-items: center;
}
#detail-right {
  display: block;
}

img {
  width: 100%;
  height: 300px;
}
.van-action-bar {
  bottom: 50px;
}

#addToStar {
  display: none;
}
#goHome {
  display: flex;
  float: left;
  width: 100%;
  background-color: blue;
}
#detail-title {
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 1vh;
  margin-bottom: 2vh;
}
#detail-price {
  height: 8vh;
  background-color: blue;
  width: 100%;
  display: block;
}
#price {
  color: white;
  float: left;
  display: block;
  text-align: center;
  padding-top: 2vh;
  padding-left: 3vh;
}
#sales {
  color: white;
  float: right;
  padding-top: 2vh;
  padding-right: 3vh;
}
</style>
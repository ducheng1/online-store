<template>
  <div class="container">
    <van-nav-bar
      :title="good.title"
      left-arrow
      left-text="返回"
      @click-left="$router.push('/')"
      fixed
      right-text="收藏"
      @click-right="$router.push('/stars')"
      safe-area-inset-top
    ></van-nav-bar>
    <div id="detail">
      <van-swipe :autoplay="3000" >
        <van-swipe-item v-for="image in good.detailimage" :key="image">
          <van-image v-bind:src="image" />
        </van-swipe-item>
      </van-swipe>
      <van-row id="detail-price">
        <van-col id="price" :span="12">
          价格：¥
          <span style="font-size: 1.5rem">{{ good.price }}</span>
        </van-col>
        <van-col id="sales" :span="8">
          月销量：
          <span style="font-size: 1.5rem">{{ good.sales }}</span>
        </van-col>
      </van-row>
      <div id="detail-title">
        {{ good.title }}
        <div style="margin-left: 17rem; margin-top: 1rem">
          <van-button @click="showShare = true" class="share-button">
            <van-icon
              name="share-o"
              size="1rem"
              style="margin-right: 2px"
            ></van-icon>
            分享
          </van-button>
        </div>
      </div>

      <van-share-sheet
        v-model:show="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
      />
      <van-divider>宝贝详情</van-divider>
      <li v-bind:key="pic" v-for="pic in good.introduce">
        <van-image id="introduce" v-bind:src="pic" />
      </li>
      <van-divider style="margin-bottom: 60px">已经到最底端了</van-divider>
    </div>
    <div id="foot">
      <van-action-bar
        style="z-index: 2; margin-bottom: -50px"
        safe-area-inset-bottom
      >
        <van-action-bar-icon icon="cart-o" text="购物车" replace to="/carts" />
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
import { ref } from "@vue/reactivity";

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
    let loading = false;
    goods.forEach((element) => {
      //console.log(element);
      if (element.id == id) good = element;
    });

    //添加到购物车
    function addCart() {
      let beginAdd = store.state.shoppingCarts.length;
      store.commit("addToCarts", id);
      let afterAdd = store.state.shoppingCarts.length;
      if (beginAdd < afterAdd) {
        Toast("添加成功");
      } else {
        Toast("已在购物车中");
      }
    }

    //添加到收藏页
    function addStar() {
      store.commit("addToStars", id);
      let addStar = document.getElementById("addToStar");
      let delStar = document.getElementById("delToStar");
      delStar.style.display = "flex";
      addStar.style.display = "none";
      Toast("收藏");
    }

    //从收藏页中删除
    function delStar() {
      store.commit("delToStars", id);
      let addStar = document.getElementById("addToStar");
      let delStar = document.getElementById("delToStar");
      delStar.style.display = "none";
      addStar.style.display = "flex";
      Toast("取消收藏");
    }

    // 立即购买
    function onSubmit() {
      Toast("购买成功");
      // console.log(1);
      //store.commit('onSubmit',choose);
    }

    // 分享页面
    const showShare = ref(false);
    const options = [
      [
        { name: "微信", icon: "wechat" },
        { name: "朋友圈", icon: "wechat-moments" },
        { name: "微博", icon: "weibo" },
        { name: "QQ", icon: "qq" },
      ],
      [
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
        { name: "小程序码", icon: "weapp-qrcode" },
      ],
    ];
    const onSelect = (option) => {
      Toast(option.name);
      showShare.value = false;
    };
    // 分享页面结束
    const themeVars = {};
    return {
      addCart,
      addStar,
      delStar,
      onSubmit,
      good,
      themeVars,
      options,
      showShare,
      onSelect,
      loading,
    };
  },
  mounted: function () {
    const router = useRouter();
    let id = router.currentRoute.value.query.id;
    //console.log(id);
    const store = useStore();
    //获取收藏栏信息
    let collections = store.state.collections;
    store.state.showBottomMenu = false;
    let ifFind = 0;
    let addStar = document.getElementById("addToStar");
    let delStar = document.getElementById("delToStar");
    collections.forEach((element) => {
      if (element == id) {
        delStar.style.display = "flex";
        addStar.style.display = "none";
        ifFind = 1;
      }
    });
    if (ifFind == 0) {
      delStar.style.display = "none";
      addStar.style.display = "flex";
    }
    //console.log(good);
  },
};
</script>
<style scope>
.container {
  background-color: whitesmoke;
  position: absolute;
  margin: 0;
  padding: 0 0 -50px 0;
  height: 85%;
  width: 100%;
}

.van-image {
  margin-top: -1rem;
  width: 100%;
  height: 400px;
  overflow: hidden;
  object-fit: cover;
}

.share-button {
  border: none;
  font-weight: normal;
  display: inline;
  height: 1rem;
  color: darkgray;
}

.van-action-bar {
  bottom: 50px;
}

#addToStar {
  display: none;
}

#detail-title {
  font-family: 微软雅黑, Helvetica, serif;
  font-weight: bold;
  background-color: white;
  border-radius: 1rem;
  text-align: left;
  padding: 1rem;
  margin: 0.6rem;
}

#detail-price {
  height: 5vh;
  padding-top: 2.5vh;
  background-color: coral;
  color: white;
  margin-top: -4px;
  padding-bottom: 5px;
}

#introduce {
  height: auto;
}
</style>
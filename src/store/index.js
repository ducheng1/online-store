import {createStore} from 'vuex'

export default createStore({
  state: {
    goods: [
      {
          id:1,
          url: require("/public/goods/1.jpeg"),
          title: "家用刷牙杯/漱口杯",
          price: 17.9
      },
      {
          id:2,
          url: require("/public/goods/2.jpeg"),
          title: "RIO/锐澳微醺330ml*3瓶",
          price: 36
      },
      {
          id:3,
          url: require("/public/goods/3.jpeg"),
          title: "楠竹书架简易客厅多层收纳",
          price: 33.9
      },
      {
          id:4,
          url: require("/public/goods/4.jpeg"),
          title: "怡泉柠檬汽水苏打汽水",
          price: 44.8
      },
      {
          id:5,
          url: require("/public/goods/5.jpeg"),
          title: "寻汝汝窑功夫茶具套装天青色",
          price: 358
      },
      {
          id:6,
          url: require("/public/goods/6.jpeg"),
          title: "Royal Leaf - Tiesta Tea",
          price: 345
      },
      
    ],
    shoppingCarts:[],//存放要添加到购物车页的商品的id
    collections:[]//存放要添加到收藏页的商品的id
  },
  getters: {
  },
  mutations: {
      /* 添加到购物车方法 */
      addToCarts(state,goodId){
        state.shoppingCarts.unshift(goodId);
        //console.log(goodId,state.opt)
      },

      /* 添加到收藏页方法 */
      addToStars(state,goodId){
        state.collections.unshift(goodId);
        //console.log(goodId,state.collection)
      },
      del(state,goodId){
        state.shoppingCarts.splice(state.shoppingCarts.indexOf(goodId),1);
      } 
  },
  actions: {
  },
  modules: {
  }
})
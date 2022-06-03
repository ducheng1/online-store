import { createStore } from 'vuex'

export default createStore({
    state: {
        login: false,
        goods: [
            {
                id: 1,
                url: require("/public/goods/1.jpeg"),
                title: "家用刷牙杯/漱口杯",
                price: 17.9,
                sales: 205,
                introduce: [
                    require("/public/introduce/1/1.jpg"),
                    require("/public/introduce/1/2.jpg")
                ],
                detailimage:[
                    require("/public/goods/1.jpeg"),
                    require("/public/detail-image/1/1.jpg"),
                    require("/public/detail-image/1/2.jpg"),
                    require("/public/detail-image/1/3.jpg"),
                ]

            },
            {
                id: 2,
                url: require("/public/goods/2.jpeg"),
                title: "RIO/锐澳微醺330ml*3瓶",
                price: 36,
                sales: 189,
                introduce: [
                    require("/public/introduce/2/1.jpg"),
                    require("/public/introduce/2/2.jpg"),
                    require("/public/introduce/2/3.jpg"),
                ],
                detailimage:[
                    require("/public/goods/2.jpeg"),
                    require("/public/detail-image/2/1.jpg"),
                ]
            },
            {
                id: 3,
                url: require("/public/goods/3.jpeg"),
                title: "楠竹书架简易客厅多层收纳",
                price: 33.9,
                sales: 99,
                introduce: [
                    require("/public/introduce/3/1.jpg"),
                    require("/public/introduce/3/2.jpg"),
                    require("/public/introduce/3/3.jpg"),
                    require("/public/introduce/3/4.jpg"),
                    require("/public/introduce/3/5.jpg"),
                    require("/public/introduce/3/6.jpg"),
                    require("/public/introduce/3/7.jpg"),
                ],
                detailimage:[
                    require("/public/goods/3.jpeg"),
                    require("/public/detail-image/3/1.jpg"),
                ]
            },
            {
                id: 4,
                url: require("/public/goods/4.jpeg"),
                title: "怡泉柠檬汽水苏打汽水",
                price: 44.8,
                sales: 125,
                introduce: [
                    require("/public/introduce/4/1.jpg"),
                    require("/public/introduce/4/2.jpg"),
                    require("/public/introduce/4/3.jpg"),
                    require("/public/introduce/4/4.jpg"),
                    require("/public/introduce/4/5.jpg"),
                ],
                detailimage:[
                    require("/public/goods/4.jpeg"),
                    require("/public/detail-image/4/1.jpg"),
                    require("/public/detail-image/4/2.jpg"),
                ]
            },
            {
                id: 5,
                url: require("/public/goods/5.jpeg"),
                title: "寻汝汝窑功夫茶具套装天青色",
                price: 358,
                sales: 53,
                introduce: [
                    require("/public/introduce/5/1.jpg"),
                    require("/public/introduce/5/2.jpg"),
                    require("/public/introduce/5/3.jpg"),
                ],
                detailimage:[
                    require("/public/goods/5.jpeg"),
                ]
            },
            {
                id: 6,
                url: require("/public/goods/6.jpeg"),
                title: "Royal Leaf - Tiesta Tea",
                price: 345,
                sales: 39,
                introduce: [
                ],
                detailimage:[
                    require("/public/goods/6.jpeg"),
                ]
            },

        ],
        shoppingCarts: [],//存放要添加到购物车页的商品的id
        collections: [],//存放要添加到收藏页的商品的id
    },
    mutations: {
        /* 添加到购物车方法 */
        addToCarts(state, goodId) {
            if (state.shoppingCarts.indexOf(goodId) == -1)
                state.shoppingCarts.unshift(goodId);
            //console.log(goodId,state.opt)
        },

        /* 添加到收藏页方法 */
        addToStars(state, goodId) {
            state.collections.unshift(goodId);
            //console.log(goodId,state.collection)
        },

        /* 删除收藏页的商品 */
        delFromStars(state, goodId) {
            state.collections.splice(state.collections.indexOf(goodId), 1);
        },

        /* 删除购物车的商品 */
        delFromCarts(state, goodId) {
            state.shoppingCarts.splice(state.shoppingCarts.indexOf(goodId), 1);
        },

        /* 清空收藏页 */
        clearStars(state) {
            state.collections.splice(0);
        },
        loginSuccess(state) {
            state.login = true;
        }, cancelLogin(state) {
            state.login = false;
        },
        /* 购买商品 */
        onSubmit(state, choose) {
            state.shoppingCarts.forEach(s => {
                choose.forEach(c => {
                    if (s == c) {
                        state.shoppingCarts.splice(state.shoppingCarts.indexOf(s), 1)
                    }
                });
            });
        },

        //从收藏页中删除
        delToStars(state, goodId) {
            state.collections.splice(state.collections.indexOf(goodId), 1);
        },
    }
})
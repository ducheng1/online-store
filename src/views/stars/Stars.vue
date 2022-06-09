<template>
    <div class="stars">
        <div v-if="stars.length==0" class="noGood">
            <div style="height: 3rem;">收藏空空的，快去添加商品吧</div>
            <van-button type="primary" @click="gotoHome">去添加商品</van-button>
        </div>
        <van-grid :column-num="2">
            <van-grid-item v-for="s in stars" :key="s.id" class="item">
                <van-image
                    :src="s.url"
                    @click="goToDetail(s.id)"
                />
                {{ s.title }}
                <div class="action-bar-del" v-if="isManage" @click="delFromStars(s.id)">
                    <van-button type="warning" style="height: 2vh;">
                        取消收藏
                        <van-icon name="star" color="white"/>
                    </van-button>
                </div>
            </van-grid-item>
        </van-grid>
        <van-action-bar v-if="stars.length!=0" style="margin-left: 75%">
            <van-action-bar-icon icon="close" text="全部删除" color="#ee0a24" @click="clearStars"/>
            <van-action-bar-icon icon="edit" text="管理" color="#ee0a24" v-if="!isManage" @click="manageStars"/>
            <van-action-bar-icon icon="edit" text="取消管理" color="#ee0a24" v-if="isManage" @click="manageStars"/>
        </van-action-bar>
    </div>
</template>
<script>
import {reactive, ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {Toast} from 'vant'

export default {
    name: "StarsPage",
    setup() {
        const store = useStore();
        let goods = store.state.goods;//全部商品
        let collections = store.state.collections;//获取商品详情页传入的要加入收藏页的商品的id

        /* 得到收藏页的商品 */
        let stars = reactive([]);
        goods.forEach(g => {
            collections.forEach(c => {
                if (c == g.id) {
                    stars.unshift(g);
                }
            });
        });
        //console.log(stars)

        /* 清空收藏页 */
        function clearStars() {
            if (stars.length) {
                store.commit("clearStars");
                stars.splice(0);
                Toast('清空成功');
            } else {
                Toast('请去添加商品');
            }
        }

        /* 删除收藏页的商品 */
        function delFromStars(goodId) {
            store.commit("delFromStars", goodId);
            stars.forEach(s => {
                if(s.id==goodId){
                    stars.splice(stars.indexOf(s), 1);
                    return;
                }
            });        
            Toast('删除成功');
        }

        /* 是否进行管理 */
        let isManage = ref(false)

        function manageStars() {
            isManage.value = !isManage.value;
        }

        /* 单击跳转到商品详情页面 */
        const router = useRouter()

        function goToDetail(goodId) {
            router.push({path: '/detail', query: {id: goodId}})
        }

        /* 单击按钮跳转到Home上 */
        function gotoHome() {
            router.push('/')
        }

        return {stars, isManage, clearStars, manageStars, goToDetail, delFromStars, gotoHome}
    }
}
</script>
<style scoped>
.stars {
    background-color: whitesmoke;
    margin-top: -1rem;
    height: 90vh;
}

.van-action-bar {
    bottom: 50px;
}

.noGood {
    padding-top: 25vh;
    text-align: center;
}

.van-image {
    width: 100%;
    height: 200px;
}

.noGood input {
    background-color: Orange;
    width: 150px;
    height: 50px;
    color: white;
}
</style>
# 移动应用开发综合实验小组作业

## 项目简介

### 项目主题

**在线商店**

### 项目简介

以vue3.x作为主要框架，使用vant3+font-awesome美化界面，使用vue-router实现单页应用的构建，使用babel.js+webpack实现项目封装。

#### 主要前端框架

- vue3.x 官方文档：https://v3.cn.vuejs.org/

#### 前端样式库

- vant 3 官方文档：https://vant-contrib.gitee.io/vant/#/zh-CN 
- font awesome 官方文档：https://fa5.dashgame.com/#/

#### 其他组件

- vue-router 官方文档：https://router.vuejs.org/zh/
- vuex 官方文档：https://vuex.vuejs.org/zh/
- babel.js 官方文档：https://www.babeljs.cn/
- webpack 官方文档：https://www.webpackjs.com/

### 项目构建

1. 全局安装vue-cli，方便快速构建项目

    ```shell
    npm install -g @vue/cli@4
    ```

2. 使用脚手架构建项目

    ```shell
    vue create online-store
    ```

4. 等待构建完成

5. 进入项目目录

    ```shell
    cd mobile-app-group
    ```

6. 使用npm运行项目到本地服务器

    ```shell
    npm run serve
    ```

### 项目初始化与导入

1. vant 3安装

    ```shell
    npm i vant --save
    ```

2. font awesome安装

    ```shell
    npm install --save-dev @fortawesome/fontawesome-free
    ```

### 项目模块

#### 主页

搜索框、登录、注册、活动入口、商品展示

#### 商品详情

轮播图、商品介绍、价格、收藏、加入购物车、立即购买、评论

#### 购物车

商品展示、价格、多选、结算

#### 收藏

店铺展示、最近上新/推荐产品

#### 个人中心

登录、注册、订单、其他功能入口

### 项目分工

| 姓名   | 内容                   |
| ------ | ---------------------- |
| 王赟诚 | 主页、适配H5、框架设计 |
| 崔栋凯 | 商品详情               |
| 潘齐鹏 | 购物车、收藏           |
| 杜晓斌 | 个人中心               |

<template>
    <div class="home">
        <home-header></home-header>
        <div class="homeMain">
            <home-main></home-main>
        </div>
    </div>
</template>

<script>
import HomeHeader from "@/components/Home/HomeHeader";
import HomeMain from "@/components/Home/HomeMain";

export default {
    name: 'HomeView',
    components: {
        HomeHeader,
        HomeMain
    },
}
</script>
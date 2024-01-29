<template>
    <div class="layout">
        <Header />
        <div class="layout-has-menu flex">
            <div class="menu">
                <Menu />
            </div>
            <div class="content flex-1 mx-100px mt-20px">
                <router-view />
            </div>
        </div>
    </div>
</template>
<script  setup>
import Menu from "@/components/menu/index.vue";
import Header from './header.vue'

</script>
<style lang="scss" scoped>
.layout {
    height: calc(100% - $mini-player-height);
}
</style>
<template>
    <div class="layout">
        <Header />
       <div class="layout-has-menu">
        <Menu />
        <router-view />
       </div>

    </div>
</template>
<script  setup>
import { ref } from "vue";
import Menu from "@/components/menu/index.vue";
import Header from './header.vue'

let msg = ref('layout')
</script>
<style lang="scss" scoped>
.layout {}
</style>
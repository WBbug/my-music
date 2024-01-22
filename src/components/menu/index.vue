<template>
    <ul>
        <li :key="item.key" v-for="(item) in MemuList">
            <router-link :to="item.key">{{ item.name }}</router-link>
        </li>
    </ul>
</template>
<script  setup lang="ts">
    import { ref } from "vue";
    import {MemuList} from './menu-list'

    let msg = ref('menu')
</script>
<style lang="scss" scoped>

</style>
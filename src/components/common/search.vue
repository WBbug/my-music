<template>
    <el-input class="my-2" placeholder="搜索" :suffix-icon="Search" />
</template>
<script  setup>
import { ref } from "vue";
import { Search } from '@element-plus/icons-vue'
let msg = ref('search')
</script>
<style lang="scss" scoped></style>
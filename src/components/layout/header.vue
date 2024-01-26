<template>
    <div class="layout-header">
        <div class="left ml-1">
            <span class="icon">
                <ArrowLeft />
            </span>

            <span class="icon">
                <ArrowRight />
            </span>
        </div>
        <div class="right mr-4">
            <Search />
        </div>

    </div>
</template>
<script  setup>
import { ref } from "vue";
import Search from '@/components/common/search.vue'
import { ArrowRight, ArrowLeft } from '@element-plus/icons-vue'


let msg = ref('header')
</script>
<style lang="scss" scoped>
.layout-header {
    height: $header-height;
    background-color: $header-background-color;
    display: flex;
    justify-content: space-between;

    .left,.right{
        vertical-align: middle;
    }
}

</style>
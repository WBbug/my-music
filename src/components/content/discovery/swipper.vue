<template>
    <el-carousel height="200px" class="banner-carousel swipper mb-20px" type="card">
        <el-carousel-item :key="banner.scm" v-for="banner in banners">
            <img class="w-full" :src="`${banner.imageUrl}`" />
        </el-carousel-item>
    </el-carousel>
</template>
<script  setup>
import { ref } from "vue";
import { onMounted } from 'vue'
import { getBanner } from '@/api'

let banners = ref([])

onMounted(async () => {
    const response = await getBanner()
    banners.value = response.data.banners
})


</script>
<style lang="scss" scoped>
.banner-carousel {}
</style>
<template>
    <div class="playlists mb-10px">
        <div class="title">推荐歌单</div>
        <div class="card-container flex flex-wrap">
            <div class="playlist-card m-5px w-160px" :key="index" v-for="(item,index) in list">
                <div class="img-wrap">
                    <img style="width: 160px;height: 160px;" :src="item.picUrl" />
                </div>
                <p class="name my-10px">{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>
<script  setup>
import { ref } from "vue";
import { onMounted } from 'vue'
import { getPersonalized } from '@/api'

let list = ref([])

onMounted(async () => {
    const response = await getPersonalized({ limit: 12 })
    list.value = response.data.result
})


</script>
<style lang="scss" scoped>
.name{
    font-size: .85714rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}</style>
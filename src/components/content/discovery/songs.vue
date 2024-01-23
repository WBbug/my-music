<template>
    <div class="songs mb-20px">
        <div class="title">最新音乐</div>
        <div class="songs-card-container h-420px flex flex-col flex-wrap">
            <div class="song-card p-10px flex" :key="index" v-for="(song, index) in songs">
                <div class="order-wrap mr-5px flex items-center">
                    <span class="order">{{ (index + 1).toString().padStart(2, '0') }}</span>
                </div>
                <div class="img-wrap mr-10px h-64px">
                    <img style="width: 64px;" :src="song.picUrl" />
                </div>
                <div class="song-content flex flex-col justify-around">
                    <div class="song-name">{{ song.name }}</div>
                    <div class="singer">{{ song.song.artists[0].name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script  setup>
import { ref } from "vue";
import { onMounted } from 'vue'
import { getNewSongs } from '@/api'

let songs = ref([])

onMounted(async () => {
    const response = await getNewSongs()
    songs.value = response.data.result
    console.log(songs);
})

</script>
<style lang="scss" scoped>
.songs{
    font-size: 14px;
    .song-card{
        &:hover {
    background: $light-bgcolor;
  } cursor: pointer;
    }
}
</style>
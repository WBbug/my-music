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
                    <el-icon class="play-icon" size="32" :color="RedColor">
                        <CaretRight />
                    </el-icon>
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
import { RedColor } from '@/constants/index'
import { CaretRight } from '@element-plus/icons-vue'


let songs = ref([])

onMounted(async () => {
    const response = await getNewSongs()
    songs.value = response.data.result
})

</script>
<style lang="scss" scoped>
.songs {
    font-size: 14px;

    .song-card {
        &:hover {
            background: $light-bgcolor;
            .img-wrap .play-icon {
                opacity: 1;
                z-index: 100;
            }
        }

        .img-wrap {
            position: relative;

            .play-icon {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
            }
        }


        cursor: pointer;
    }
}</style>
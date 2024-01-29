<template>
    <div class="mini-player flex">
        <div class="song flex">
            <div class="img-wrap">
                <img width="42px" :src="currentSong.img" alt="">
            </div>
            <div class="info">
                <div class="name-container">
                    <div class="song-name">{{ currentSong.name }}</div>
                    <div class="artist-name">-{{ currentSong.artistsText }}</div>
                </div>
                <div class="time"></div>
            </div>
        </div>
        <div class="control flex items-center">
            <el-icon color="#d33a31">
                <Back />
            </el-icon>
            <el-icon @click="play" size="48" color="#d33a31">
                <CaretRight />
            </el-icon>
            <el-icon color="#d33a31">
                <Right />
            </el-icon>
        </div>
        <div class="mode"></div>
        <div class="progress-bar-wrap"></div>
        <audio ref="audioRef" :src="currentSong.url"></audio>
    </div>
</template>
<script  setup>
import { computed, ref, watch } from "vue";
import { Back, Right, CaretRight } from '@element-plus/icons-vue'
import { useStore } from '@/stores/music'

const audioRef = ref(null)
const musicStore = useStore()
const currentSong = computed(() => musicStore.currentSong)

watch(musicStore.songs, () => {
    console.log('musicStore', musicStore.currentSong);
})

function play() {
    console.log('audioRef', audioRef);
    audioRef.value.play()
}

function pause() {
    audioRef.value.pause()
}

// watch(currentSong())

</script>
<style lang="scss" scoped>
.mini-player {
    z-index: 100;
    background-color: #fff;
    height: $mini-player-height ;
    position: fixed;
    bottom: 0px;
    width: 100%;

    >audio {
        display: none;
    }

    .song {
        flex: 4;
    }

    .control {
        .el-icon {
            cursor: pointer;
        }
    }

    .mode {
        flex: 4;

    }
}
</style>
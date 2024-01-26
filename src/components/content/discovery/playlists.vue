<template>
    <div class="playlists mb-10px">
        <div class="title">推荐歌单</div>
        <div class="card-container flex flex-wrap">
            <div @click="jump(item.id)" class="playlist-card m-5px w-160px" :key="index" v-for="(item, index) in list">
                <div class="img-wrap">
                    <img style="width: 160px;height: 160px;" :src="item.picUrl" />
                    <el-icon class="play-icon" size="32" :color="RedColor">
                        <CaretRight />
                    </el-icon>
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
import { RedColor } from '@/constants/index'
import { useRouter } from 'vue-router'
import { CaretRight } from '@element-plus/icons-vue'


let list = ref([])
const route = useRouter()
let id = null

onMounted(async () => {
    const response = await getPersonalized({ limit: 12 })
    list.value = response.data.result
    console.log(list);
})



function jump(id){
    route.push(`/playlist/${id}`)
}


</script>
<style lang="scss" scoped>
.name {
    font-size: .85714rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.img-wrap {
    position: relative;

    &:hover{
        cursor: pointer;
        .play-icon {
            opacity: 1;
        }
    }
    .play-icon {
        position: absolute;
        right: 7px;
        bottom: 10px;
        opacity: 0;
    }
}
</style>
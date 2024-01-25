<template>
    <div class="playlist-detail">
        <div class="detail-wrap flex py-20px">
            <img class="mr-20px" :src="listDetail.coverImgUrl" width="220" height="220" />
            <div class="detail-wrap ">
                <div class="title mb-10px">{{ listDetail.name }}</div>
                <div class="creator-wrap flex items-center mb-10px ">
                    <el-avatar :size="32" :src="listDetail?.creator?.avatarUrl" />
                    <div class=" mx-10px name">{{ listDetail?.creator?.nickname }}</div>
                    <div class="time text-xs">{{ formatDate(listDetail.createTime, "yyyy-MM-dd") }} 创建</div>
                </div>
                <div class="play-all mb-10px">
                    <el-button :color="RedColor">
                        <VideoPlay class="mr-5px" width="16" />播放全部
                    </el-button>
                </div>
                <div class="desc-wrap">
                    <div class="label mb-10px">标签：{{ formatTag(listDetail?.creator?.expertTags) }}</div>
                    <span class="introduce">简介：{{ listDetail.description }}</span>
                </div>

            </div>
        </div>
        <div class="tabs flex">
            <ul class="tabs-wrap flex pl-0 my-0">
                <li :class="{ active: activeTab === index }" class="tab mr-24px py-12px" :key="index"
                    v-for=" (tab, index) in tabs" @click="clickHandle(index)">{{ tab }}</li>
            </ul>
            <Search v-if="activeTab ===0" @searchHandle='searchHandle' placeholder="搜索歌单音乐" />
        </div>
        <el-table v-if="activeTab === 0" class="songs-table" :data="showSongs" style="width: 100%">
            <el-table-column type="index" width="50" />
            <el-table-column prop="img" width="90">
                <template #default="scope">
                    <img width="60" :src="scope.row.img" alt="">
                </template>
            </el-table-column>
            <el-table-column prop="name" label="标题" width="300" />
            <el-table-column prop="artistsText" label="歌手" width="200" />
            <el-table-column prop="albumName" label="专辑" />
            <el-table-column prop="durationSecond" label="时长" />
        </el-table>
        <div v-else class="comment">
            <Comments :id="listDetail.id" />
        </div>
    </div>
</template>
<script  setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getListDetail, getSongDetail } from '@/api'
import { createSong, formatDate } from '@/utils'
import { RedColor } from '@/constants/index'
import Search from '@/components/common/search.vue'
import Comments from './comments.vue'

const route = useRouter()
const activeTab = ref(0)
const listDetail = ref({})
const songs = ref([])
const showSongs = ref([])
const tabs = ref(["歌曲列表"])


onMounted(async () => {
    const id = route.currentRoute.value.params.id
    const response = await getListDetail(id)
    listDetail.value = response.data.playlist
    tabs.value.push(`评论（${listDetail.value.commentCount}）`)
    getSongs(listDetail.value)
    console.log(listDetail, 'songs', songs);
})


async function getSongs(list) {
    const trackIds = list.trackIds.map(({ id }) => id)
    const songDetails = await getSongDetail(trackIds.slice(0, 500))
    songs.value = songDetails.data.songs.map(({ id, name, al, ar, mv, dt }) =>
        createSong({
            id,
            name,
            artists: ar,
            duration: dt,
            mvId: mv,
            albumName: al.name,
            img: al.picUrl,
        }),
    )
    showSongs.value = songs.value
}

function clickHandle(index) {
    activeTab.value = index
}

function formatTag(tags = []) {
    return tags?.join('/')
}


function searchHandle(text) {
    showSongs.value = songs.value.filter(item => item.name.includes(text) || item.albumName.includes(text) || item.artistsText.includes(text))
}

</script>
<style lang="scss">
.introduce {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

.tabs {
    border-bottom: 2px solid #f2f2f1;
    justify-content: space-between;

    .el-input {
        width: 200px;
    }

    .tabs-wrap {
        list-style: none;

        .tab {
            font-size: 1rem;
            color: #7F7F81;
            cursor: pointer;
        }

        .tab.active {
            color: #d33a31;
            border-bottom: 0.14286rem solid #d33a31;
            font-weight: 700;
        }
    }
}

.el-table__row {
    cursor: pointer;
}

.el-input__wrapper.is-focus {
    box-shadow: 0 0 0 1px none inset;
}
</style>
<template>
    <div class="comment mt-10px">
        <div v-if="hotComments.length" class="comments-container mb-40px">
            <p class="title">精彩评论</p>
            <Comment :hasBorder='index === hotComments.length - 1' :comment="comment" :key="comment.id"
                v-for="(comment, index) in hotComments" />

        </div>
        <div class="comments-container">
            <p class="title">最新评论({{ total }})</p>
            <Comment :hasBorder='index === comments.length - 1' :comment="comment" :key="comment.id"
                v-for="(comment, index) in comments" />
        </div>
        <el-pagination v-model:current-page="currentPage" @current-change="pageChange" layout="prev, pager, next"
            :total="total" />
    </div>
</template>
<script  setup>
import { onMounted, ref } from 'vue'
import { getPlaylistComment, getHotComment } from '@/api'
import Comment from './comment.vue'

const props = defineProps({
    id: Number
})
const currentPage = ref(1)
const comments = ref([])
const hotComments = ref([])
const total = ref(0)

async function getComments() {
    const response = await getPlaylistComment({
        id: props.id,
        pageSize: 20,
        offset: currentPage.value * 20
    })
    const { hotCommentsVal = [], comments: commentsVal = [], total: totalVal } = response.data

    hotComments.value = hotCommentsVal
    comments.value = commentsVal
    total.value = totalVal

}

onMounted(async () => {
    getComments()
    console.log('response', hotComments.value, comments.value, total.value);
    if (currentPage.value === 1) {
        const res = await getHotComment({
            id: props.id,
            type: 2
        })
        console.log(res);
        hotComments.value = res.data.hotComments.slice(0, 10)
    }
})

function pageChange(value) {
    console.log('page', value);
    getComments()
}
</script>
<style lang="scss" scoped>
.title {
    font-size: 16px;
    font-weight: 700;
}
</style>
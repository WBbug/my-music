<template>
    <div class="comment flex pt-20px">
        <div class="avatar mr-12px">
            <img width="40" :src="comment.user.avatarUrl" />
        </div>
        <div class="comment-container flex-1 pb-20px">
            <div class="content">
                <span class="username">{{ comment.user.nickname }}：</span>
                <span class="text">{{ comment.content }}</span>
            </div>
            <div v-if="comment.beReplied.length" class="replied p-8px mt-8px">
                <span class="username">{{ comment.beReplied[0].user.nickname }}:</span>
                <span class="text">{{ comment.beReplied[0].content }}</span>
            </div>
            <div class="bottom flex justify-between mt-8px">
                <div class="time">{{ formatDate(comment.time) }}</div>
                <div class="like flex align-center"> <CaretTop width="12" /> {{ comment.likedCount }}</div>
            </div>
        </div>
    </div>
</template>
<script  setup>
import { onMounted } from 'vue';
import { formatDate } from '@/utils'
import { CaretTop } from '@element-plus/icons-vue'



const props = defineProps({
    comment: Object,
    hasBorder: Boolean
})
onMounted(() => {
    console.log('props', props.comment);
})
</script>
<style lang="scss" scoped>
.avatar img {
    border-radius: 50%;
}

.comment-container {
    font-size: 12px;
    border-bottom: 1px solid #f2f2f1;

    .username {
        color: #517eaf;
    }
    .replied{
        background-color: #E6E5E6;
        border-radius: 4px;
    }
    .bottom{
       color: #BEBEBE
    }
}
</style>
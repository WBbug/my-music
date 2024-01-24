<template>
    <div class="mv">
        <div class="title">推荐MV</div>
        <div class="mvs-wrap">
            <div class="mv-card px-10px" :key="index" v-for="(mv, index) in list">
                <div class="img-wrap">
                    <img style="width: 230px;" :src="mv.picUrl" />
                    <div class="play-count-wrap">
                        <el-icon :size="16">
                            <CaretRight />
                        </el-icon>

                        {{ formatNumber(mv.playCount) }}
                    </div>
                    <el-icon class="play-icon" size="48" :color="RedColor">
                        <CaretRight />
                    </el-icon>
                </div>

                <p class="name">{{ mv.name }}</p>
                <p class="author text-slate-300">{{ mv.artistName }}</p>
            </div>
        </div>
    </div>
</template>
<script  setup>
import { ref, onMounted } from "vue";
import { getPersonalizedMv } from '@/api'
import { formatNumber } from '@/utils'
import { RedColor } from '@/constants/index'


let list = ref([])

onMounted(async () => {
    const response = await getPersonalizedMv({ limit: 12 })
    list.value = response.data.result
})



</script>
<style lang="scss" scoped>
.mv {
    .mvs-wrap {
        display: flex;

        .mv-card {
            .img-wrap {
                position: relative;

                .play-count-wrap {
                    position: absolute;
                    right: 2px;
                    top: 0;
                    color: white;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                }

                .play-icon {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    opacity: 0;
                }

                &:hover {
                    .play-icon {
                        opacity: 1;
                    }
                    cursor: pointer;
                }

            }

            .name {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 12px;
            }

            .author {
                font-size: 12px;
            }
        }

    }
}
</style>
<template>
    <div class="menu-wrap">
        <el-menu :active-text-color="RedColor" default-active="0" class="el-menu-vertical-demo">
            <el-menu-item :index="index.toString()" :key="item.key" v-for="(item, index) in MemuList">
                <el-icon>
                    <component :is="item.icon" class="icon"></component>
                </el-icon>
                <router-link style="color: inherit; text-decoration: none;" :to="`/${item.key}`">{{ item.name }}</router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script  setup lang="ts">
import { ref } from "vue";
import { MemuList } from './menu-list'
import {
    VideoPlay
} from '@element-plus/icons-vue'
import {RedColor} from '@/constants/index'

let msg = ref('menu')
</script>
<style lang="scss" scoped>
.menu-wrap {
    width: $menu-width;
}
</style>
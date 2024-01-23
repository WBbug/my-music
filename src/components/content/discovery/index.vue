<template>
<div class="discovery">
    <Swipper />
    <Playlists />
    <Songs />
    <MV />
</div>
</template>
<script  setup>
import { ref } from "vue";
import MV from './mvs.vue'
import Playlists from './playlists.vue'
import Songs from './songs.vue'
import Swipper from './swipper.vue'

let msg = ref('discovery')
</script>
<style lang="scss">
.discovery {
    .title{
        height: 50px;
        font-size: 20px;
    }
}

</style>
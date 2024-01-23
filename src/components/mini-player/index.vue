<template>
    <div class="mini-player">{{ msg }}</div>
</template>
<script  setup>
import { ref } from "vue";
    let msg = ref('player')
</script>
<style lang="scss" scoped>
.mini-player{
    height: $mini-player-height ;
}</style>
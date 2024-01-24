<template>
    <div>detail</div>
</template>
<script  setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
console.log(1)
const route = useRouter()

let id = 0
onMounted(async () => {
    id = route.currentRoute.value.params.id
})
</script>
<style lang="scss"></style>
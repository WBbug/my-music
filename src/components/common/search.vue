<template>
    <el-input v-model="text" @input="textChange" class="my-2" :placeholder="props.placeholder" :suffix-icon="Search" />
</template>
<script  setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const text = ref('')
const emit = defineEmits(['searchHandle'])

function textChange(text) {
    emit('searchHandle', text)
}

const props = defineProps({
    placeholder: {
        type: String,
        default: '搜索'
    }
})
</script>
<style lang="scss" scoped></style>
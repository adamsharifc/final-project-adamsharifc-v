<script setup>
import {RouterLink, useRoute} from 'vue-router';
import {toRef} from 'vue';
const props = defineProps({
    username: String,
})

</script>
<template>
    <div style="padding: 0.1rem 0.3rem 0.1rem 0.3rem; background-color: var(--contrast-color); color: var(--primary-color); font-size:large; border-radius: 1rem; cursor: pointer; width:fit-content; ">
        @{{ props.username }}
    </div>
</template>
<style scoped>
</style>
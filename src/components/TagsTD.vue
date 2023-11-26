<script setup>
import { computed} from 'vue';

const props = defineProps({
    tags: Array,
});

</script>

<template>
    <span v-for="tag in tags">
        #{{ tag.trim() }}
    </span>
</template>

<style scoped>
span {
    width: fit-content;
    padding: 0.1rem 0.25rem;
    border-radius: 0.5rem;
    font-size: medium;
    font-weight: 500;
    color: white;
    background-color: black;
    margin-right: 0.25rem;
}
</style>
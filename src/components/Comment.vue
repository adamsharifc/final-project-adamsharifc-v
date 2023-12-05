<script setup>
import {ref} from 'vue';

const props = defineProps({
    comment: String,
    addedBy: String,
});

</script>
<template>
<div class="container">
    <span class="addedBy"> @{{ props.addedBy }}</span>
    <span style="padding-left:0.3rem;"> </span>
    <span class="text"> {{ props.comment }}</span>
</div>
</template>
<style scoped>
.container{
    font-size: large;
    padding: 0.15rem 0rem 0.15rem 0rem;
    background-color: var(--contrast-color);
    color: var(--primary-color);
    border-radius: 0.25rem 0.2rem 0.2rem 0.2rem;
    padding-left: 0.15rem;
    width: 94%;
}
.addedBy{
    font-weight: 700;
    background-color: var(--primary-color);
    color: var(--contrast-color);
    padding: 0.17rem 0.15rem 0.15rem 0.15rem;
    border-radius: 0.25rem 0rem 0.5rem 0rem;
    margin-left: -0.15rem;
    margin-top: -1rem;
}
.text{
    white-space: pre-wrap;
    overflow-wrap: break-word;
}
</style>
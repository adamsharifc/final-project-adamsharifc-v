<script setup>
import {RouterLink} from 'vue-router';
import {ref, onMounted} from 'vue';
import axios from 'axios';

const data = ref([]);

const getData = async () => {
    try {
        const response = await axios.get('https://final-project-adamsharifc-p.vercel.app/api/getBugReports');
        data.value = response.data;
        console.log(JSON.stringify(data.value));
    } catch (error) {
        console.error(error);
    }
};

onMounted(getData);

</script>
<template>
<h1>SQUASHEM</h1>

<div v-for="(item, index) in data" :key="index">
    <span>{{item.title}}</span>

</div>


<nav>
    <router-link to="/AddBug">Add Bug</router-link> |
</nav>

</template>
<style scoped>
</style>
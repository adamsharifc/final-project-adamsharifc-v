<script setup>
import {RouterLink, onMounted} from 'vue-router';
import {ref} from 'vue';
import axios from 'axios';

const data = ref([]);

const getData = async () => {
    try {
        const response = await axios.get('https://final-project-adamsharifc-p.vercel.app/api/bugReports');
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

<nav>
    <router-link to="/AddBug">Add Bug</router-link> |
</nav>

</template>
<style scoped>
</style>
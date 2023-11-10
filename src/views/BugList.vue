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
    <div class="container">
        <h1 style="text-align: center;">SQUASHEM</h1>
        <h3 style="text-align: center;">BUG LIST</h3>
        <RouterLink to="/" class="navButton">Home</RouterLink>
        <table class="bug-table">
            <tr>
                <th>Title</th>
                <th>Added By</th>
                <th>Priority</th>
                <th>Tags</th>
                <th>Created</th>
            </tr>
            <tr v-for="(item, index) in data" :key="index">
                <td>{{item.title}}</td>
                <td>{{item.addedBy}}</td>
                <td>{{item.priority}}</td>
                <td>{{item.tags}}</td>
                <td>None</td>
            </tr>
        </table>
    </div>
</template>
<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.bug-table{
    width: 85%;
    border-collapse: collapse;
}
.bug-table th{
    border: 1px solid var(--secondary-color);
    background: var(--accent-color);
    color: var(--main-color);
    font-weight: bold;
    font-size: large;
    padding: 10px;
    text-align: left;
}
.bug-table tr{
    background-color: var(--main-color);
    color: var(--secondary-color);
}
.bug-table td{
    border: 1px solid var(--secondary-color);
    padding: 10px;
}

</style>
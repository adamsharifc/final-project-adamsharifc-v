<script setup>
import {RouterLink, useRouter} from 'vue-router';
import {ref, onMounted} from 'vue';
import axios from 'axios';
import StatusTD from '../components/StatusTD.vue';
import UserTD from '../components/UserTD.vue';
import PriorityTD from '../components/PriorityTD.vue';
import TagsTD from '../components/TagsTD.vue';

const router = useRouter();
const data = ref([]);
let loaded = ref(false);
const getData = async () => {
    try {
        const response = await axios.get('https://final-project-adamsharifc-p.vercel.app/api/getBugReports');
        data.value = response.data;
        loaded.value = true;
    } catch (error) {
        console.error(error);
        loaded.value = false;
    }
};
const openBug = (id) => {
    router.push({name: 'Bug', params: {id: id}});
};


onMounted(getData);
</script>

<template>
    <table class="dg" v-if="loaded==true">
        <thead>
            <tr style="position: sticky; top:0;">
                <th>Title</th>
                <th>Added By</th>
                <th>Priority</th>
                <th>Tags</th>
                <th>Created</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody style="font-size: medium;">
            <tr v-for="(item, index) in data" :key="index" @click="openBug(item._id)">
                <td>{{item.title}}</td>
                <td><UserTD :username="item.addedBy"/></td>                
                <td><PriorityTD :priority="item.priority"/></td>
                <td><TagsTD :tags="item.tags"/></td>
                <td>{{item.created}}</td>
                <td><StatusTD :status="item.status"/></td>
            </tr>
        </tbody>
    </table>
    <div v-else>
        <div style="margin-top: 0.5rem;"></div>
        <span style="font-size: larger; font-weight: 700; color: var(--secondary-color);">Loading...</span>
        <div style="margin-top: 0.5rem;"></div>
    </div>
</template>

<style scoped>
.dg{
    width: 99%;
    border-collapse: separate;
    border-spacing: 0;
    font-size: large;
}
.dg th{
    
    border-bottom: 0.07rem solid var(--secondary-color);
    font-weight: 500;
    font-size: medium;
    padding: 0.25rem;
    text-align: left;
    position: sticky;
}
.dg td{
    
    border-bottom: 0.01rem solid grey;
    background: var(--main-color);
    color: var(--secondary-color);
    font-family: var(--primary-font);
    font-size: medium;
    font-weight: 500;
    padding: 0.25rem;
    text-align: left;   
    cursor: default;
}
.dg tbody tr:hover{
    background: var(--secondary-color);
}
.dg tbody tr:hover td{
    color: var(--primary-color);
}
</style>
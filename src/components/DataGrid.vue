<script setup>
import StatusTD from './StatusTD.vue';
import TagsTD from './TagsTD.vue';
const data = [
    {
        name: 'Test 1',
        priority: 'High',
        description: 'This is a test description 1.',
        status: 'Open',
        tags: 'Bug, UI',
        created: '2022-01-01'
    },
    {
        name: 'Test 2',
        priority: 'Medium',
        description: 'This is a test description 2.',
        status: 'Closed',
        tags: 'Feature, Backend',
        created: '2022-02-01'
    },
    {
        name: 'Test 3',
        priority: 'Low',
        description: 'This is a test description 3.',
        status: 'In Progress',
        tags: 'Bug, Backend',
        created: '2022-03-01'
    }
]

</script>
    
<template>
    <table class="dg">
        <thead>
            <tr style="position: sticky; top:0;">
                <th>Name</th>
                <th>Priority</th>
                <th>Description</th>
                <th>Status</th>
                <th>Tags</th>
                <th>Created</th>
            </tr>
        </thead>
        <tbody style="font-size: medium;">
            <tr v-for="(item, index) in data" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.priority}}</td>
                <td>{{item.description}}</td>
                <td><StatusTD :status="item.status"/></td>
                <td>{{item.tags}}</td>
                <td>None</td>
            </tr>
        </tbody>
    </table>
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
}
</style>
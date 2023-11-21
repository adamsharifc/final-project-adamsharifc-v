<script setup>
import {toRef, computed, ref} from 'vue';

const props = defineProps({
    status: String,
})
const status = toRef(props, 'status');
const statusStyle = ref('')

switch(status.value){
    case 'New': statusStyle.value = {backgroundColor: '#87CEEB'};break;
    case 'Open': statusStyle.value = {backgroundColor: '#1DB954'};break;
    case 'In Progress': statusStyle.value = {backgroundColor: '#FF8C00'};break;
    case 'On Hold': statusStyle.value = {backgroundColor: '#D3D3D3'};break;
    case 'Fixed': statusStyle.value = {backgroundColor: '#32CD32'};break;
    case 'Closed': statusStyle.value = {backgroundColor: '#DC143C'};break;
    case "Won't Fix": statusStyle.value = {backgroundColor: '#480082'};break;
    case 'Duplicate': statusStyle.value = {backgroundColor: '#2E8B57'};break;
    case 'Invalid': statusStyle.value = {backgroundColor: '#D2691E'};break;
    default: statusStyle.value = {backgroundColor: '#000000'};break;
}
</script>
<template>
    <span :style="statusStyle">{{status}}</span>
</template>
<style scoped>
span{
    width: fit-content;
    padding: 0.1rem 0.25rem;
    border-radius: 0.5rem;
    font-size: medium;
    font-weight: 500;
    background-color: black;
    color: white;
}
</style>
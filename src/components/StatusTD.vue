<script setup>
import {toRef} from 'vue';

const props = defineProps({
    status: String
})
const status = toRef(props, 'status');

const statusStyle = computed(() =>{
    switch(status.value){
        case 'New':
            return {
                backgroundColor: '#87CEEB'
            }
        case 'Open':
            return {
                backgroundColor: '#FFD700'
            }
        case 'In Progress':
            return {
                backgroundColor: '#FF8C00'
            }
        case 'On Hold':
            return {
                backgroundColor: '#D3D3D3'
            }
        case 'Fixed':
            return {
                backgroundColor: '#32CD32'
            }
        case 'Closed':
            return {
                backgroundColor: '#DC143C'
            }
        case "Won't Fix":
            return {
                backgroundColor: '#480082'
            }
        case 'Duplicate':
            return {
                backgroundColor: '#2E8B57'
        }
        case 'Invalid':
            return {
                backgroundColor: '#D2691E'
        }
        default:
            return {
                backgroundColor: '#000000'
            }
    }
})

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
    font-weight: 400;
    background-color: black;
    color: white;
}
</style>
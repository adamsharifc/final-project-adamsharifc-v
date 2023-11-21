<script setup>
import {RouterLink, useRoute} from 'vue-router';
import {ref, onMounted, onUnmounted} from 'vue';
import axios from 'axios';
// import StatusTD from '../components/StatusTD.vue';
import AddSolutionLinked from '../components/AddSolutionLinked.vue';

const data = ref([]);
const solutions = ref([]);
const sol1 = ref([]);
const route = useRoute();
const getData = async () => {
    try {
        const response = await axios.get('https://final-project-adamsharifc-p.vercel.app/api/Bug', {
            params: {
                id: route.params.id
            }
        });
        data.value = response.data;
        console.log(JSON.stringify(data.value));
    } catch (error) {
        console.error(error);
    }
};

const getSolutions = async () =>{
    try {
        const response = await axios.get('https://final-project-adamsharifc-p.vercel.app/api/bugSolutions', {
            params: {
                id: route.params.id
            }
        });
        solutions.value = await response.data;
        sol1.value = await solutions.value[0];
    } catch (error) {
        console.error(error);
    }
};


const newSolutionDialog = ref(null); // This will hold a reference to the dialog element
solutions.value = solutions.value[0];
const showNewSolutionDialog = () => newSolutionDialog.value.showModal(); // This opens the dialog
const closeNewSolutionDialog = () => newSolutionDialog.value.close(); // This closes the dialog

onMounted(() => {
    getData();
    getSolutions();
    newSolutionDialog.value.addEventListener('click', (event) => {
        if (event.target === newSolutionDialog.value) {
            closeNewSolutionDialog();
        }
    });
});

onUnmounted(() => {
    if (!newSolutionDialog.value) return;
    newSolutionDialog.value.removeEventListener('click', closeNewSolutionDialog);
});


</script>
<template>
    <div class="container" style="border: 2px solid red; height: 99lvh; display: flex; flex-direction:column;gap: 0.2rem;">
        <span style="font-size: larger; text-decoration:underline; ">Bug Title</span>
        <span style="font-size: large;">Added by {{data.addedBy}}</span>
        <span style="font-size: large;">Priority: {{data.priority}}</span>
        <span style="font-size: large;">Tags: {{data.tags}}</span>
        <span style="font-size: large;">Created: {{data.created}}</span>
        <span style="font-size: large;">Description: {{data.description}}</span>
        <StatusTD :status="data.status"/>
        <span>Solutions</span>
        <div class="standard-button" id="new-bug-button" @click="showNewSolutionDialog">
            <i class="uil uil-plus-circle"></i>
            <span> New Solution</span>
        </div>

        <dialog ref="newSolutionDialog">
            <AddSolutionLinked @close-dialog="closeNewSolutionDialog" :bugID="data._id"></AddSolutionLinked>
        </dialog>
        <div style="font-size: x-large; display:flex;">
            Bug ID: {{sol1._id}} <br>
            resolvedBy: {{sol1.resolvedBy}}<br>
            resolutionDetail: {{sol1.resolutionDetail}}<br>
            status: {{sol1.status}}<br>
            verifiedBy: {{sol1.verifiedBy}}
        </div>
    </div>
</template>
<style scoped>
#new-bug-button{
    width: fit-content;
    font-size: x-large;
    color: var(--secondary-color);
    border-color: var(--secondary-color);
    background: var(--primary-color);
}
#new-bug-button:hover{
    background-color: var(--secondary-color);
    color: var(--primary-color);
    border-color: (--primary-color);
    transition: ease-in-out 0.2s;
}
#new-bug-button:active{
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border-color: var(--secondary-color);
    transition: ease-in-out 0.2s;
}
dialog{
    width: 12rem;
    border-radius: 0.3rem;
    border: none;
    background: var(--primary-color);
}
dialog::backdrop{
    backdrop-filter: blur(1.5px);
}
</style>
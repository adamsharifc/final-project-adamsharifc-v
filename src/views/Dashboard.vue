<script setup>
import {RouterLink} from 'vue-router';
import {ref, onMounted, onUnmounted} from 'vue';
import axios from 'axios';
import AddBug from '../components/AddBug.vue';
import AddSolution from '../components/AddSolution.vue';

const newBugDialog = ref(null); // This will hold a reference to the dialog element
const showNewBugDialog = () => newBugDialog.value.showModal(); // This opens the dialog
const closeNewBugDialog = () => newBugDialog.value.close(); // This closes the dialog

const newSolutionDialog = ref(null); // This will hold a reference to the dialog element
const showNewSolutionDialog = () => newSolutionDialog.value.showModal(); // This opens the dialog
const closeNewSolutionDialog = () => newSolutionDialog.value.close(); // This closes the dialog

onMounted(() => {
    newBugDialog.value.addEventListener('click', (event) => {
        if (event.target === newBugDialog.value) {
            closeNewBugDialog();
        }
    });

    newSolutionDialog.value.addEventListener('click', (event) => {
        if (event.target === newSolutionDialog.value) {
            closeNewSolutionDialog();
        }
    });
});

onUnmounted(() => {
    if (!newBugDialog.value) return;
    newBugDialog.value.removeEventListener('click', closeNewBugDialog);

    if (!newSolutionDialog.value) return;
    newSolutionDialog.value.removeEventListener('click', closeNewSolutionDialog);
});

</script>

<template>
    <div style="margin-bottom: 2rem;"></div>
    <div style="display: flex; gap: 0.5rem;">
        <div class="standard-button" id="new-bug-button" @click="showNewBugDialog">
            <i class="uil uil-plus-circle"></i>
            <span> New Bug</span>
        </div>
        <div class="standard-button" id="new-bug-button" @click="showNewSolutionDialog">
            <i class="uil uil-plus-circle"></i>
            <span> New Solution</span>
        </div>
    </div>

    <dialog ref="newBugDialog">
        <AddBug @close-dialog="closeNewBugDialog"></AddBug>
    </dialog>
    <dialog ref="newSolutionDialog">
        <AddSolution @close-dialog="closeNewSolutionDialog"></AddSolution>
    </dialog>

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
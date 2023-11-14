<script setup>
import {RouterLink} from 'vue-router';
import {ref, onMounted, onUnmounted} from 'vue';
import axios from 'axios';
import AddBug from '../components/AddBug.vue';

const dialog = ref(null); // This will hold a reference to the dialog element
const showDialog = () => dialog.value.showModal(); // This opens the dialog
const closeDialog = () => dialog.value.close(); // This closes the dialog

onMounted(() => {
    dialog.value.addEventListener('click', (event) => {
        if (event.target === dialog.value) {
            closeDialog();
        }
    });
});

onUnmounted(() => {
    if (!dialog.value) return;
    dialog.value.removeEventListener('click', closeDialog);
});

</script>

<template>
    <div style="margin-bottom: 2rem;"></div>
    <div class="standard-button" id="new-bug-button" @click="showDialog">
        <i class="uil uil-plus-circle"></i>
        <span> New Bug</span>
    </div>

    <dialog ref="dialog">
        <AddBug @close-dialog="closeDialog"></AddBug>
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
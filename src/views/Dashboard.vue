<script setup>
import {RouterLink} from 'vue-router';
import {ref, onMounted, onUnmounted} from 'vue';
import axios from 'axios';
import AddBug from '../components/AddBug.vue';
import AddSolution from '../components/AddSolution.vue';
import SearchBar from '../components/SearchBar.vue';

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

const quotes = ref([
    "A computer program is like a nose; only the creator really knows how it works, and everyone else just has to deal with the occasional sneeze.😄", 
    "Debugging is like being the detective in a crime movie where you're also the murderer.🕵️‍♂️" ,
    "Why do programmers prefer dark mode? Because light attracts bugs! 🦟" ,
    "The best thing about a boolean is even if you are wrong, you are only off by a bit. 🤓" ,
    "I'm not anti-social; I'm just not user-friendly.  😅",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.  🎃🎄",
    "There are only 10 types of people in the world: those who understand binary and those who don't. 😆" ,
    "Why did the programmer quit his job? He didn't get arrays. 🤷‍♂️" ,
    "The best code is no code at all. The second-best code is the one that never needs debugging.  🚫🐞"
]);
const randomquote = 1;
</script>

<template>

    <div style="margin-bottom: 0.5rem;"></div>
    <span style="font-size: larger; font-weight: 700; color: var(--secondary-color);">Welcome!</span>
    <div style="margin-bottom: 0.5rem;"></div>
    <div style="display: flex; gap: 0.5rem;">
        <div class="standard-button" id="new-bug-button" @click="showNewBugDialog">
            <i class="uil uil-plus-circle"></i>
            <span> Quick Bug</span>
        </div>
        <div class="standard-button" id="new-bug-button" @click="showNewSolutionDialog">
            <i class="uil uil-plus-circle"></i>
            <span> Quick Solution</span>
        </div>
    </div>
    <div style="margin-top: 0.5rem; margin-left: 0.5rem;">
        <span style="font-size: xx-large; font-weight:600; color: var(--secondary-color);">STATS</span>
        <br><span style="font-size: xx-large; font-weight:700; color: var(--priority-urgent);">7 </span>
        <span style="font-size: large; font-weight:500; color: var(--priority-urgent);">Urgent Bugs</span>
        <br><span style="font-size: xx-large; font-weight:700; color: var(--priority-semi-urgent);">3 </span>
        <span style="font-size: large; font-weight:500; color: var(--priority-semi-urgent);">Semi-Urgent Bugs</span>
        <br><span style="font-size: xx-large; font-weight:700; color: var(--priority-not-urgent);">2 </span>
        <span style="font-size: large; font-weight:500; color: var(--priority-not-urgent);">Not Urgent Bugs</span>
        <br><span style="font-size: xx-large; font-weight:700; color: var(--priority-informational);">1 </span>
        <span style="font-size: large; font-weight:500; color: var(--priority-informational);">Informational Bugs</span>
    </div>

    <SearchBar></SearchBar>

    <span style="font-size:large; font-style:italic; font-weight:400; max-width: 50%;">
        "A computer program is like a nose; only the creator really knows how it works, and everyone else just has to deal with the occasional sneeze.😄", 
    </span>


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
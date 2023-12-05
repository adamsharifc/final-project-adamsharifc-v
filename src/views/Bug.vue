<script setup>
import {RouterLink, useRoute} from 'vue-router';
import {ref, onMounted, onUnmounted} from 'vue';
import axios from 'axios';
import AddSolutionLinked from '../components/AddSolutionLinked.vue';
import UserTD from '../components/UserTD.vue';
import StatusTD from '../components/StatusTD.vue';
import PriorityTD from '../components/PriorityTD.vue';
import TagsTD from '../components/TagsTD.vue';
import Solution from '../components/Solution.vue';
import CommentBar from '../components/CommentBar.vue';
import Comment from '../components/Comment.vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

const data = ref([]);
let formattedTimestamp = ref('');

const solutions = ref([]);
const comments = ref([]);
const sol1 = ref([]);
const solExists = ref(false);
const route = useRoute();
const getData = async () => {
    try {
        const response = await axios.get('https://final-project-adamsharifc-p.vercel.app/api/Bug', {
            params: {
                id: route.params.id
            }
        });
        data.value = response.data;
        formattedTimestamp = new Date(data.value.timestamp);
        formattedTimestamp = formattedTimestamp.toString();
        console.log(data.value);
        comments.value = data.value.comments;
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
        if(solutions.value.length > 0){
            solExists.value = true;
        }
        sol1.value = solutions.value[0];

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
    authStore.setBugID(route.params.id);
    newSolutionDialog.value.addEventListener('click', (event) => {
        if (event.target === newSolutionDialog.value) {
            closeNewSolutionDialog();
        }
    });
});

onUnmounted(() => {
    if (!newSolutionDialog.value) return;
    newSolutionDialog.value.removeEventListener('click', closeNewSolutionDialog);
    authStore.setBugID(null);
});

let handleCommentAdded = ref(null);
handleCommentAdded = (comment) => {
    const addedBy = comment.addedBy;
    const commentText = comment.comment;
    console.log("I was called");
    console.log(comment);
    console.log(`${addedBy} said: ${commentText}`);
    comments.value.push(comment);
    
};

</script>
<template>
    <div class="container" style="padding-left: 1rem;height: 99lvh; display: flex; flex-direction:column;gap: 0.2rem;">
        
        <div style="display:flex;flex-direction:row;align-items:center;gap:0.5rem; font-weight:500;">
            <span style="font-size: larger; font-weight:600;"> {{data.title}} </span>
            <UserTD :username="data.addedBy"/>
        </div>

        <table>
            <tr>
                <td> <span style="font-size: large; font-weight:500;">Status </span></td>
                <td> <StatusTD :status="data.status"/> </td>
            </tr>
            <tr>
                <td> <span style="font-size: large; font-weight:500;">Priority </span></td>
                <td> <PriorityTD :priority="data.priority"/> </td>
            </tr>
            <tr>
                <td> <span style="font-size: large; font-weight:500;">Tags </span></td>
                <td> <TagsTD :tags="data.tags"/> </td>
            </tr>
            <tr>
                <td> <span style="font-size: large; font-weight:500;">Created </span></td>
                <td> <span style="font-size: large;"> {{formattedTimestamp}} </span></td>
            </tr>
            <tr>
                <td> <span style="font-size: large; font-weight:500;">Description </span></td>
                <td> <span style="font-size: large;">{{data.description}} </span></td>
            </tr>
        </table>
        
        <div style="display:grid; grid-template-columns: 7fr 3fr; gap: 0.5rem;">
            <div>
                <div style="display: flex; flex-direction: row; gap: 0.5rem;">
                    <span style="font-size: xx-large; font-weight: 600; margin-right: auto;">Solutions</span>
                    <div class="standard-button" id="new-bug-button" @click="showNewSolutionDialog" style="align-self: flex-end;">
                        <i class="uil uil-plus-circle"></i>
                        <span> New Solution</span>
                    </div>
                </div>
                <div style="margin-bottom: 0.5rem;"></div>

                <dialog ref="newSolutionDialog">
                    <AddSolutionLinked @close-dialog="closeNewSolutionDialog" :bugID="data._id"></AddSolutionLinked>
                </dialog>

                <div v-if="solExists">
                    <Solution :sol_id="sol1._id" :resolvedBy="sol1.resolvedBy" :resolutionDetail="sol1.resolutionDetail" :status="sol1.status" :verifiedBy="sol1.verifiedBy"/>
                </div>

                <div v-else>
                    <span style="font-size: x-large; font-style:italic">It's lonely here</span>
                </div>
            </div>
            <div style="height:auto;">
                <span style="font-size: xx-large; font-weight: 600;">Comments</span>
                <div style="margin-top: 0.5rem;"></div>
            
                <div class="comments-container" style="display: flex; flex-direction: column; gap: 0.5rem;">
                    <div v-for="comment in comments">
                        <Comment :comment="comment.comment" :addedBy="comment.addedBy"/>
                    </div>
                </div>
                <div style="margin-top: 0.5rem;"></div>
                <CommentBar @comment-added="handleCommentAdded"></CommentBar>            
            </div>
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
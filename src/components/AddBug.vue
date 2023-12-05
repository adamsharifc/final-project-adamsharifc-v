<script setup>
import { ref} from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();
let title = ref('');
let tags = ref('');
let description = ref('');
let priority = ref('');
let status = ref('');

const emit = defineEmits(['close-dialog']);


const submitForm = async (event) => {
    event.preventDefault();

    const formData = {
        title: title.value,
        tags: tags.value,
        description: description.value,
        priority: priority.value,
        status: status.value
    };

    try {
        const response = await axios.post('https://final-project-adamsharifc-p.vercel.app/api/newBugReport', formData);
        console.log(formData);
        console.log('i am here');
        console.log(response.data);
        emit('close-dialog');
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <div class="content-page">
        <form @submit="submitForm" class="add-form">
            <input v-model="title" type="text" name="title" placeholder="Title" class="standard-form-field" id="new-bug-field" required>
            <input v-model="tags" type="text" name="tags" placeholder="Tags" class="standard-form-field" id="new-bug-field" required>
            <input v-model="description" type="text" name="description" placeholder="Description" class="standard-form-field" id="new-bug-field" required>
            <select v-model="priority" name="priority" class="standard-form-field" id="new-bug-field" required>
                <option value="" disabled selected>Priority</option>
                <option value="Urgent">Urgent</option>
                <option value="Semi-urgent">Semi-urgent</option>
                <option value="Not urgent">Not urgent</option>
            </select>
            <select v-model="status" name="status" class="standard-form-field" id="new-bug-field" required>
                <option value="" disabled selected>Status</option>
                <option value="New">New</option>
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
            </select>
            <div class="standard-button" id="bug-submit-button" @click="submitForm">
                <i class="uil uil-corner-down-right-alt"></i>
                <span> Submit</span>
            </div>
        </form>
    </div>
</template>

<style scoped>

.content-page{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

#new-bug-field{

}

#bug-submit-button{
    margin-top: 0.5rem; 
    margin-bottom: 0.5rem;
    background: var(--secondary-color);
    color: var(--primary-color);
    font-size: large;
}
#bug-submit-button:hover{
    background-color: var(--primary-color);
    color: var(--secondary-color);
    transition: ease-in-out 0.2s;
}
#bug-submit-button:active{
    background-color: var(--secondary-color);
    color: var(--primary-color);
    transition: ease-in-out 0.2s;
}


</style>
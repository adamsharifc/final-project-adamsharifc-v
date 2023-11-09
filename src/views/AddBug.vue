<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();
let title = ref('');
let tags = ref('');
let description = ref('');
let priority = ref('');

const submitForm = async (event) => {
    event.preventDefault();

    const formData = {
        title: title.value,
        tags: tags.value,
        description: description.value,
        priority: priority.value,
    };

    try {
        const response = await axios.post('https://final-project-adamsharifc-p.vercel.app/api/newBugReport', formData);
        // const response = await axios.post('http://localhost:5000/reviews/add', formData);
        console.log(formData);
        console.log('i am here');
        console.log(response.data);
        router.push('/');
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <h1>ADD BUG</h1>
    <div class="content-page">
        <form @submit="submitForm" class="add-form">
            <input v-model="title" type="text" name="title" placeholder="Title" class="add-form-field" required>
            <input v-model="tags" type="text" name="tags" placeholder="Tags" class="add-form-field" required>
            <input v-model="description" type="text" name="description" placeholder="Description" class="add-form-field" required>
            <select v-model="priority" name="priority" class="add-form-field" required>
                <option value="Urgent">Urgent</option>
                <option value="Semi-urgent">Semi-urgent</option>
                <option value="Not urgent">Not urgent</option>
            </select>
            <input type="submit" value="Submit" class="add-form-submit">
        </form>
    </div>
</template>

<style scoped>
</style>
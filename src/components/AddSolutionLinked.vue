<script setup>
import { ref} from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
    bugID: String
});

let bugID = ref('');
let resolvedBy = ref('');
let resolutionDetail = ref('');
let status = ref('');
let verifiedBy = ref('');

const emit = defineEmits(['close-dialog']);


const submitForm = async (event) => {
    event.preventDefault();

    const formData = {
        bugId: props.bugID,
        resolvedBy: resolvedBy.value,
        resolutionDetail: resolutionDetail.value,
        status: status.value,
        verifiedBy: verifiedBy.value,
    };

    try {
        const response = await axios.post('https://final-project-adamsharifc-p.vercel.app/api/newSolution', formData);
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

            <input v-model="resolvedBy" type="text" name="resolvedBy" placeholder="Resolved By" class="standard-form-field" id="new-solution-field" required>
            <input v-model="resolutionDetail" type="text" name="resolutionDetail" placeholder="Resolution Detail" class="standard-form-field" id="new-solution-field" required>
            <select v-model="status" name="status" class="standard-form-field" id="new-solution-field" required>
                <option value="" disabled selected>Status</option>
                <option value="Pending">Pending</option>
                <option value="Fixed">Fixed</option>
                <option value="Invalid">Invalid</option>
            </select>
            <input v-model="verifiedBy" type="text" name="verifiedBy" placeholder="Verified By" class="standard-form-field" id="new-solution-field" required>
            
            <div class="standard-button" id="solution-submit-button" @click="submitForm">
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

#solution-submit-button{
    margin-top: 0.5rem; 
    margin-bottom: 0.5rem;
    background: var(--secondary-color);
    color: var(--primary-color);
    font-size: large;
}
#solution-submit-button:hover{
    background-color: var(--primary-color);
    color: var(--secondary-color);
    transition: ease-in-out 0.2s;
}
#solution-submit-button:active{
    background-color: var(--secondary-color);
    color: var(--primary-color);
    transition: ease-in-out 0.2s;
}


</style>
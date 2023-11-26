<script setup>
import { ref } from 'vue';
import UserTD from './UserTD.vue';
import StatusTD from './StatusTD.vue';
const props = defineProps({
  sol_id: String,
  resolvedBy: String,
  resolutionDetail: String,
  status: String,
  verifiedBy: String,
});

const copied = ref(false);

const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(props.sol_id);
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 1500);
    } catch (err) {
      console.log('Failed to copy text: ', err);
    }
};

</script>

<template>
<div style="height: fit-content; padding: 0.5rem 0.5rem; border: 2px solid var(--secondary-color); border-radius: 0.2rem; display:flex; flex-direction: column; gap: 0.2rem;">

    <div @click="copyToClipboard" style="font-size: large; font-weight: 500; padding: 0.1rem 0.5rem; background-color: var(--secondary-color); color: var(--primary-color); width: fit-content; border-radius: 1rem;">
        <span v-if="!copied">Solution ID </span>
        <i v-if="!copied"  class="uil uil-copy-alt"></i>
        <span v-if="copied" class="copied">Copied!</span>    
    </div>

    <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="font-size: large; font-weight: 500">Resolved by: </span>
        <UserTD :username="props.resolvedBy"/> 
    </div>

    <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="font-size: large; font-weight: 500">Status: </span>
        <StatusTD :status="props.status"/>
    </div>

    <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="font-size: large; font-weight: 500">Verfied by: </span>
        <UserTD :username="props.verifiedBy"/> 
    </div>

    <p style="max-width: 80%; width:fit-content; font-family: var(--mono-font); font-size:medium;font-weight:400;">

    </p>

</div>
</template>
<style scoped>
</style>
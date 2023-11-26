<script setup>
import { computed } from 'vue';

const props = defineProps({
  status: String,
});

const statusStyle = computed(() => {
  switch (props.status) {
    case 'New': return { backgroundColor: '#87CEEB' };
    case 'Open': return { backgroundColor: '#1DB954' };
    case 'In Progress': return { backgroundColor: '#FCAE1E' };
    case 'On Hold': return { backgroundColor: '#787276' };
    case 'Fixed': return { backgroundColor: '#01796F' };
    case 'Closed': return { backgroundColor: '#DC143C' };
    case "Won't Fix": return { backgroundColor: '#480082' };
    case 'Duplicate': return { backgroundColor: '#36454F' };
    case 'Invalid': return { backgroundColor: '#DD571F' };
    default: return { backgroundColor: '#000000' };
  }
});
</script>

<template>
  <span :style="statusStyle">{{ props.status }}</span>
</template>

<style scoped>
span {
  width: fit-content;
  padding: 0.1rem 0.25rem;
  border-radius: 0.5rem;
  font-size: medium;
  font-weight: 500;
  color: white;
}
</style>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  priority: String,
});

const priorityStyle = computed(() => {
  const style = getComputedStyle(document.documentElement);
  switch (props.priority) {
    case 'Urgent': return { backgroundColor:  style.getPropertyValue('--priority-urgent')};
    case 'Semi-urgent': return { backgroundColor: style.getPropertyValue('--priority-semi-urgent')};
    case 'Not Urgent': return { backgroundColor: style.getPropertyValue('--priority-not-urgent')};
    case 'Informational': return { backgroundColor: style.getPropertyValue('--priority-informational')};
    default: return { backgroundColor: style.getPropertyValue('--priority-default')};
  }
});
</script>

<template>
  <span :style="priorityStyle">{{ props.priority }}</span>
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

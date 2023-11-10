<script setup>
import {RouterLink} from 'vue-router';
import {ref, onMounted} from 'vue';
import axios from 'axios';

</script>
<template>
<h1 style="text-align: center;">SQUASHEM</h1>

<nav style="text-align: center;">
    <router-link to="/AddBug" class="navButton">Add Bug</router-link>
    <router-link to="/BugList" class="navButton">Bug List</router-link>
</nav>

</template>
<style scoped>

.navButton{
    text-decoration: none;
    color: var(--main-color);
    font-size: large;
    font-weight: 500;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 0.5rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    background-color: var(--accent-color);
    margin: 0.5rem;
    border: 1px solid var(--accent-color);
    transition: ease-in-out 0.2s;
}
.navButton:hover{
    background-color: var(--main-color);
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
    transition: ease-in-out 0.2s;
}
.navButton:active{
    background-color: var(--accent-color);
    color: var(--main-color);
    border: 1px solid var(--main-color);
    transition: ease-in-out 0.2s;
}
</style>
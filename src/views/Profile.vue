<script>
import { useAuthStore } from '../stores/auth';
import { watch } from 'vue';

export default {
    setup() {
        const authStore = useAuthStore();

        watch(() => authStore.isLoggedIn, (newVal) => {
            console.log(newVal);
        });

        const state = authStore.getState();

        return {
            ...state,
        };
    },
};
</script>
<template>
    <div style="margin-top: 0.5rem;">
        <span style="font-size: larger; font-weight: 700; background-color: var(--contrast-color); padding: 0.2rem 0.5rem; border-radius: 20rem; color: var(--primary-color);">@{{user_username}}</span>
        <div style="margin-bottom: 0.5rem;"></div>
        <div style="display: flex; flex-direction: row; align-items: center;">
            <div style="font-size:larger; background-color: var(--contrast-color); width: fit-content; padding: 0.35rem 0.5rem; border-radius: 20rem; color: var(--primary-color);">
                <i class="uil uil-user"></i>
            </div>
            <div style="padding-left: 0.3rem;"></div>
            <div style="display:flex; flex-direction:column; font-size: medium; font-weight: 500; color:var(--contrast-color);">
                <span>{{user_name}}</span>
                <a :href="'mailto:' + user_email" style="font-style: italic; color: var(--contrast-color);" class="email">{{user_email}}</a>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .email{
        text-decoration: none;
        color: var(--contrast-color);
    }
    .email:hover{
        text-decoration: underline;
    }
</style>
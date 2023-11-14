<script setup>
import {RouterLink} from 'vue-router';
</script>
<template>
    <div class="home-container">
        <div style="display: flex; column-gap: 2rem; flex-wrap: wrap; margin-bottom: 1rem;">
            <div>
                <h1 style="color: var(--secondary-color); font-size: var(--h1-font-size); text-indent: 1rem;">SQUASHEM</h1>
                <h1 style="color: var(--accent-color-1); font-size: var(--h1-font-size); text-indent: 3rem;">Hi!</h1>
            </div>
            <div style="display: flex; align-items: center; color: var(--accent-color-1); min-width: 40%; max-width: 60%; margin-left: 4rem;">
                Welcome to Squashem! Log in, create, and manage your bugs effortlessly. Streamline your debugging process with concise reports. Let's squash those bugs together!
            </div>

        </div>
        <div style="background: var(--secondary-color); border-radius: 0.15rem 0.15rem 1rem 1rem; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
            
            <div style="display: flex; justify-content: center; gap: 0.3rem; padding-top: 1.5rem; max-width: 70%">
                <router-link to="/Login" style="text-decoration: none;">
                    <div class="standard-button" id="sign-in-up-button">Sign In</div>
                </router-link>
                <span style="color: var(--primary-color);">|</span>

                <router-link to="/Login#signup" style="text-decoration: none;">
                    <div class="standard-button" id="sign-in-up-button">Sign Up</div>
                </router-link>
            </div>
            <span style="align-self: center; color: var(--primary-color); font-size: medium; margin-bottom: 0.3rem; font-weight: 500;">&copy; Adam Sharif</span>
        </div>
    </div>
</template>

<style scoped>
.home-container{
    display: flex;
    flex-direction: column;
    height: 98vh;
}
#sign-in-up-button{
    color: var(--primary-color);
}
#sign-in-up-button:hover{
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border-color: var(--secondary-color);
    transition: ease-in-out 0.2s;
}
#sign-in-up-button:active{
    background-color: var(--secondary-color);
    color: var(--primary-color);
    border-color: (--primary-color);
    transition: ease-in-out 0.2s;
}
</style>
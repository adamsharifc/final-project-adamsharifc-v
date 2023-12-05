<script>
import { useAuthStore } from '../stores/auth';
export default {
    setup() {
        const authStore = useAuthStore();
        return {
            user: authStore.user,
        };
    },
    methods:{
        async logout(){
            const authStore = useAuthStore();
            try{
                await authStore.logout();
            } catch (error) {
                console.error(error.response.data.message);
            }
        },
    },
};
</script>

<template>
    <div class="navbar-container">
        <router-link to="/" style="font-size: var(--h2-font-size);margin-top: 0.25rem; text-decoration: none; text-align:center;">
            <span class="logo" style="">SQUASHEM</span>
        </router-link>
        
        <div id="nav-links" style=" margin-top: 0.5rem;display: flex; flex-direction: column; gap: 0.3rem;">
            <router-link to="/Dashboard" class="nav-link"> 
                <i class="uil uil-dashboard"></i>
                <span> Dashboard</span>
            </router-link>

            <router-link to="/MyReports" class="nav-link"> 
                <i class="uil uil-file-alt"></i>
                <span> My Reports</span>
            </router-link>    
            
            <router-link to="/BugFeed" class="nav-link"> 
                <i class="uil uil-chart"></i>
                <span> Bug Feed</span>
            </router-link>

            <router-link to="/Profile" class="nav-link"> 
                <i class="uil uil-user"></i>
                <span> Profile</span>
            </router-link>

        </div>
        <div style="margin-top:auto;">
            <router-link to="/Login" style="text-decoration: none" >
                <div class="standard-button" id="log-out-button" @click="logout">
                    <i class="uil uil-signout"></i>
                    <span> Log Out</span>
                </div>
            </router-link>
        </div>



    </div>
</template>
<style scoped>
.navbar-container{
    background: transparent;
    height: 98vh;    
    max-width: 9rem;
    width: fit-content;
    padding: 0rem 0.7rem;
    border-radius: 0.5rem;
    color: var(--secondary-color);
    display: flex;
    flex-direction: column;
}
.logo{
    font-weight: bold;
    text-align: center;
    color: var(--secondary-color);
}
#log-out-button{
    margin-bottom: 0.5rem;
    font-size: large;
    
    background-color: var(--primary-color);
    color: var(--alert-color);
    border-color: var(--alert-color);
}
#log-out-button:hover{
    color: var(--primary-color);
    background: var(--alert-color);
    border-color: var(--alert-color);
    transition: ease-in-out 0.2s;
}
#log-out-button:active{
    background-color: var(--primary-color);
    color: var(--alert-color);
    border-color: (--primary-color);
    transition: ease-in-out 0.2s;
}
.nav-link{
    color: var(--secondary-color);
    font-size: large;
    font-weight: 400;
    cursor: pointer;
    transition: ease-in-out 0.2s;
    text-decoration: none;
}
.nav-link:hover{
    filter: brightness(1.5);
    font-weight: 600;
    transition: ease-in-out 0.2s;
}
.user-bar{
    cursor: default;
}
.user-bar:hover{
    background: var(--primary-color);
    color: var(--secondary-color);
}
</style>
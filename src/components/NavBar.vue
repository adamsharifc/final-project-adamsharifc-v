<script setup>

</script>
<template>
    <div class="navbar-container">
        <router-link to="/" style="font-size: var(--h2-font-size);margin-top: 0.25rem; text-decoration: none; text-align:center;">
            <span class="logo" style="">SQUASHEM</span>
        </router-link>
        
        <div id="nav-links" style="margin-left: 1rem; margin-top: 0.5rem;display: flex; flex-direction: column; gap: 0.3rem;">
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

            <span class="nav-link">
                <i class="uil uil-cog"></i>
                <span> Settings</span>
            </span>
        </div>
        <router-link to="/Login" style="text-decoration: none; margin-top: auto;" >
            <div class="standard-button" id="log-out-button">
                <i class="uil uil-signout"></i>
                <span> Log Out</span>
            </div>
        </router-link>
    </div>
</template>
<style scoped>
.navbar-container{
    background: var(--secondary-color);
    height: 98vh;    
    max-width: 9rem;
    min-width: fit-content;
    width: 7.2rem;
    border-radius: 0.5rem;
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
}
.logo{
    font-weight: bold;
    text-align: center;
    color: var(--primary-color);
}
#log-out-button{
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
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
    color: var(--primary-color);
    font-size: large;
    cursor: pointer;
    transition: ease-in-out 0.2s;
    text-decoration: none;
}
.nav-link:hover{
    filter: brightness(1.5);
    font-weight: 500;
    transition: ease-in-out 0.2s;
}
</style>
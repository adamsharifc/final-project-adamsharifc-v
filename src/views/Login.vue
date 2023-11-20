<script setup>
import { ref, onMounted} from 'vue';
import axios from 'axios';
const in_or_up = ref('in');
onMounted(() => {
    const hash = window.location.hash.substring(1);
    if (hash === 'signup') {
        in_or_up.value = 'up';
    }
});

// function login(){
    
// }

// function signup(){

// }

</script>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/api/login', {
          username: this.username,
          password: this.password,
        });
        console.log(response.data);
        // Handle successful login, e.g., redirect to another page
      } catch (error) {
        console.error(error.response.data.message);
      }
    },
    async signup() {
      try {
        const response = await axios.post('http://localhost:3000/api/signup', {
          username: this.username,
          password: this.password,
          email: this.email,
        });
        console.log(response.data);
        // Handle successful signup, e.g., redirect to another page
      } catch (error) {
        console.error(error.response.data.message);
      }
    },
  },
};
</script>
<template>
    <div style="display: flex; align-items:center; justify-content:center; height:99vh;" class="texture">
        <div class="login-box">
            <span style="color: var(--secondary-color); font-weight: bold; font-size: larger;">SQUASHEM</span>
            <div style="margin-bottom: 0.6rem;"></div>
            <form action="" method="post" style="display: flex; flex-direction:column;" v-if="in_or_up=='in'" @submit.prevent="login">
                <input class="standard-form-field" type="text" name="username" id="username" placeholder="Username" v-model="username" required/>
                <div style="margin-top: 0.3rem;"></div>
                <input class="standard-form-field" type="password" name="password" id="password" placeholder="Password" v-model="password" required/>
                <div class="standard-button" id="signin-submit-button">
                    <i class="uil uil-signin"></i>
                    <span @click="login"> Log In</span>
                </div>            
            </form>
            
            <form action="" method="post" style="display: flex; flex-direction:column;" v-if="in_or_up=='up'">
                <input class="standard-form-field" type="text" name="username" id="username" placeholder="Username" v-model="username" required/>
                <div style="margin-top: 0.3rem;"></div>
                <input class="standard-form-field" type="email" name="email" id="email" placeholder="Email" v-model="email" required/>
                <div style="margin-top: 0.3rem;"></div>
                <input class="standard-form-field" type="password" name="new-password" id="new-password" placeholder="New Password" v-model="password" required/>
                <div style="margin-top: 0.3rem;"></div>
                <input class="standard-form-field" type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" />
                <div class="standard-button" id="signin-submit-button">
                    <span @click="signup"> Sign Up</span>
                </div>            
            </form>
            
            <div style="margin-top: 0.5rem;"></div>
            
            <span style="font-size: medium; color: var(--secondary-color); text-align:center;" v-if="in_or_up=='in'">
                Don't have a Squashem account? 
                <span class="signup-now-button" @click="in_or_up='up'">Sign Up Now</span>
            </span>
            
            <span style="font-size: medium; color: var(--secondary-color); text-align:center;" v-if="in_or_up=='up'">
                Already have a Squashem account? 
                <span class="signup-now-button" @click="in_or_up='in'">Sign In</span>
            </span>
        </div>
    </div>
</template>
<style scoped>
.texture{
    background: var(--default-texture--background);
}
.login-box{
    min-height: min-content;
    height: 13rem;
    width: 13rem;
    background: rgba(255,255,255, 0.75);
    border-radius: 0.5rem;
    padding: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}
#signin-submit-button{
    margin-top: 0.5rem; 
    margin-bottom: 0.5rem;
    background: var(--secondary-color);
    color: var(--primary-color);
    font-size: large;
}
#signin-submit-button:hover{
    background-color: var(--primary-color);
    color: var(--secondary-color);
    transition: ease-in-out 0.2s;
}
#signin-submit-button:active{
    background-color: var(--secondary-color);
    color: var(--primary-color);
    transition: ease-in-out 0.2s;
}
.signup-now-button{
    color: var(--alert-color);
    font-weight: bold;
    font-size: medium;
    filter: brightness(0.7);
    cursor: pointer;
}
.signup-now-button:hover{
    filter: brightness(1.3);
    transition: ease-in-out 0.2s;
}
.signup-now-button:active{
    filter: brightness(0.7);
    transition: ease-in-out 0.2s;
}
</style>
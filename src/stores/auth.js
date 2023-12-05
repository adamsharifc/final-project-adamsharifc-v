import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isLoggedIn: false,
    user_id: null,
    user_email: null,
    user_name: null,
    user_username: null,
    current_bugID: null,
  }),
  actions: {
    login(user) { // Modify this line to accept a user parameter
      user = user.user;
      this.isLoggedIn = true;
      this.user_id = user._id;
      this.user_email = user.email;
      this.user_name = user.name;
      this.user_username = user.username;
      console.log("user_id: " + this.user_id);
      console.log("user_email: " + this.user_email);
      console.log("user_name: " + this.user_name);
      console.log("user_username: " + this.user_username);

      localStorage.setItem('auth', JSON.stringify(this.getState()));
    },
    logout() {
      this.isLoggedIn = false;
      this.user = null; // Add this line
      this.user_id = null;
      this.user_email = null;
      this.user_name = null;
      this.user_username = null;
      localStorage.removeItem('auth');
    },
    loadState() {
      const auth = localStorage.getItem('auth');
      if (auth) {
        const authData = JSON.parse(auth);
        this.isLoggedIn = authData.isLoggedIn;
        this.user_id = authData.user_id;
        this.user_email = authData.user_email;
        this.user_name = authData.user_name;
        this.user_username = authData.user_username;
      }
    },
    getState(){
      this.loadState();
      return {
        isLoggedIn: this.isLoggedIn,
        user_id: this.user_id,
        user_email: this.user_email,
        user_name: this.user_name,
        user_username: this.user_username,
      }
    },
    getName(){
      this.loadState();
      return this.user_name;
    },
    getUsername(){
      this.loadState();
      return this.user_username;
    },
    getIsLoggedIn(){
      this.loadState();
      return this.isLoggedIn;
    },
    setBugID(id){
      this.current_bugID = id;
    },
    getBugID(){
      return this.current_bugID;
    },
  },

});
import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isLoggedIn: false,
    user_id: null,
    user_email: null,
    user_name: null,
    user_username: null,
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
    },
    logout() {
      this.isLoggedIn = false;
      this.user = null; // Add this line
      this.user_id = null;
      this.user_email = null;
      this.user_name = null;
      this.user_username = null;
    },
    getState(){
      return {
        isLoggedIn: this.isLoggedIn,
        user_id: this.user_id,
        user_email: this.user_email,
        user_name: this.user_name,
        user_username: this.user_username,
      }
    }
  },

});
<script>
export default{
    data(){
        return{
            query: '',
        }
    },
    methods:{
        async submit(){
            try{
                console.log("I was clicked");
                console.log(this.query);
                this.query = '';
                const response = await axios.gett('http://final-project-adamsharifc-p.vercel.app/api/getQuery', {
                    query: this.query,
                    addedBy: this.$store.state.user.username,
                    bugId: currentpageI
                });
            } catch (error) {
                console.error(error.response.data.message);
            }
        },
    },
};
</script>


<template>
    <div class="container">
        <input class="bar" type="text" name="query" id="" placeholder="Find bugs here, or blame autocorrect" v-model="query">
        <div class="submit" @click="submit">
            <i class="uil uil-search"></i>
        </div>
    </div>
</template>
<style scoped>
.container{
    width: 550px;
    max-width: 33%;
    min-width: 550px;
    height: min-content;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-top: 0.5rem;
}
.bar{
    width:85%;
    font-size: large;
    border: none;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
    padding-left: 0.3rem;
    padding-right: 0.2rem;
    border: 3px solid var(--secondary-color);
    border-right: none;
    border-radius: 20rem 0 0 20rem;
    color: var(--secondary-color);
    font-weight: 400;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    caret-color: var(--secondary-color);
}
.bar:focus{
    outline: none;
}
.bar::placeholder{
    color: var(--secondary-color);
    font-size: large;
    font-style: italic;
}
.submit{
    font-size: large;   
    border: 3px solid var(--secondary-color);
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
    padding-right: 0.4rem;
    padding-left: 0.4rem;
    border-radius: 0 20rem 20rem 0;
    border-left: none;
    color: var(--primary-color);
    background-color: var(--secondary-color);
    position: relative;
}
.submit::before{
    content: "";
    position: absolute;
    top: 0;
    left: -8px;
    width: 15px;
    height: 100%;
    background-color: var(--secondary-color);
    transform: skewX(-20deg);
    cursor: default;
}
</style>
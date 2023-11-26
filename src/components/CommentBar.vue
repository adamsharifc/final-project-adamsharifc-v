<script setup>
</script>
<template>
    <div class="container">
        <input class="bar" type="text" name="comment" id="" placeholder="Comment here, but remember, keyboards can't swim...">
        <div class="submit">
            <i class="uil uil-message"></i>
        </div>
    </div>
</template>
<style scoped>
.container{
    width: 97%;
    height: min-content;
    display: flex;
    align-items: center;
    flex-direction: row;
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
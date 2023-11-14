<script setup>

</script>
<template>
    <div class="bug-feed-container">
        <div class="bug-table-container">
            <table class="bug-table">
                <thead>
                    <tr style="position: sticky; top: 0">
                        <th>Title</th>
                        <th>Priority</th>
                        <th>Tags</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in data" :key="index">
                        <td>{{item.title}}</td>
                        <td>{{item.priority}}</td>
                        <td>{{item.tags}}</td>
                        <td>None</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
.bug-feed-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 99%;
}
.bug-table{
    width: 99%;
    border-collapse: separate;
    border-spacing: 0;
}
.bug-table th{
    border-top: 0.02rem solid var(--primary-color);
    border-bottom: 0.02rem solid var(--primary-color);
    background: var(--secondary-color);
    color: var(--primary-color);
    font-weight: bold;
    font-size: large;
    padding: 0.25rem;
    text-align: left;
    position: sticky;
}
.bug-table td{
    border-bottom: 0.02rem solid var(--secondary-color);
    background: var(--main-color);
    color: var(--secondary-color);
    font-family: var(--primary-font);
    font-size: medium;
    font-weight: 500;
    padding: 0.25rem;
    text-align: left;
}
.bug-table th:first-child{
    border-top-left-radius: 0.4rem;
}
.bug-table th:last-child{
    border-top-right-radius: 0.4rem;
}
.bug-table tr{
    background-color: var(--main-color);
}
.bug-table td{
    padding: 0.25rem;
}

.bug-table-container{
    overflow: auto;
    height: 97vh;
    width: 100%;
    scrollbar-width: none;
}
.bug-table-container::-webkit-scrollbar {
    width: 0.2rem;
}

.bug-table-container::-webkit-scrollbar-track {
    border: 0.03rem solid var(--secondary-color);
    border-radius: 0.1rem;
}

.bug-table-container::-webkit-scrollbar-thumb {
    background-color: var(--secondary-color);
    border-radius: 0.2rem;
}

</style>
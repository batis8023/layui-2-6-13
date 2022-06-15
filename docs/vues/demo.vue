<template>
    <div class="hello">Hello {{ who }}</div>
</template>

<script>
module.exports = {
    data() {
        return {
            who: 'world'
        }
    },
    created() {
        console.log(store.state.count);
    },
    mounted() { },
}
</script>

<style>
.hello {
    background-color: #ffe;
}
</style>
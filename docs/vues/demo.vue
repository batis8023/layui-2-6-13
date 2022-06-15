<template>
    <div class="hello">Hello {{ who }}</div>
    <div><button type="button" @click="increment">demo</button></div>
</template>

<script>
module.exports = {
    data() {
        return {
            who: 'world'
        }
    },
    created() { },
    mounted() { },
    methods: {
        increment() {
            store.commit('increment');
            store.state.count;
        }
    }
}
</script>

<style>
.hello {
    background-color: #ffe;
}
</style>
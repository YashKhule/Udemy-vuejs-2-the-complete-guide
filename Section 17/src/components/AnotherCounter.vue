<template>
    <div>
        <button class="btn btn-primary" @click="increment(2)">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
        <button class="btn btn-primary" @click="asyncIncrement({incr:2,delay:500})">AsyncIncrement</button>
    </div>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex'
    export default {
        //methods: mapMutations(['increment', 'decrement'])
        methods:mapActions(['increment', 'decrement', 'asyncIncrement'])
        // {increment(){this.$store.dispatch('increment')}}
    }
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div class="control" v-when:click="didIt">click me</div>
                <input type="text" v-when:change="didIt" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            when: {
                bind(e,b,v) {
                    e.addEventListener(b.arg, b.value)
                }
            }
        },
        methods: {
            didIt(){
                console.log('did it')
            }
        }
    }
</script>

<style>
.control {
    cursor: pointer;
    user-select: none;
    margin: 0.3rem;
    padding: 0.3rem;
    background-color: #efefef;
    width: 10rem;
    border: solid thin #eee;
    border-radius: 0.3rem;
}
.control:hover {
    border-color: lightgreen;
}
</style>

<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" 
                    v-on:click="color_index=color_indices['app-blue']">Load Blue Template</button>
                <button class="btn btn-success" 
                    v-on:click="color_index=color_indices['app-green']">Load Green Template</button>
                <button class="btn btn-danger" 
                    v-on:click="color_index=color_indices['app-red']">Load Red Template</button>
                <hr>
                <component v-bind:is="color">
                    <div slot="red">red</div>
                    <div slot="green">green</div>
                    <div slot="blue">blue</div>
                </component>
                <!--<app-blue>blue</app-blue>
                <app-green>green</app-green>
                <app-red>red</app-red>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function () {
            return {
                color_index: 0, // would normally use npm install --save bimap but this is clear
                colors: ['app-red', 'app-green', 'app-blue'],
                color_indices: { 'app-red': 0, 'app-green': 1, 'app-blue': 2 }
            }
        },
        computed: {
            color: function () {
                return this.colors[this.color_index]
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>

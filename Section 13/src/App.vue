<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | obfuscate | to_star}}</p>
                <hr />>
                <input v-model="filterText" />
                <ul>
                    <li v-for="fruit in filteredFruit">{{fruit}}</li>
                </ul>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue'
    import { fruitMixin } from './fruitMixin'

    export default {
        data: function () {
            return {
                text: 'how to output and filter and mixin',
            }
        },
        filters: {
            obfuscate(value) {
                return value.replace(/./g, '•')
            }
        },
        components: {
            appList: List
        },
        mixins: [fruitMixin]
    }
</script>

<style>

</style>

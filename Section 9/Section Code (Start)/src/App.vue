<template>
    <div class="vue-container">
        <div class="row">
            <div class="col-xs-12">
               <!--<quote>
                   <h2 slot="title">The Quote</h2>
                   <p>{{ quotation }}</p>
               </quote>-->
               <keep-alive><!-- prevents destroying and recreadting the component -->
               <component v-bind:is="selected">
                   <h2 slot="title">The Quote</h2>
                   <p>{{ quotation }}</p>
               </component>
               </keep-alinve>
               <button v-on:click="selected = 'quote'">Quote</button>
               <button v-on:click="selected = 'author'">Author</button>
               <button v-on:click="selected = 'new'">New</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import New from './components/New.vue'

    export default {
        data: function () {
            return {
                quotation: 'Nothing shows unoriginal thought like quoting others.',
                selected: 'quote'
            }
        },
        components: {
            quote: Quote,
            author: Author,
            new: New,
        }    
    }
</script>

<style scoped>
    button { float: left; }
</style>


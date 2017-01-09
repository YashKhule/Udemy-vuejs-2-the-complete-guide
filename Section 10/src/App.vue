<template>
    <div class="container">
        <app-header v-bind:quoteCount="quotes.length" v-bind:maxQuotes="maxQuotes"></app-header>
        <new-quote v-on:quoteAdded="addNewQuote"></new-quote>
        <quote-grid v-bind:quotes="quotes" v-on:quoteDeleted="deleteQuote"></quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info lead"><strong>&#9432;</strong> Info: Click on a quote to delete it.</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue'
    import NewQuote from './components/NewQuote.vue'
    import Header from './components/Header.vue'

    export default {
        data: function () {
            return {
                quotes: [ 'patrón de prueba' ],
                maxQuotes: 10
            }
        },
        methods: {
            addNewQuote(quote) {
                if(this.quotes.length >= maxQuotes)
                    return alert('Please delete quotes first')
                this.quotes.push(quote)
            },
            deleteQuote(index){
                this.quotes.splice(index,1)
            }
        },
        components: {
            newQuote: NewQuote,
            quoteGrid: QuoteGrid,
            appHeader: Header
        }
    }
</script>

<style>
</style>

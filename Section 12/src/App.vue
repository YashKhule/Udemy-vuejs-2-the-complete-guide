<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'example'"></p>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <!--<p v-highlight:background="'red'">red text</p>-->
                <p v-highlight.delayed="'red'">red text</p>
                <p v-colorize="complexData">colorized text</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        directives: {
            data: function () {
                return {
                    complexData: { }
                }
            },
            colorize: {
                bind(el, binding, vnode) {
                }
            }
        }
    }
</script>

<style>

</style>

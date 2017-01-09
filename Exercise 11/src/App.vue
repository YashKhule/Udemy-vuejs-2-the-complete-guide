<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                {{ 'reverse' | reverse}}

<hr />
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                {{'Test' | append-length}}

<hr />
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <ol>
                    <li>{{reverse}}</li>
                    <li>{{appendLength}}</li>
                </ol>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import {appendLength} from './appendLength.mixin.js'

    export default {
        mixins: [appendLength],
        data: function() {
            return {
                text: 'reverse'
            }
        },
        computed: {
            reverse() {
                return this.text.split('').reverse().join('')
            },
            appendLength() {
                return `${this.text} (${this.text.length})`
            }
        },
        filters: {
            reverse(v) {
                return v.split('').reverse().join('')
            }
        }
    }
</script>

<style>
</style>

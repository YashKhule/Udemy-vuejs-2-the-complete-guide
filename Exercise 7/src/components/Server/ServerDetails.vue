<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ server_detail }} <button v-if="isLoaded" v-on:click="normalize">Normalize</button></p>
    </div>

</template>

<script>
    import { Events } from '../../main.js'

    export default {
        data: function() {
            return {
                id: undefined,
                status: undefined
            }
        },
        computed: {
            server_detail: function () {
                return this.isLoaded? 
                    `Server #${this.id} ${this.status}` : 
                    'Server Details are currently not updated'
            },
            isLoaded: function () {
                return (this.id || this.status)
            }
        },
        methods: {
            normalize() {
                this.status = 'Normal'
                Events.$emit('NORMALIZE', {
                    id: this.id,
                    status: 'Normal'
                })
            }
        },
        created() {
            let self = this
            Events.$on('SERVER_DETAIL', (server) => {
                self.id = server.id
                self.status = server.status
            })
        }
    }
</script>

<style>

</style>

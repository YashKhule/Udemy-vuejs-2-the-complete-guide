<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers">
                Server #{{ server.id }} {{ server.status }} <button v-on:click="detail(server)">manage</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { Events } from '../../main.js'

    export default {
        data: function () {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Less Normal'},
                    {id: 3, status: 'Kinda Wierd'},
                    {id: 4, status: 'Completely Bizarre'},
                ]
            }
        },
        methods: {
            detail (server) {
                Events.$emit('SERVER_DETAIL', server)
            }
        },
        created() {
            let self = this
            Events.$on('NORMALIZE', (server) => {
                self.servers.filter(s => s.id===server.id)
                    .map(s => s.status = server.status)
            })
        }
    }
</script>

<style>

</style>

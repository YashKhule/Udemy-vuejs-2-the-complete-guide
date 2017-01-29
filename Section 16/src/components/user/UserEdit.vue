<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <hr />
        <button class="btn btn-primary" v-on:click="confirmed = true">Confirm</button>
        <div style="height: 700px"></div>
        <p id="data">Some extra data</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                confirmed: false
            }
        },
        beforeRouteEnter (to, from, next) {
            next(c => c.confirmed = false)
        },
        beforeRouteLeave (to, from, next) {
            // this essentially must happen in the component
            if(this.confirmed || confirm('Are you sure?'))
                next()
            next(false)
        }
    }
</script>
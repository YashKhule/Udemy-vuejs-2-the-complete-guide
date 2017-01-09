<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username<input class="form-control" type="text" v-model="user.username"></label>
                </div>
                <div class="form-group">
                    <label>Mail<input class="form-control" type="text" v-model="user.email"></label>
                </div>
                <button class="btn btn-primary" v-on:click="submit">Submit</button>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                }
            }
        },
        methods: {
            submit() {
                //console.dir(this.user)
                this.$http.post(
                    'https://vuejs-http-414ca.firebaseio.com/user.json',
                    this.user)
                  .then((txr) => {
                    console.log(txr)
                  })
                  .then((txr) => {
                    console.error(txr)
                  })
            }
         }
    }
</script>

<style>
</style>

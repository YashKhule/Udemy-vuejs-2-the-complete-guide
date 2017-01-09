<template>
    <div class="container">
        <form>
            <div class="row" v-if="!exerciseTwo">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <fullname v-model="fullname"></fullname>
                    <div class="form-group">
                        <label for="mail">Mail</label>
                        <input v-model.lazy.trim="exerciseOne.mail"
                                type="text"
                                id="mail"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model.lazy="exerciseOne.password"
                                type="password"
                                id="password"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="Yes">
                        <input v-model="exerciseOne.storeData"
                                type="radio"
                                id="yesRadioOpt"
                                value="Yes"> Yes
                        </label>
                        <label for="No">
                        <input v-model="exerciseOne.storeData"
                                type="radio"
                                id="noRadioOpt"
                                value="No"> No
                    </label>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button v-on:click.prevent="submit"
                            class="btn btn-primary">Submit!
                    </button>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="exerciseTwo">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullname}}</p>
                        <p>Mail: {{exerciseOne.mail}}</p>
                        <p>Password: {{exerciseOne.password | obfuscate}}</p>
                        <p>Store in Database?: {{exerciseOne.storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue'

    export default {
        data: function () {
            return {
                exerciseOne: {
                    name: {
                        first: '',
                        last: '',
                        full: ''
                    },
                    mail: '',
                    password: '',
                    storeData: 'No'
                },
                exerciseTwo: false
            }
        },
        filters: {
            obfuscate(i){ return i.replace(/./g,'•') }
        },
        methods: {
            submit() {
                this.exerciseTwo = !this.exerciseTwo
            }
        },
        components: {
            fullname: FullName
        }
    }
</script>

<style>
</style>

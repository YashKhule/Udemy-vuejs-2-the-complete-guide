<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input 
                                type="text"
                                id="email"
                                class="form-control"
                                value="userData.email"
                                v-on:input="userData.email = $event.target.value">
                                <!-- was v-model.lazy.trim, without value and input -->
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model.lazy="userData.password"
                                type="password"
                                id="password"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input v-model.lazy.number="userData.age"
                                type="number"
                                id="age"
                                class="form-control">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea v-model="message"
                            id="message"
                            rows="5"
                            class="form-control"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input v-model="sendmail"
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input v-model="sendmail"
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input v-model="sex"
                                type="radio"
                                id="male"
                                value="Male"> Male
                    </label>
                    <label for="female">
                        <input v-model="sex"
                                type="radio"
                                id="female"
                                value="Female"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select v-model="priority"
                            id="priority"
                            class="form-control">
                        <option
                            v-for="priority in priorities" >{{ priority }}</option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-switch v-model="dataSwitch"></app-switch>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button v-on:click.prevent="submit"
                            class="btn btn-primary">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password | obfuscate }}</p>
                        <p>Age: {{userData.age}}</p>
                        <p style="white-space:pre">Message: {{message}}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in sendmail">{{item}}</li>
                        </ul>
                        <p>Sex: {{sex}}</p>
                        <p>Priority: {{ priority }}</p>
                        <p>Switched: {{ dataSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Switch from './Switch.vue'

    export default {
        data() {
            return {
                userData: {
                    email: '',
                    password: '',
                    age: 43
                },
                message: 'sample text',
                sendmail: [],
                sex: 'yes, please',
                priorities: ['High', 'Medium', 'Low'],
                priority: 'High',
                dataSwitch: true,
                isSubmitted: false
            }
        },
        filters: {
            obfuscate(i){ return i.replace(/./g,'*') }
        },
        components: {
            appSwitch: Switch
        },
        methods: {
            submit() {
                this.isSubmitted = true
            }
        }
    }
</script>

<style>

</style>

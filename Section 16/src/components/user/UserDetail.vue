<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link
                tag="button"
                :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 } }"
                class="btn btn-primary">Edit User</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en',
                        q: 100 //?
                    },
                    hash: '#data' //initial scroll point
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            console.log('inside component beforeRouteEnter event')
            // this.link will not be available at this point yet.
            // access with:
            // next (c => c.link)
            let userCanNavigateHere = true
            if(userCanNavigateHere)
                next()
            next(false)
        }
    }
</script>
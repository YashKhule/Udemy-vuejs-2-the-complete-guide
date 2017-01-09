new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alert: function () {
                alert('click')
            },
            setText: function (e) {
                this.value = e.target.value
            }
        }
    });
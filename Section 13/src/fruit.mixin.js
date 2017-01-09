export const fruitMixin = {
    data: function () {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruit() {
            let rexp = new RegExp(this.filterText)
            return this.fruits.filter(f => rexp.test(f))
        }
    }
}
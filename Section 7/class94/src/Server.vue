<template>
  <div>
    <p>status: {{ status }}</p>
    <button v-on:click="changeStatus">change status</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        status: 'critical'
      }
    },
    methods: {
      changeStatus() {
        this.status = 'normal'
      }
    }
  }
</script>
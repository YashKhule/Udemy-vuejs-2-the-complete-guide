<template>
  <div>
    <div class="form-group">
      <label for="age">First Name</label>
      <input v-model.lazy="first"
              type="text"
              id="firstName"
              class="form-control">
    </div>
    <div class="form-group">
      <label for="age">Last Name</label>
      <input v-model.lazy="last"
              type="textr"
              id="lastName"
              class="form-control">
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        first: '',
        last: ''
      }
    },
    computed: {
      full() {
        let full = this.first + this.last
        this.$emit('fullname', full)
        return full
      }
    }
  }
</script>

<style></style>
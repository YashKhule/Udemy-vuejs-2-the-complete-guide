<template>
  <div id="container" class="outer container">
    <h1>Trade of View your Portfolio</h1>
    <h6>You may Save & Load your Data</h6>
    <h6>Click 'End day' to begin a new day</h6>
    <hr />
    <p>Your Funds: {{funds | currency}}
  </div>
</template>

<script>
  export default {
    computed: {
      funds() { return this.$store.getters.funds }
    }
  }
</script>
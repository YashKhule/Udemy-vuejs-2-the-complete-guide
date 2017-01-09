<template>
  <div class="vue-container">
    <div class="title">
      <h2><slot name="title"></slot></h2>
      <i><slot name="subtitle">default content</slot></i>
    </div>
    <p><slot>// everything not in a named slot will go to a 'default' slot</slot></p>
  </div>
</template>

<script>
  export default {
    /*props: ['quote'] */
  }
</script>

<style scoped>
  div {
    border: 1px solid lightgray;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }
  h2 {
    color: green;
  }
</style>
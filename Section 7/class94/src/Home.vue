<template>
  <div>
    <server v-for="server in 5" />
  </div>
</template>

<script>
  import Servers from './Server.vue'

  export default {
    components: {
      'server': Servers
    }
  }
</script>
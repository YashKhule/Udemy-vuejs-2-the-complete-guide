<template>
  <div>
    <div class="col-xs-12 col-sm-6">
      <servers-template />      
    </div>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
    </div>
  </div>
</template>

<script>
  import Servers from './Servers.vue'

  export default {
    components: { 'servers-template': Servers }
  }
</script>
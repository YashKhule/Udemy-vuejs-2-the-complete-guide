<template>
  <li class="list-group-item">
      Server #{{ index }}
  </li>
</template>

<script>export default {
  props: ['server-index'],
  data: function () {
    return {
      index: this.serverIndex
    }
  }
}</script>
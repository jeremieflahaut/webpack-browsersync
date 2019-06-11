<template>
  <div
    class="full-width center-content"
  >
    <count-component />
    <async-component />
    <scroll-component />

  </div>
</template>
<script>
import CountComponent from './components/CountComponent.vue'
import AsyncComponent from './components/AsyncComponent.vue'
import ScrollComponent from './components/ScrollComponent.vue'
export default {
  components: {
    CountComponent,
    AsyncComponent,
    ScrollComponent,
  }
}
</script>
<style>
</style>
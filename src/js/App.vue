<template>
  <div
    class="full-width center-content"
  >
    <count-component />
    <async-component />

  </div>
</template>
<script>
import CountComponent from './components/CountComponent.vue'
import AsyncComponent from './components/AsyncComponent.vue'

export default {
  components: {
    CountComponent,
    AsyncComponent
  }
}
</script>
<style>
</style>

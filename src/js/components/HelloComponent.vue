<template>
  <h1>Hello {{ name }}!</h1>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
h1 {
    text-align: center;
    color: red
}
</style>

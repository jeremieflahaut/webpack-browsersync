<template>
  <div>
    <button @click="fetchResults">
      Users
    </button>
    <ul>
      <li v-for="user in users">
        {{ user.id }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      users: null
    }
  },

  methods: {
    fetchResults () {
      this.$http.get('https://jsonplaceholder.typicode.com/users').then(response => {
        this.users = response.body
      })
    }
  }
}
</script>

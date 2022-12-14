<template>
<div>
  <button @click="fetchData">To Judy's Album</button>
</div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    async fetchData () {
      await this.$store.dispatch('getData', 960818)
      if(this.$store.state.login === true) {
        this.$router.push('/forJudy')
      }
    }
  }
}
</script>
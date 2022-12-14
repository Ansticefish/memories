<template>
<div>
  <button @click="fetchData">To Judy's Album</button>
</div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    fetchData () {
      console.log('fetch data')
      this.$store.dispatch('getData')
      this.$router.push('/forJudy')
    }
  }
}
</script>
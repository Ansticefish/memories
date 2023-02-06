<template>
  <div>
    <Card :icon="icon" class="card">
      {{ content }}
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name: 'SallyCard',
  components: {
    Card,
  },
  data() {
    return {
      icon: require('../assets/sally.png'),
      content: this.$store.state.cards.sally
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  // add line breaks
  white-space: pre-line;
}
</style>
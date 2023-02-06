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
  name: 'FishCard',
  components: {
    Card,
  },
  data () {
    return {
      icon: require('../assets/fish.png'),
      content: this.$store.state.cards.fish
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  // add line breaks
  white-space: pre-line;
}
</style>





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
  name: 'KikiCard',
  components: {
    Card,
  },
  data () {
    return {
      icon: require('../assets/kiki.png'),
      content: this.$store.state.cards.kiki
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
<template>
  <div>
    <Album :photos="photos" />
  </div>
</template>

<script>
import Album from '../components/AlbumTest'

export default {
  name: 'MountainAlbum',
  components: {
    Album,
  },
  data() {
    return {
      photos: this.$store.state.mountainAlbum
    }
  }
}
</script>
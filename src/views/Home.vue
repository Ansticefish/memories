<template>
  <div class="wrapper">
    <nav class="wrapper__nav" v-if="open">
      <router-link :to="{ name: 'sea'}">
        <img src="../assets/nav-sea.png" alt="">
      </router-link>
      <router-link :to="{ name: 'mountain'}">
        <img src="../assets/nav-mount.png" alt="">
      </router-link>
      <router-link :to="{ name: 'badminton'}">
        <img src="../assets/nav-badmin.png" alt="">
      </router-link>
      <router-link :to="{ name: 'celebration'}">
        <img src="../assets/nav-cele.png" alt="">
      </router-link>
    </nav>
    <div class="wrapper__painting">
      <img class="wrapper__painting__image" :src="painting" @click="toAlbum">
      <div class="wrapper__painting__title">
        <p>
          {{ paintingTitle }}
        </p>
      </div>
    </div>
    <div class="wrapper__line">
    </div>
    <div class="wrapper__instruction">
      <div class="wrapper__instruction__caption">
        <h3> {{ instruction.title }} </h3>
        <p> {{ status === 'celebration'? instruction.content2 : instruction.content1 }}</p>
      </div>
      <div class="wrapper__instruction__middle"></div>
      <div class="wrapper__instruction__bottom"></div>
    </div>
    <div class="wrapper__card" v-if="status === 'celebration' ">
      <router-link :to="{ name: 'SallyCard'}">
        <img src="../assets/sally.png" alt="">
      </router-link>
      <router-link :to="{ name: 'KikiCard'}">
        <img src="../assets/kiki.png" alt="">
      </router-link>
      <router-link :to="{ name: 'FishCard'}">
        <img src="../assets/fish.png" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
import paintingOne from '../assets/sea.jpg'
import paintingTwo from '../assets/mountain.jpg'
import paintingThree from '../assets/badminton.jpg'
import finalPainting from '../assets/home.jpg'

export default {
  name: 'Home',
  data () {
    return {
      paintingTitle: '我們的回憶',
      instruction: {
        title: '畫作觀賞指南',
        content1: '這是由四段回憶組成的畫作。點擊畫作進入回憶，觀賞完回憶後，圖畫便會出現！',
        content2: '看完這些照片，是不是又陷入回憶中了呢？接下來請點擊玩偶看卡片，也可以點擊圖畫再重新回顧相簿喔！'
      },
      open: false,
    }
  },
  computed: {
    status() {
      return this.$store.state.status
    },
    painting () {
      return this.$store.state.painting
    }
  },
  methods: {
    toAlbum () {
      switch (this.status) {
        case 'initial':
          console.log('initial', this.status)
          this.$router.push({ name: 'sea'})
          this.$store.commit('setStatus', 'sea')
          this.$store.commit('setPainting', paintingOne)
          break;
        case 'sea':
          console.log('sea', this.status)
          this.$router.push({ name: 'mountain' })
          this.$store.commit('setStatus', 'mountain')
          this.$store.commit('setPainting', paintingTwo)
          break;
        case 'mountain':
          console.log('mountain', this.status)
          this.$router.push({ name: 'badminton' })
          this.$store.commit('setStatus', 'badminton')
          this.$store.commit('setPainting', paintingThree)
          break;
        case 'badminton':
          console.log('badminton', this.status)
          this.$router.push({ name: 'celebration' })
          this.$store.commit('setStatus', 'celebration')
          this.$store.commit('setPainting', finalPainting)
          break;
        case 'celebration':
          this.open = !this.open
      }
    }
  }
}

</script>

<style lang="scss" scoped>

$painting-border: rgb(148, 134, 134);
$title-bg: rgb(174, 184, 186);
$title-color: rgb(245, 239, 239);
$instruction-color: rgb(203, 185, 185);
$instruction-bg: rgb(207, 202, 202);
$instruction-font-color: rgb(141, 106, 106);

.wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
}

nav {
  position: absolute;
  left:0;
  height: 15vh;
  width: 100%;
  z-index: 999;
  background-color: rgb(202, 200, 195, 0.3);
  display: flex;
  justify-content: space-evenly;
  & img {
    height: 90%;
    &:hover {
      opacity: 0.6;
    }
  }
}

.wrapper__painting {
  margin: 0 auto;
  width: 80%;
  height: fit-content;
  &__image {
    margin: 50px auto;
    width: 80%;
    aspect-ratio: 3/2;
    border: 10px solid $painting-border;
    &:hover {
      cursor: pointer;
    }
  }

  &__title {
    margin-top: -10px;
    margin-left: 80%;
    background-color: $title-bg;
    width: fit-content;
    min-width: 100px;
    p {
      margin: 10px;
      color: $title-color;
    }
  }
}

.wrapper__line {
  margin-top: 50px;
  width: 100%;
  height: 10px;
  background-image: url(../assets/warning-line.png);
}

.wrapper__instruction {
  position: absolute;
  bottom: 30px;
  width: 50%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__caption {
    width: 70%;
    height: fit-content;
    border: 5px solid $instruction-color;
    border-radius: 5px;
    background-color: $instruction-bg;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      margin-bottom: 0;
      color: $instruction-font-color;
    }
    p {
      margin: 10px;
      color: $instruction-font-color;
    }
  }
  &__middle {
    height: 100px;
    width: 15px;
    background-color: $instruction-color;
  }
  &__bottom {
    width: 140px;
    height: 40px;
    background-color: $instruction-color;
    border-radius: 50%;
  }
}

.wrapper__card {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50vw;
  max-width: 500px;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  & a {
    width: 30%;
    height: 100%;
    & img {
      width: 100%;
    }
  }
}

</style>
<template>
  <div class="wrapper">
    <div class="wrapper__left">
      <div class="wrapper__left__inner">
        <img class="wrapper__left__inner__img" :src="photosShown[0].img" alt="">
        <div class="wrapper__left__inner__caption">
          {{ photosShown[0].caption}}
        </div>
        <img class="wrapper__left__inner__img" :src="photosShown[1].img" alt="">
        <div class="wrapper__left__inner__caption">
          {{ photosShown[1].caption}}
        </div>
        <img v-if="page !== 1" @click="toPrevious" class="wrapper__left__inner__button"
          src="../assets/turn-page-left.png" alt="">
      </div>
    </div>
    <div class="wrapper__middle"></div>
    <div class="wrapper__right">
      <div class="wrapper__right__inner">
        <img class="wrapper__right__inner__img" :src="photosShown[2].img" alt="">
        <div class="wrapper__right__inner__caption">{{ photosShown[2].caption }}</div>
        <img class="wrapper__right__inner__img" :src="photosShown[3].img" alt="">
        <div class="wrapper__right__inner__caption">{{ photosShown[3].caption}}</div>
        <img v-if="page !== photos.length" @click="toNext" class="wrapper__right__inner__button"
          src="../assets/turn-page-right.png" alt="">
      </div>
      <router-link v-if="page === photos.length" class="wrapper__right__link" to="/">
        <div class="wrapper__right__link__btn">
          Back Home
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Album',
  props: {
    photos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      page: 1,
      photosShown: this.photos[0]
    }
  },
  methods: {
    toNext () {
      this.page += 1
      this.photosShown = this.photos[this.page - 1]
    },
    toPrevious () {
      this.page -= 1
      this.photosShown = this.photos[this.page - 1]
    }
  }
}
</script>

<style lang="scss" scoped>





%background-img {
  background-size: contain;
  background-repeat: no-repeat;
}

%img {
  width: 80%;
  max-height: 50%;
  object-fit: cover;
}

%caption {
  margin-top: 5px;
  padding: 5px;
  width: fit-content;
  background-color: rgb(212, 236, 236);
  color: rgb(130, 151, 163);
}

.wrapper {
  margin: 30px auto;
  width: 90vw;
  height: 90vh;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.2fr 0.5fr 1fr;
  &__left {
    grid-area: 1/1/2/4;
    border: 5px solid rgb(202, 112, 100);
    border-right: none;
    border-radius: 30px 0 0 30px;
    background-image: url(../assets/album-bg.jpg);
    &__inner {
      position: relative;
      margin-top: 15px;
      width: 95%;
      height: 95%;
      background-image: url(../assets/left-page.png);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &__img {
        margin-top: 6%;
        @extend %img;
      }
      &__caption {
        @extend %caption;
      }
      &__button {
        position: absolute;
        bottom: 0;
        left: 15px;
        width: 15%;
        cursor: pointer;
      }
    }
  }
  &__middle {
    grid-area: 1/3/2/5;
    @extend %background-img;
    background-image: url(../assets/album-bg-middle.png);
    z-index: 1;
  }
  &__right {
    position: relative;
    grid-area: 1/3/2/6;
    border: 5px solid rgb(202, 112, 100);
    border-left: none;
    border-radius: 0 30px 30px 0;
    background-image: url(../assets/album-bg.jpg);
    &__inner {
      @extend .wrapper__left__inner;
      background-image: url(../assets/right-page.png);
      align-items: flex-start;
      justify-content: center;
      &__img {
        margin-top: 5%;
        margin-left: 15%;
        @extend %img;
      }
      &__caption {
        @extend %caption;
        align-self: center;
        margin-left: 50px;
      }
      &__button {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 15%;
        cursor: pointer;
      }
    }
    &__link__btn {
      position: absolute;
      bottom: 15px;
      right: 15px;
      width: 15%;
      height: 3%;
      text-align: center;
      background-color:antiquewhite;
    }
  }
}


</style>
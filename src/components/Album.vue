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

%img {
  width: 80%;
  max-height: 380px;
  object-fit: cover;
  border-radius: 13% 0;
}

%caption {
  margin-top: -5px;
  padding: 5px;
  width: fit-content;
  max-width: 70%;
  background-color: rgb(212, 236, 236);
  color: rgb(130, 151, 163);
}

.wrapper {
  margin: 30px auto;
  width: 95vw;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1.5fr 1px 1.5fr;
  &__left {
    grid-area: 1/1/2/2;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(../assets/album-bg-left.png);
    padding: 40px 1px;
    padding-left: 50px; //push inner pages to center
    &__inner {
      position: relative;
      padding: 5% 0;
      width: 100%;
      height: 95%;
      background-size: cover;
      background-image: url(../assets/left-page.png);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &__img {
        margin-top: 3%;
        @extend %img;
      }
      &__caption {
        @extend %caption;
      }
      &__button {
        position: absolute;
        bottom: 5px;
        left: 0;
        width: 15%;
        cursor: pointer;
      }
    }
  }
  &__middle {
    grid-area: 1/2/2/3;
  }
  &__right {
    position: relative;
    grid-area: 1/3/2/4;
    @extend .wrapper__left;
    background-image: url(../assets/album-bg-right.png);
    background-position: right 3px;
    padding-left: 1px;
    padding-right: 50px;
    &__inner {
      @extend .wrapper__left__inner;
      background-image: url(../assets/right-page.png);
      &__img {
        @extend .wrapper__left__inner__img;
        border-radius: 0 13%;
      }
      &__caption {
        @extend .wrapper__left__inner__caption;
      }
      &__button {
        @extend .wrapper__left__inner__button;
        left: auto;
        right: 0;
      }
    }
    &__link__btn {
      position: absolute;
      bottom: 30px;
      right: 15px;
      width: fit-content;
      height: 3%;
      padding: 5px;
      text-align: center;
      background-color:antiquewhite;
    }
  }
}


</style>
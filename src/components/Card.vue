<template>
  <div class="wrapper">
    <div class="wrapper__card">
      <slot></slot>
      <router-link to="/">
        Back Home
      </router-link>
    </div>
    <img :src="icon" alt="">
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}

</script>

<style lang="scss" scoped>




.wrapper {
  position: relative;
  width: 100vw;
  height: 80vh;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  &__card {
    position: relative;
    width: fit-content;
    max-width: 50vw;
    height: fit-content;
    background-image: url(../assets/card-bg.png);
    background-size: contain;
    padding: 5%;
    color: rgb(92, 125, 167);
    border-top: 15px solid rgb(92, 125, 167);
    border-bottom: 15px solid rgb(92, 125, 167);
    & p {
      text-indent: 2em;
    }
    & a {
      position: absolute;
      bottom: -10px;
      right: 5px;
      padding: 5px 15px;
      background-color: rgb(197, 216, 241);
      text-decoration: none;
      border-radius: 15px;
    }
  }
  & img {
    width: 20%;
    align-self: flex-end;
  }
 
}

</style>
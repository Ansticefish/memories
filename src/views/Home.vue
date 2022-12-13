<template>
  <div class="wrapper">
    <nav class="wrapper__nav" v-if="status === 'celebration' && open">
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
const mockData = {
  home:
  {
    step0: { status: "initial", painting: "https://bnz06pap004files.storage.live.com/y4mBlLS-evahbHCnlBiOskoYBkrC4BewYNbIHxSrkYu8ixz38TKpuMkAShPLNB2RtaRoap4mQlhapVxbat2hZ2Dexli8nQlyKeigfAEMBu79s7ED5uPG0vDaprWn6TjLFl8dExS1kUFwmUR_AZgL99rUKXqTi8cUsvY60HPfZCWj2MCUNfEvW4OiK4IN0D3qqxs?width=305&height=660&cropmode=none", paintingTitle: "海的回憶" },
    step1: { status: "sea", painting: "https://bnz06pap004files.storage.live.com/y4mai-j1nw2OE_0V-lKLi4EeSL3VhVwJgY7Qhcaq_krHE9thxK85xH41_4a-IdIH2VBEfUwHbUnPAn6U3OONJ4V6USZge8F5q-ONSmnORxmtBBHOkwfFm1M6Cvj2Wm1GsUiayH_uyOL4c2T-3oY0lFnRBNsisSiRrrMiXyqFK2w3rxna89a7EExjmXUrG_79o0q?width=660&height=469&cropmode=none", paintingTitle: "山的回憶" },
    step2: { status: "mountain", painting: "https://bnz06pap004files.storage.live.com/y4mTbpbE02WK3ie8aSVDCUBc7l-LH1LbUPRQB3yTL86kA-RmgtJK1_pQYa00U5eZIps0QlcDf0b0-keK82xOrWi23ApavbMWCT25fp53ZPmeTaWqDZMazZjz4hru42GOqwJ2mMhdImtvqKNoizSeFnNFVYoK_rGICJtvpYWunf6z8yPj7xpalkj0B2It4Zov6ao?width=660&height=469&cropmode=none", paintingTitle: "羽球的回憶" },
    step3: { status: "badminton", painting: "https://bnz06pap004files.storage.live.com/y4mJL8IZmqtiYDQNbtERvaSPUo49_ri5DkLxSfykho27cq7HDn_B3Ep89D6KTL-AmPzUzOAuGVxiCLWnNfjWEF8-2Vz1FunViDRVj0DwvjmmRmBF4jFm57Yj0W4gd1F96A0SJ_jdIdsiTvJXTFpY3LTSaaDK2uCdWHmIKINdMyC-XP5uYbeSd7eI3J-0EtIskrZ?width=660&height=469&cropmode=none", paintingTitle: "慶祝的回憶" }, step4: { status: "celebration", painting: "https://bnz06pap004files.storage.live.com/y4mT1PINzzsbK3aX5EEU9btnzvkG1iCcFnTbrljYITevd9c9NL8g1wG0jopAGXw1sRc90WdqAwpEOZqVCOJ_zWBUOE1tqPv11FlzCB2sMxYS3v2fm5bv4xKlQCInzYzllOR3rHFHhwMjvF7zADL-hgvG8rPC8o9Qob_EUjmUH5u-5tb3fjQYWCeLiU-Lv8urxOr?width=660&height=469&cropmode=none", paintingTitle: "我們的回憶" }
  }
}

export default {
  name: 'Home',
  data () {
    return {
      instruction: {
        title: '畫作觀賞指南',
        content1: '這是由四段回憶組成的畫作。點擊畫作進入回憶，觀賞完回憶後，圖畫便會出現！',
        content2: '看完這些照片，是不是又陷入回憶中了呢？接下來請點擊玩偶看卡片，也可以點擊圖畫再重新回顧相簿喔！'
      },
      open: true,
    }
  },
  computed: {
    status() {
      return this.$store.state.home.status
    },
    paintingTitle () {
      return this.$store.state.home.paintingTitle
    },
    painting () {
      return this.$store.state.home.painting
    }
  },
  methods: {
    toAlbum () {
      switch (this.status) {
        case 'initial':
          this.$router.push({ name: 'sea'})
          this.$store.commit('setHome', mockData.home.step1)
          break;
        case 'sea':
          this.$router.push({ name: 'mountain' })
          this.$store.commit('setHome', mockData.home.step2)
          break;
        case 'mountain':
          this.$router.push({ name: 'badminton' })
          this.$store.commit('setHome', mockData.home.step3)
          break;
        case 'badminton':
          this.$router.push({ name: 'celebration' })
          this.$store.commit('setHome', mockData.home.step4)
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
    text-align: center;
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
<template>
  <div class="background" v-if="!closePopup">
    <div class="popup"
      @mouseenter="() => this.show = true" 
      @mousemove="candleMove($event)"
      @mouseleave="() => this.show = false"
    >
      <h1>Memories</h1>
      <div class="content">
        <p>
        有人說：「當你再也無法在腦海中看見某些人、某段回憶時，那回憶中的人事物就會永遠消失。」於是人們把回憶封印起來，儲存在這裡。
        </p>
        <p>
        在腦海中想著那段回憶，或是帶領你來到這裡的人，再將那由6個神奇的數字組成的暗號輸入牆中，在牆消失的那一刻你就會回到過去，與停留在那瞬間的人、事、物重逢。 
        </p>
        <p class="tip">
        小提示：點擊火柴盒，就可以選擇想進入的回憶喔！
        </p>
      </div>
      <div class="btn" @click="() => this.closePopup = true">
        開始
      </div>
      <div class="bottom">
        <div class="hint" @click="() => this.showHint = !this.showHint">
          若不知道暗號請按此~
        </div>
        <div class="extension" v-if="showHint">
          可輸入123456進入sample回憶，或<a href="mailto:ansticefish0106@gmail.com?subject=Unable to log in">寄信</a>聯絡我們！
        </div>
      </div>
      <div class="filter" v-if="!show"></div>
    </div>
    <img src="../assets/candle.png" alt="" class="candle" ref="candle" v-if="show">
  </div>
</template>

<script>
export default {
  name: 'Popup',
  data () {
    return {
      show: false,
      closePopup: false,
      showHint: false
    }
  },
  methods: {
    candleMove (e) {
      // this.$refs.candle.style.left = e.clientX+ 'px'
      // this.$refs.candle.style.top = e.clientY + 'px'
      // should be fixed
      return e.target
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  inset: 0;
  background: rgba(32, 19, 1, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.popup {
  position: relative;
  width: 60vw;
  max-width: 500px;
  height: fit-content;
  padding: 1vw;
  color: white;
  text-align: center;
  background: #8E7D62;
  z-index: 100;
  .content {
    width: 80%;
    margin: 0 auto;
    .tip {
      color: rgb(231, 218, 40);
      font-size: 0.9rem;
      text-align-last: justify;
    }
  }
  .btn {
    position: relative;
    width: fit-content;
    height: fit-content;
    margin: 0 auto;
    margin-bottom: 15px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.5s ease-in;
    &:before {
      content: '';
      position: absolute;
      bottom: 5px;
      width: 100%;
      height: 25%;
      background: #645327;
      z-index: -1;
      transition: all 0.2s ease-in;
    }
    &:hover {
      transform: translateY(-10px);
      background: rgb(24, 23, 23);
      &:before {
        background: rgb(216, 162, 162);
        transform: translateY(8px) rotate(5deg);
      }
    }
  }
  .bottom {
    margin: -1vw;
    padding: 3px;
    background: #978466;
    .hint {
      margin-bottom: 5px;
      color: #3E3A3A;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.5s ease-in;
      &:hover {
        letter-spacing: 0.2rem;
        opacity: 0.8;
      }
    }
    .extension {
      letter-spacing: 0.2rem;
      font-size: 0.9rem;
      a {
        color: white;
        transition: all 0.2s ease-in;
        &:hover {
          color: rgb(216, 162, 162);
        }
      }
    }
  }
  .filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(327.54deg, rgba(0, 0, 0, 0.8) -62.42%, rgba(149, 0, 0, 0) 91.58%);
  }
}

.candle {
  position: absolute;
  top: -100%;
  z-index: 200;
}
</style>
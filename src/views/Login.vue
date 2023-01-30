<template>
<div class="container">
  <!-- panel for password-->
  <div :class="['wall', 'password', {'clicked': matchboxClicked}]">
    <div class="row row1">
      <div v-for="n in 8" class="brick" :key="n"></div>
    </div>
    <!-- rows with numbers -->
    <div v-for="group, i in rows" 
    :class="['row', `row${i + 2}`]" 
    :key="i">
      <div v-for="n, index in group" 
      :class="['brick', `num-${n}`]" 
      :key="index" 
      :style="n === -1? '': bricksStyle[n-1]"
      @click="enterCode(n)"
      >
      {{ n === -1? '': n}}
      </div>
    </div>
    <div class="row row6">
      <div v-for="n in 7" 
      class="brick" 
      :key="n">
      </div>
    </div>
  </div>
  <!-- panel for rooms -->
  <div :class="['wall', 'rooms', {'clicked': matchboxClicked}]">
    <div 
      :class="['row', {'row-odd' : n % 2 === 1}, 
      { 'row-even': n % 2 === 0}]" 
      v-for="n in 6" 
      :key="n">
      <div 
        class="brick" 
        v-for="n in 8" 
        :key="n">
      </div>
    </div>
  </div>
  <div class="buttons">
    <Candle class="candle"/>
    <div 
      :class="['matchbox', {'clicked': matchboxClicked}]"
      @click="selectRoom" >
      <img 
        src="../assets/matchbox-layer1.png" alt="matchbox" class="layer1">
      <img 
        src="../assets/matchbox-layer2.png" alt="matchbox" class="layer2">
    </div>
    <div class="paper">
      <div 
      class="background">
      </div>
      <p class="code"> 
        {{ code }}
      </p>
      <div 
      class="filter">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Candle from '../components/Candle.vue'

export default {
  name: 'Login',
  components: {
    Candle,
  }, 
  data () {
    return {
      rows: [
        [-1, -1, 1, 2, 3, -1, -1],
        [-1, -1, -1, 4, 5, -1, -1, -1],
        [-1, -1, 6, 7, 8, -1, -1],
        [-1, -1, -1, 9, 0, -1, -1, -1],
      ],
      code: '',
      bricksStyle: [
        '', '', '', '', '', '', '', '', ''
      ],
      bricksMove: [
        '', '', '', '', '', '', '', '', ''
      ],
      matchboxClicked: false
    }
  },
  methods: {
    async fetchData (code) {
      await this.$store.dispatch('getData', Number(code))
      if(this.$store.state.login === true) {
        this.$router.push('/forJudy')
      } else {
        this.code = ''
        this.resetBricks()
        // add error message
        console.log('You enter the wrong code!')
      }
    },
    enterCode(n) {
      if (n === -1) return
      this.code = this.code + n
      // change the appearance of clicked bricks
      if (this.bricksMove[n - 1]) {
        this.bricksMove[n-1] -= 2
        this.$set(this.bricksStyle, n - 1, this.setStyle(this.bricksMove[n - 1], '#a8245b'))
      } else {
        this.$set(this.bricksStyle, n - 1, this.setStyle(-2, '#a8245b'))
        this.bricksMove[n-1] = -2
      } 
      if(this.code.length === 6) {
        this.fetchData(this.code)
      }
    },
    setStyle (x, bg) {
      return `transform: translateX(${x}vw) ; background: ${bg}`
    },
    resetBricks () {
      for (let i = -1; i < this.bricksMove.length; i++) {
        this.$set(this.bricksStyle, i, '')
        this.bricksMove[i] = ''
      }
    },
    selectRoom () {
      this.matchboxClicked = !this.matchboxClicked
    }
  }
}
</script>


<style lang="scss" scoped>
.wall {
  width: 100vw;
  margin: 10vh auto 0;
  overflow: hidden;
  .row {
    display: flex;
    width: fit-content;
    perspective: 500px;
      .brick {
      width: 15vw;
      height: 5vh;
      margin: 0.1vw;
      text-align: center;
      background-color: #4E9797;
      box-shadow: 9px 4px 12px rgba(0, 0, 0, 0.2);
      transform-style: preserve-3d;
      color: #e3f1f1;
      transition: all 0.8s ease-in-out;
    }
    // set up hover effect for input panel
    [ class*="num" ]:not(.num--1):hover {
      font-size: 1.5rem;
      background-color: #438181;
      box-shadow: 4px 10px 6px rgba(0, 0, 0, 0.1);
      transform: translateZ(3vw) ;
      transform-origin: left;
      cursor: pointer;
      z-index: 5;
    }
  }
  .row1, .row3, .row5, .row-odd {
    margin-left: -10vw;
  }
   &.password {
    transition: transform 1s ease-in-out, width 1s 2s;
    &.clicked {
      width: 0;
      transition: width 1s;
    }
  }
  &.rooms {
    position: relative;
    top: -41vh;
    transform: rotateY(90deg);
    transition: transform 3s ease-in-out;
    &.clicked {
      transform: rotateY(-180deg);
    }
    & .brick {
      background: #957676;
    }
  }
}
.buttons {
  height: fit-content;
  margin-top: -45vh;
  display: flex;
  align-items: flex-end;
  .candle {
    width: 50vw;
    min-width: 300px;
    max-width: 500px;
    margin-right: -22vw;
  }
  .matchbox {
    position: relative;
    width: 30vw;
    max-width: 250px;
    z-index: 1;
    &:hover, &.clicked {
      cursor: pointer;
      & .layer2 {
        transform: translate(35px, 8px);
      }
    }
    .layer1, .layer2 {
      width: 100%;
      transition: all 1s;
    }
    .layer1 {
      position: absolute;
      top: -6%;
      left: -18%;
      z-index: 1;
    }
  }
  .paper {
    width: 35vw;
    height: 20vw;
    max-width: 400px;
    max-height: 250px;
    margin-left: -5vw;
    transform: rotate(9.47deg);
    display: flex;
    align-items: center;
    justify-content: center;
    .background, .filter{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #8E7D62;
    }
    .code {
      position: relative;
      color: #ffffff;
      font-size: 1.5rem;
      letter-spacing: 0.8rem;
    }
    .filter {
      background: linear-gradient(269.8deg, rgba(0, 0, 0, 0.8) -25.26%, rgba(149, 0, 0, 0) 103.49%);
    }
  }
}
</style>
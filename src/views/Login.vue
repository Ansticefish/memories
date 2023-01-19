<template>
<div class="container">
  <div class="wall">
    <div class="row row1">
      <div v-for="n in 6" class="brick" :key="n"></div>
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
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      rows: [
        [-1, -1, 1, 2, 3, -1, -1],
        [-1, -1, 4, 5, -1, -1],
        [-1, -1, 6, 7, 8, -1, -1],
        [-1, -1, 9, 0, -1, -1],
      ],
      code: '',
      bricksStyle: [
        '', '', '', '', '', '', '', '', ''
      ],
      bricksMove: [
        '', '', '', '', '', '', '', '', ''
      ],
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
    }
  }
}
</script>


<style lang="scss" scoped>
.wall {
  width: 100vw;
  margin: 10vh auto;
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
      transform-style: preserve-3d;
      color: #e3f1f1;
      transition: all 1s ease-in-out;
    }
    // set up hover effect for input panel
    [ class*="num" ]:not(.num--1):hover {
      font-size: 1.5rem;
      background-color: #438181;
      transform: translateZ(3vw) ;
      transform-origin: left;
      cursor: pointer;
      z-index: 5;
    }
  }
  .row1, .row3, .row5 {
    margin-left: 5vw;
  }
}
</style>
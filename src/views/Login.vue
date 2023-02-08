<template>
<div class="login">
  <!-- panel for password-->
  <div :class="['wall', 'front', {'clicked': matchboxClicked}]">
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
  <div :class="['wall', 'back', {'clicked': matchboxClicked}]">
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
    <div class="rooms">
      <div :class="['room', {'selected': selectedRoom === room.route}]" 
        v-for="room in rooms"
        :key="room.id"
        @click="switchRoom(room.route, room.color)"
        >
        <Candle 
        :size="'small'" 
        :colorSm="room.colorSm" 
        :selected="selectedRoom === room.route"
        class="candle-sm" />
        <div class="tag">
          {{ room.name }}
        </div>
        <div class="shelf">
        </div>
      </div>   
    </div>
  </div>
  <div class="buttons">
    <Candle 
      :color="candleColor"
      class="candle"/>
    <div 
      :class="['matchbox', {'clicked': matchboxClicked}]"
      @click="flipWalls" >
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
      <p class="name">
        {{ selectedRoom }}
      </p>
      <div 
      class="filter">
      </div>
    </div>
    <div class="instruction" >
      <Popup/>
    </div>
  </div>
</div>
</template>

<script>
import Candle from '../components/Candle.vue'
import Popup from '../components/Popup.vue'

export default {
  name: 'Login',
  components: {
    Candle,
    Popup
  }, 
  data () {
    return {
      rows: [
        [-1, -1, 1, 2, 3, -1, -1],
        [-1, -1, -1, 4, 5, -1, -1, -1],
        [-1, -1, 6, 7, 8, -1, -1],
        [-1, -1, -1, 9, 0, -1, -1, -1],
      ],
      rooms: [
        {
          id: 1,
          name: 'Sample',
          route: 'sample',
          color: {
            mainColor: '#680505',
            fireColor: '#951818',
            gradient: '#F04A4A',
            light1: '#FC5E5E',
            light2: '#EF9696',
            light3: '#F4F4F4'
          },
          colorSm: {
            mainColor: '#A42323',
            secondColor: '#A25C5C',
            heartColor: '#822020',
          }
        },
        {
          id: 2,
          name: '9303的回憶',
          route: 'forJudy', 
          color: {
            mainColor: '#E3D06A',
            fireColor: '#F6CF01',
            gradient: '#F6DA41',
            light1: '#FCF65E',
            light2: '#F6CF43',
            light3: '#F4F4F4'
          },
          colorSm: {
            mainColor: '#E3D06A',
            secondColor: '#EEDC7D',
            heartColor: '#DCC340',
          }
        }
      ],
      bricksStyle: [
        '', '', '', '', '', '', '', '', ''
      ],
      bricksMove: [
        '', '', '', '', '', '', '', '', ''
      ],
      matchboxClicked: false,
      code: '',
      selectedRoom: 'sample',
      candleColor: '',
    }
  },
  beforeMount () {
    this.candleColor = this.rooms[0].color
    // reset data when users go back to login page
    this.$store.commit('setHomeData', {})
    this.$store.commit('setAlbumData', {'seaAlbum':[], 'mountainAlbum':[], 'badmintonAlbum':[], 'celebration':[]})
    this.$store.commit('setHome', {'status': '', 'painting': '', 'paintingTitle': ''})
    this.$store.commit('setCardData', {})
    this.$store.state.login = false
  },
  methods: {
    async fetchData (code) {
      await this.$store.dispatch('getData', [Number(code), this.selectedRoom])
      if(this.$store.state.login === true) {
        this.$router.push(`/${this.selectedRoom}`)
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
      return ` transform: translateX(${x}vw) translateZ(${-x}vw) ; background: ${bg}`
    },
    resetBricks () {
      for (let i = -1; i < this.bricksMove.length; i++) {
        this.$set(this.bricksStyle, i, '')
        this.bricksMove[i] = ''
      }
    },
    flipWalls () {
      this.matchboxClicked = !this.matchboxClicked
      this.code = ''
      this.resetBricks()
    },
    switchRoom (newRoom, newColor) {
      this.selectedRoom = newRoom
      this.candleColor = newColor
      setTimeout (() => {
        this.matchboxClicked = false
      }, 1000)
    }
  }
}
</script>


<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: rgb(19, 18, 18);
  border: 1px solid black;
  overflow: hidden;
}
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
    [ class*="num"]:not(.num--1) {
      z-index: 1;
      // set up hover effect for input panel
      &:hover {
        font-size: 1.5rem;
        background-color: #438181;
        box-shadow: 4px 10px 6px rgba(0, 0, 0, 0.1);
        transform: translateZ(3vw) ;
        transform-origin: left;
        cursor: pointer;
        z-index: 5;
      }
    }
  }
  .row1, .row3, .row5, .row-odd {
    margin-left: -10vw;
  }
   &.front {
    transition: transform 1s ease-in-out, width 1s 2s;
    &.clicked {
      width: 0;
      transition: width 1s;
    }
  }
  &.back {
    position: relative;
    top: -41vh;
    transform: rotateY(90deg);
    transition: transform 2s ease-in-out;
    z-index: 1;
    &.clicked {
      transform: rotateY(0deg);
    }
    .row>.brick {
      background: #957676;
    }
    .rooms {
      position: absolute;
      top: 0;
      left: 3vw;
      width: 100vw;
      display: flex;
      flex-wrap: wrap;
      .room {
        position: relative;
        width: fit-content;
        height: fit-content;
        margin: 0 5px;
        padding: 15px;
        display: flex;
        align-items: flex-end;
        opacity: 0.6;
        transition: transform 0.5s ease-in;
        &:hover {
          cursor: pointer;
          border: 1px solid transparent;
          & .candle-sm, & .tag {
            opacity: 0.8;
          }
        }
        &.selected {
          transform: rotate(-5deg);
          opacity: 1;
        }
        .candle-sm {
          width: 3vw;
          max-width: 30px;
          margin-right: 15px;
          z-index: 1;
        }
        .tag {
          width: fit-content;
          background: #F6F6EB;
          margin-bottom: 10px;
          padding: 3px 8px;
          text-align: center;
          color: #887878;
          font-size: 1vw;
          letter-spacing: 0.2rem;
          word-break: keep-all;
          z-index: 1;
        }
        .shelf {
          position: absolute;
          bottom: 15px;
          left: 0px;
          width: 100%;
          height: 3vh;
          background: #805151;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
      }  
    }
  }
}
.buttons {
  position: absolute;
  bottom: 2vh;
  height: 2vh;
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
    transform: rotate(-5deg);
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
    .name {
      position: absolute;
      bottom: -15px;
      right: 15px;
      color: #f8fc02;
      letter-spacing: 0.2rem;
    }
    .filter {
      background: linear-gradient(269.8deg, rgba(0, 0, 0, 0.8) -25.26%, rgba(149, 0, 0, 0) 103.49%);
    }
  }
}
</style>
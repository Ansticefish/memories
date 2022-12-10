import Vue from 'vue'
import Vuex from 'vuex'
import initialPainting from '../assets/canvas.png'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: 'initial',
    painting: initialPainting,
    paintingTitle: '海的回憶'
  },
  getters: {
  },
  mutations: {
    setStatus (state, newStatus) {
      state.status = newStatus
    },
    setPaintingTitle (state, newTitle) {
      state.paintingTitle = newTitle
    },
    setPainting (state, newPainting) {
      state.painting = newPainting
    }
  },
  actions: {
  },
  modules: {
  }
})

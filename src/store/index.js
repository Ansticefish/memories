import Vue from 'vue'
import Vuex from 'vuex'
import initialPainting from '../assets/canvas.png'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: 'initial',
    painting: initialPainting,
  },
  getters: {
  },
  mutations: {
    setStatus (state, newStatus) {
      state.status = newStatus
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

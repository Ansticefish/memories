import Vue from 'vue'
import Vuex from 'vuex'
import { getDatabase, ref, child, get } from "firebase/database"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    home: {
      status: '',
      painting: '',
      paintingTitle: ''
    },
    homeData: {},
    seaAlbum: {},
    mountainAlbum: {},
    badmintonAlbum: {},
    celebrationAlbum: {}
  },
  getters: {
  },
  mutations: {
    setHome (state, newHome){
      const { status, painting, paintingTitle } = newHome
      state.home = {
        status,
        painting,
        paintingTitle
      }
    },
    setHomeData (state, newHome) {
      state.homeData = newHome
    },
    setAlbumData (state, newAlbum) {
      const { seaAlbum, mountainAlbum } = newAlbum
      state.seaAlbum = seaAlbum
      state.mountainAlbum = mountainAlbum
    }
  },
  actions: {
    getData ({commit, state}) {
      const dbRef = ref(getDatabase())
      get(child(dbRef, '/forJudy')).then((snapshot) => {
        if(snapshot.exists()) {
          const { home, mountainAlbum, seaAlbum } = snapshot.val()
          commit('setHomeData', home)
          commit('setAlbumData', {seaAlbum, mountainAlbum})
          commit('setHome', state.homeData.step0)
        } else {
          console.log('No data')
        }
      }).catch((error)=> {
        console.error(error)
      })
    }
  },
  modules: {
  }
})

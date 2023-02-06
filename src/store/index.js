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
    seaAlbum: [],
    mountainAlbum:[],
    badmintonAlbum: [],
    celebrationAlbum: [],
    cards: {},
    login: false
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
      const { seaAlbum, mountainAlbum, badmintonAlbum, celebrationAlbum } = newAlbum
      state.seaAlbum = seaAlbum
      state.mountainAlbum = mountainAlbum
      state.badmintonAlbum = badmintonAlbum
      state.celebrationAlbum = celebrationAlbum
    },
    setCardData(state, newCard) {
      state.cards = newCard
    }
  },
  actions: {
    async getData ({commit, state}, data) {
      const dbRef = ref(getDatabase())
      // to check if the password is correct
      const authenticated = await get(child(dbRef, `/${data[1]}/password`)).then((snapshot) => {
        if(snapshot.exists() && snapshot.val() === data[0]) {
          return true
        } else {
          return false
        }
      }).catch((error)=> {
        console.log(error)
        return false
      })

      console.log(authenticated)
      // fetch data if the password is correct
      if (!authenticated) {
        return state.login = false
      } else {
        state.login = true
        await get(child(dbRef, `/${data[1]}`)).then((snapshot) => {
          if (snapshot.exists()) {
            const { home, mountainAlbum, seaAlbum, badmintonAlbum, celebrationAlbum, cards } = snapshot.val()
            commit('setHomeData', home)
            commit('setAlbumData', { seaAlbum, mountainAlbum, badmintonAlbum, celebrationAlbum })
            commit('setCardData', cards)
          } else {
            console.log('No data')
          }
        }).catch((error) => {
          console.error(error)
        })
      }
    }
  },
  modules: {
  }
})

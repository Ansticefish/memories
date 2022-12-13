import Vue from 'vue'
import Vuex from 'vuex'
const mockData = {
  home:
  {
    step0: { status: "initial", painting: "https://bnz06pap004files.storage.live.com/y4mBlLS-evahbHCnlBiOskoYBkrC4BewYNbIHxSrkYu8ixz38TKpuMkAShPLNB2RtaRoap4mQlhapVxbat2hZ2Dexli8nQlyKeigfAEMBu79s7ED5uPG0vDaprWn6TjLFl8dExS1kUFwmUR_AZgL99rUKXqTi8cUsvY60HPfZCWj2MCUNfEvW4OiK4IN0D3qqxs?width=305&height=660&cropmode=none", paintingTitle: "海的回憶" },
    step1: { status: "sea", painting: "https://bnz06pap004files.storage.live.com/y4mai-j1nw2OE_0V-lKLi4EeSL3VhVwJgY7Qhcaq_krHE9thxK85xH41_4a-IdIH2VBEfUwHbUnPAn6U3OONJ4V6USZge8F5q-ONSmnORxmtBBHOkwfFm1M6Cvj2Wm1GsUiayH_uyOL4c2T-3oY0lFnRBNsisSiRrrMiXyqFK2w3rxna89a7EExjmXUrG_79o0q?width=660&height=469&cropmode=none", paintingTitle: "山的回憶" },
    step2: { status: "mountain", painting: "https://bnz06pap004files.storage.live.com/y4mTbpbE02WK3ie8aSVDCUBc7l-LH1LbUPRQB3yTL86kA-RmgtJK1_pQYa00U5eZIps0QlcDf0b0-keK82xOrWi23ApavbMWCT25fp53ZPmeTaWqDZMazZjz4hru42GOqwJ2mMhdImtvqKNoizSeFnNFVYoK_rGICJtvpYWunf6z8yPj7xpalkj0B2It4Zov6ao?width=660&height=469&cropmode=none", paintingTitle: "羽球的回憶" },
    step3: { status: "badminton", painting: "https://bnz06pap004files.storage.live.com/y4mJL8IZmqtiYDQNbtERvaSPUo49_ri5DkLxSfykho27cq7HDn_B3Ep89D6KTL-AmPzUzOAuGVxiCLWnNfjWEF8-2Vz1FunViDRVj0DwvjmmRmBF4jFm57Yj0W4gd1F96A0SJ_jdIdsiTvJXTFpY3LTSaaDK2uCdWHmIKINdMyC-XP5uYbeSd7eI3J-0EtIskrZ?width=660&height=469&cropmode=none", paintingTitle: "慶祝的回憶" }, step4: { status: "celebration", painting: "https://bnz06pap004files.storage.live.com/y4mT1PINzzsbK3aX5EEU9btnzvkG1iCcFnTbrljYITevd9c9NL8g1wG0jopAGXw1sRc90WdqAwpEOZqVCOJ_zWBUOE1tqPv11FlzCB2sMxYS3v2fm5bv4xKlQCInzYzllOR3rHFHhwMjvF7zADL-hgvG8rPC8o9Qob_EUjmUH5u-5tb3fjQYWCeLiU-Lv8urxOr?width=660&height=469&cropmode=none", paintingTitle: "我們的回憶" }
  }
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    home: {
      status: mockData.home.step0.status,
      painting: mockData.home.step0.painting,
      paintingTitle: mockData.home.step0.paintingTitle
    }
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
    }
  },
  actions: {
  },
  modules: {
  }
})

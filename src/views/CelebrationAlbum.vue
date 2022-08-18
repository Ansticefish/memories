<template>
  <div>
    <Album :photos="photos" />
  </div>
</template>

<script>
import Album from '../components/Album'

const originalData = [
  [
    {
      img: 'https://bn1305files.storage.live.com/y4mi2rVTpRBHOtTnMe9kvbrOfjRgF2uYdNTNHqIpZXoXtfAskGHUfHYCHOTyK2xzUlQju7BTw1MR-t4bmOF8fuv6hNx6m9pIoLeBfE9-mac7SgrqaRbLH_jc18k0bo4DitcUVcH3DaXcu5FMoM_jNNC3hfaQhOaF-Iuny9NP8GfylheKKruhy7Zd5b41iIq2Buk?width=1280&height=960&cropmode=none',
      caption: '相較於其他的，我們一開始最常一起做的好像就是四處吃吃喝喝~'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4myjLw6tnKWaiUXw8JVYiSkbjArFS5gXIT0r3IPdhbX8hr86D3ttjUOZb4n4yCO20Tr69Ku__G1Tt22f7UkppT5i4VovMjLnaDwmWAq9P6Pkf5EGT0yHu8d-bT0PGe5MVjH_d19-cHk7EfuSbDIR8S_BZPHKAd0t51uy0QabMGlnyS0GkJZ8MPAUhIlNeu3w4Z?width=1440&height=1920&cropmode=none',
      caption: '宿舍內的Pizza大餐！'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4m_uwm4NtTFGerySqO7MHvCe5VD7KoPYAq3sbV44uRT26qOZrWaXCvP-0NOXMDHhZs9MigMw_4dZ4hRNELOMbrqZmcS9tNbyE3I3xsuLebKp4hoGOkbOL8afQiVsX0BQnt0PWhyFZ9a5HYfYZqq6hfcUdzGAsofixgGoR5ZK8cEtq_7jXMJ1Rc6P0UJX8FOKwq?width=960&height=1280&cropmode=none',
      caption: '嚴重過曝的那個好像是蛋糕'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mB0WHrpdq4PhhVRKQFbnKTtzaV868osZOjSWblPuuGoXcNFuAUd8d-zH3xJBfD_e-9ulOOOeXldf7CyvF7Wek5Kfa84vW6Mh4FsvM3KhfPUJUE_rldhOk4gcK9UD7Z2Vr0AR_RvIlMg5Uto5ox7T-KhW8aw9eUvTBtMTB9NkfNufrhwnxdezo4Nrl6wVYkb6j?width=1280&height=960&cropmode=none',
      caption: '學校附近也吃~ (好久不見的提洛斯)'
    }, 
  ],
  [ 
    {
      img: 'https://bn1305files.storage.live.com/y4m8Dgw61ob6F6fY-nvIQMJ9mLdTBXZV-699rPZe4exT98nExMQCVC4H0d23BqLqwAITKiOapgMjYGij2c4n4V7ZFY07kdpAT9vsRa66xIt5vVxke4EcezatdO3qzOsmUkvB4gBXfzIzFZdBUQ-W-De8KTa5BeOUFB8bwd5WdzHiEyEKOf9EDy6d79SMzC-F3Uz?width=1280&height=960&cropmode=none',
      caption: '年輕時(?)一起去吃的大阪燒'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mRpLfpf12Rkj9lHcHAwAms8ctAE-8hijkYDXyfG87ABwohvqyKy2JvUr6VKWWYvhyqK0TAbytvFGqVi7cWy-ozGiTdVMeZFH3nRIkia2Qv5nHKMynws769o1RfcfmJi25wuzsPgWkW1m76ZTHscBpXjbOlrVan2kVCOP2ZoLgpJp34WAjs7TdY1ZtndlsbPZt?width=2048&height=1536&cropmode=none',
      caption: '這是非常經典的出一張嘴合照XD'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4my8UOtDGvjrQlTX6uTfXErbwv9JdxWzqqwb4fGwaJ7Cp5rGeBwF8kT9lfdmNK21lWat81e9uTMGA8OWYC1aMddvE8WHDVb-zScT4n1DBBRX7yFJGbgEL86XImCxprQLhz-sPFmI6NyUTzgzYPyCAnm1B-aQiht5DrkurMiPItryJiaVz9mEXERJmtF8Shnkrt?width=2592&height=1944&cropmode=none',
      caption: '我們也會尋找各種名義去吃大餐或玩樂~'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mR4ETxob_v8u_iUefpnmg8f8f9W_x9EaHgOKigAyRIy8FzN_TpOZYTDM65w19KKMnCh1mAE6MB3HgDA9ToMjp11T5akYjZp0lpS1VupBIZLJuVgKpoYLZPQGotCqGil7UzR-6u1KybY7c2OBrcuDQZSolRWiL2h3wi_rqgz1zctLvHreUU_-prX1DNSkrKE_n?width=2576&height=1920&cropmode=none',
      caption: '歡送德德時吃的大家都不滿意燒烤'
    }
  ],
  [
    {
      img: 'https://bn1305files.storage.live.com/y4myp-tdA454S8fAEoJoNk2GwXQLWu3YMSz9UQYa6nNRVWRJXUpCihRCys7ISrG82GLYXCL4Uec0hRLzBe7-Dr8AREW-WN3ZkFxJ77cDnWhubKfLjA8kVG90HMRq4NBLdiBhxvUYvlwX1gv3db59tgM1iHD1oHf6xMZQGv-qbkFzs9amtt7ONThEyijd419YAGY?width=2423&height=1817&cropmode=none',
      caption: '配合聖誕節Dress Code的聖誕大餐~'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mtFthzvNBpMUjkybkJqWms3QxuC18upnWaUIkF3f48C8Djc_ZIcxiKQfXQO_sT6pgpYQPqeqV3I-UWzKRkuTB9qA-whQxO07AFSDAt_U2gToYd22INR4rLs6G3bqmEGcUTM5htvtm3T0eApRT2rpBJL36csa-uE8kcrJOOcth7eWzxUBbpdJO1S5AmK9uoyYk?width=4032&height=3024&cropmode=none',
      caption: '從古流傳至今的KTV經典照！'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mvnvzfXymUKKL7Co1qNAYKzSmn9H-3gnss3A8xu1UOAzhNwiCBFcWVzd9EPLAqbM_EDmUihRcNDIsCiIJEZeUdKzdNn2oOj0_P5u6wJRNRHiem5NdxGdkA16fMHA2Pvs7b8ZU99ztiXiEMclLP8JC4xQEOlXJ_3eA_pnOXT7g-NBvwfqWygmRackMefk0DUx7?width=1280&height=960&cropmode=none',
      caption: '姿勢複製貼上！'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mxscUg8lOERK4o-ZgWGIMQabIESY1CU19LtY1_tG3KQitvGSgdgB3vqTGjcdnUAh1B97nt90bn7Zofin9ZOqVNcSqlFLDT88wO8CXTSbuyApQAnteTAQJfvxVOa1aU20DZNv_f1cE3ZYrd_BsoFG0yf29cztcIvj4eqWjiAKW-8k3q3JVcs73Llhba51GXRSp?width=3264&height=2448&cropmode=none',
      caption: '我們真的蠻常去唱KTV的呢~~'
    },
  ],
  [  
    {
      img: 'https://bn1305files.storage.live.com/y4m6Jk1MbOqUvN8B8Uj0IVO5lWHCl0CPBOiNRk7RfEXXo0RcwH__SBI-ajKBc4csOimzxHC54-MD4uGIiF4eAiaRrfP_nZU4Jp5ThL2foSk_bcNAjxhFTHRN5xYvmlM8fic0S_1M_Za6tOfFg1zUtdpfDYFoqgMQNjx0jVsxM9aF7UE5V9SF1OCLm8TtKMrDSm3?width=2364&height=1774&cropmode=none',
      caption: '媺媺指定的漢來生日餐'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mDuXxAxK0k3jIMeQiEVNqCxSLy0SEk-BWdGiw0Ab-fZFY3vp8NMkGJWwSPPdMnc2cHIcarfyotpe-8ApcDkZQs6M2g_Sg326ETAYip1hnge83-kvfHEIp_gNWhMozWg7StUZw8s8pvxpf8lBluO9stN84veNUGv_77YsWZaPdQnZWU2QY2xaBxVOGT3VO_G4W?width=2364&height=1774&cropmode=none',
      caption: '忘了為什麼去吃的大餐'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mlVRkrtGLDiuOK3zI3ltZpY6z4Z-LoghuT5YtjQ808-TvBiL5o8HAjIt-kZdPQsDLAVqszqnUw7ULNReUkq6nIytuxGrpmxReRsov4_6vuUS4Kkgr1ek9h2uYle20AtvmzeQRcvBF-DeWjvEz-LQqBtoo2cGTCSZJddMKWGFISupcz04MIQp1sv9Soh1IviTY?width=1478&height=1108&cropmode=none',
      caption: '1！2！1！7！吃蛋糕！'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4moX9fAJel2oFQAIPoAr_Z_26VHsjFVK-PckRncNMWvoEmwsmWrG1WamIEKwppwJ7w381Ko3GkD_U0gbaR9KUQPByYlzEFGQS8L6MI5cNx17lO6hRYpwGVi6OHtUUmLRd7Aj3fJTsWD1Ktuad_Zrut1KWU7AMoI-E4TNGq-Hti0DL7FEjSmojjmT4RmXBdQNXU?width=1478&height=1108&cropmode=none',
      caption: '聖誕節就是要吃享鴨啊！！！'
    }
  ],
  [
    {
      img: 'https://bn1305files.storage.live.com/y4m84oRJ6eKVeur-W2acbcniSSQllJ4gnHwpggm7MEurymYm_qSgejnVT555FzP-k3hUZJwwsY-wUcaZrqYtDQ1stjPdEoAGBoUriNr-gJ7FX1zeMWxEuPfgJ-m_cydKecQ4kZxYfJZ7NAuX6PTTmL5ukH7xmyFNP0TqECYrFWnR7GaQiIPF6PA8OxIFGvkotIl?width=3088&height=2320&cropmode=none',
      caption: '畢業後，除了旅館外，最常一起住的就是媺媺家呢~'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mLAx0euR4BGp9j8WGrN_tOv4RDH-0vfon6ZCHXe0WMPG66RXt9ffUQP5fU3-61sugxdeF6LuHR-wPcKFrpoP4Os8pR4PBTG14ebVbcxV_GxU-KMxCDwXHW0hZa2l93lb2kefwf0DzIrTGQC81U8EC3dFUKZvxJnV3hhGAhgpkGG4wHWm7fJVr9uc3c-u8RHey?width=1280&height=960&cropmode=none',
      caption: '一起煮食物吃~'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4msAEbdvIMq5SC1sa0oUWAeGfSIbeiCdMJk88f68z66m0a-NaA0l2LEbhVO--UDEP_L4wg2Tczb4R93D7LZTXQNtiqaUVY8_tcnulvtDKgCQVQeDfNHMkaaG0bl9NEoo34vjsvoXfKuxIkB9rZRfKxa3bVVfIInDVpknmWwQbUmJA6eUyODvq1iP6rx0bZN2w0?width=540&height=961&cropmode=none',
      caption: '一起像以前一樣裝瘋賣傻(?)'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4maOF4Ou0n6GAJrCoXffGzu6Z6iP3nUPYVT_2_W_JkY9Yscm3aDVGqEyBOryLYOIU9SWoE9NdP1mzPwobz7PAAn5bqN2s5GL7nHmYYQVgL4AkpTI9JI_3LPN71x59GnXyGuRcZgagCLZ8zErUU6k4ZosEDsQ79UflypE83xCOMFL_VGwInRcI5qpyAdGP9zpPr?width=1280&height=960&cropmode=none',
      caption: '嗯...跟以前比起來我們應該還是有成長吧！'
    }
  ],
  [
    {
      img: 'https://bn1305files.storage.live.com/y4mcCFqu-zGJl-ebTeJLDbMJqsnMzudBJJqzzBitajBP7EEzMMcCoiYmfIkdOB7PTWq3cjKhurK8_xDJRAVpB_swddINkLSJB_FQDdUceDxZ4htLxrn40v2DRwI1VAEYSa1gSp82MqxSD9fwmyz1acck0vw5LGb3lGg3uG-QoZgwrPS_jZCxP77vZ3W68uJxPTy?width=1478&height=1108&cropmode=none',
      caption: '最後是絕對不可漏掉的初次四人跨年'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4m2EqTGSUJqFisbac92LBMZW5mQvxZMDNJGXEF6yVqRI26myqHvySCCZDRujcdpCjXKiHPhgV_h4iI1z3B62w0QkvEHVUil46atIpWx6XIYkkRiP--wGAavzhA4IHiCQKVxhPzSimcVHFm_OHQQFALyhQ0nK4BN8v-BxlzixnkBuxijkoJQyM5Bcss3K-IdAn2?width=1478&height=1108&cropmode=none',
      caption: '希望未來的我們也像這天一樣'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4m0939VhRAcJwiVPEjgt7v7o-3xE-pRybQJxuWr5mkfULmJKqjq28aRc6tuPyHo0SKf-B0NUtsgDecdZt6vpVSzyCHjvz5_AeNW73fivYxCkRwH6Cdr03RvF6Ln7DMp83Bt0eH6s0MLxzwqp1RKoEDTkM_fjJltLK0zuuBw9q202z_65u-PHxOiaz6j4nuO_vf?width=1478&height=1108&cropmode=none',
      caption: '不管是等待倒數，還是那煙火在空中綻放的瞬間'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4m0oOk2yXjl8hxcioc1P67_5x-ZLKVJ0sn4MfuUPwwiT6nplli_zIYAUk1I5DanwsFmxHd0eHycbje990bh7DWAu-CindWnb2NMgYNHvvWkuBcUoqYvqnCsIDtutH37yUvXfhbc4hgfNVCVwwkhi57HWKAFekXXqL5R2pUh7s39cOXoldaX8TPu2S0a2ESIcJZ?width=1478&height=1108&cropmode=none',
      caption: '在一起的時刻，心情都能像飛機一樣起飛！'
    }
  ]
]

export default {
  name: 'CelebrationAlbum',
  components: {
    Album,
  },
  data() {
    return {
      photos: originalData
    }
  }
}
</script>
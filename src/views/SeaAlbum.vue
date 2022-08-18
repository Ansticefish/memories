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
      img: 'https://bn1305files.storage.live.com/y4mqf4F2fgTSmejL18D7dgxoUNTOhz0KaM442PQBq_N57zv4ccoz-l9rSX5fZK2cMz3QXBkuGkDr_iJwD9YuVbmQjxcsIBfZZ3wH01A9xegA43Vo2yfzdnG2JofDS6KcfXzOVoREwx7CQ7ntWQMJ-Cwb1dMr0Zo1BSw34svop3bFQvETO9e2IfxgLHFHjUSkdS2?width=1440&height=1080&cropmode=none',
      caption: '還記得我們第一次一起去的海嗎？是在2017年呢~'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mI_FHjufjk2xAeug4QZYLJ_Hzo5ZSCCD3e1yhjUro-2WXY3tsHDBe56At_-JL3Cjpo_-zl3f0SP16LPv2RYxeZTPEga9V5DKt6M2nacCQco4tn5IAti_0LyMZInVoKP8zbROrOUNAV96qWgBI1LwBgPZxnXKGUSlX8eu9C1B_YnjYzo2o9smjyBtzbskPJDTU?width=4898&height=3265&cropmode=none',
      caption: '那時候的我們騎的還只是腳踏車呢~(電動的)'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mQLt5CrHDZlpg0jifAnO_ve-nTsvzAysxTtQcH4SJauPYh3F7-SzXeojMazddx5uz_32A1Radf5enY2EEvyjUFSmm0QS9jHNEJtzFCYj-P8ZHf_Tnzq98cLsMO7aPBhLzlD-4Pe23mSZNDNnp0XaBoa8-moPkawah-FRmC8L29kkDHag1Ec9dKk1oDglDs9CG?width=2592&height=1944&cropmode=none',
      caption: '這大概也是我們第一次一起出去過夜吧！在小北投'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mmWGRZQpqNj_M0L4ADhjF_km8pCXh0VU9Im-Po1M7Bnlou6quVn6m0UwKSpOCWGIn0_RJAH5uom1zPPthMTA3uZk0CPu07y4kDEuV764nXulABhIcHNOJbzNyccn19bKHxam9zNRHfBCdkdpaElppM4TeKvii6gRILFjDkUQD-1-qUBsxnkR72giV7RmWGV1z?width=4032&height=3024&cropmode=none',
      caption: '顆顆顆~媺媺，你還記得找禮物找了多久嗎XD'
    }
  ],
  [
    {
      img: 'https://bn1305files.storage.live.com/y4m2yBzl5KyMQ70XtBTgGWf1od3kCSLowWYo-zozPFalRv0vecAtvdhSm8sPWJCZ0evNfwT36odNt6To_jzhKt8w8DLLVGYbt7KgYP-fy-yD2bQHi_TXBeUEpUsWkpbZ0yOBQLvchhzqwWjBvnfv1-S6gSP57O0kp-_6zzbrDluiG3COtbrufPlUNdTibAs5kFp?width=4032&height=3024&cropmode=none',
      caption: '2018年，第二次去海邊~升級成機車了！'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mQ3hHP6-Q1XTpG7kqMBFMJgJhP75ZnHRW_9hRs1D6nFbz35GLQ4FYjT4cpnga2NHgpAwOB4z9cIIpfwaHdgLoIPjh71xhwOPWXFH-SBS9ZncS2-rU8QruznKmatW_RFNKUmSjkeouStWixPV-aFQ0ejx9gDyFavYtJw4pQc_ZNXgRfLMN5CpuoPyM_nIp5uIl?width=4609&height=3073&cropmode=none',
      caption: '那一天我們拍了好多奇奇怪怪的照片啊~~'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mm9TW5CnMpEdnXPx7262FhONTaAcY3XjCwGZXx20PksNP7K9P9br5c3nHiFmmQDxj3rXiwvkXGlZbdBclFMLJRcYu00imPuoQyijzRxRdAcx3G5Efa7zcB1MhWOoDQwkNKCTREyjJu9bCpYwT0ilNc9Wt6Bc6dLtIW1O1xHY7y2nayApwOwvavSiiQvJ0ALnF?width=5102&height=3401&cropmode=none',
      caption: '還千里迢迢跑到野柳去了呢~'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4m98DO2mi2H5mtXsj0lCrilO1St_eygOZvQ5OpkcDkvq-Jnk73fawFXNI-jH5M_vjVWFzoAmoEP9u_XgBP9bXhqzrtdW04P-gnTnw7x1pfzSlrmPdd8mHO3bvWComX1uZ66MOKqr_j1L2AsUWFPZGok-b8UQv49VsMBpCb3_7PTqyZ_OqS3WXpe9WgA4kNpINN?width=5184&height=3456&cropmode=none',
      caption: '請好好記得這張~~它之後會再出現的！'
    }
  ],
  [
    {
      img: 'https://bn1305files.storage.live.com/y4m30Bxt8ek5VtFvYGBtITIWIP6yqaBY2dv2IvFWJ5Yb5jCBQ68zZuTtqBLX4tnKCMCR1SJxjCt20mU6r9t1DaNRHocmLg3In9tlGXKaZ8_FoexVokiTsZkYfe6gCRFAacXwYNxfIFYwz_gEyVQMUt1cjiS_Zvv4uhKhGzlmTwYY1uCtEpHlqx73UTVe7DDlzcp?width=4898&height=3265&cropmode=none',
      caption: '2019年的夏天~記得這一間是胖胖推薦的店！'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mScuIqWXP0f3H1wMJOacex4HRYh_W8yJqgoBlYryyL1HTza72dHrB3jIFtOV_lVKuEZE7t5izzlq4qmdZ4EszWh8K_ut5nChGWvpaJCI-nClFX9TAic_AZcnCVxWZ927H04UMo2Tg0JPAPIj8H0QbMWNeUqaK8WdKf-MsXMLPBP9_vYaSKYatK_zfxuNMtdDy?width=6000&height=4000&cropmode=none',
      caption: '為了拍夜景自行打光的我們，然後晚上就住到了奇怪的旅館...'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mI7lhJxvfvbylpBlsPGnZtBxfnHEy6OjvtfCX7I1UeeIps12VBDWgLmSu518uRZBqQBrsAlGE2u5okpH1uCguC8XA3juGu_WHvEz6FzMwabpodLfvBzM-jRlsTX_WhsTKMeT6asoCDmMchb6zcnfgHJM7_Zx3WMDYvEucubb9FPwsuOmJGLyry7DU1DKggJ_G?width=6000&height=4000&cropmode=none',
      caption: '還記得嗎？金瓜石的天空、海、機車和我們'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mUCllytoF4Lh8-sY91igFLID2bfF_669NL54JrNGgqqGNkNPuHHGMFDHlFAlR6vZrppTAYNvWW7XXhWa8ryabNp-LQfQNyqTrJXzJDV78aWoR_2SdjATdiZSNUnZK5UPSZjtV-bI5hDjvU5b61UlyRJPGYVGhcezvkjGXYBNE9eVXQFdhc1_Bx-zM1iuQb7cm?width=5928&height=3952&cropmode=none',
      caption: '登愣！有沒有覺得這幅景象很眼熟啊~'
    }
  ],
  [
    {
      img: 'https://bn1305files.storage.live.com/y4mhTrGfE6KCjmy6CH3Wu5t3F-qxSn5SKYCpPVfHQnP-UvWrVHUBdFmPEWlUr38U4jstd5ASG8h2J2D3Sg8ecorffyqWF8pB1l5jpLjqQu_m1ZOqll_0rMzGabDUIHMUho8Jd46VsWPXP_sDvpa52Vf8O8Azwy_0PuhdFhvWhJpyWJ37ENEDf20ruG1AlQu0Dpl?width=6000&height=4000&cropmode=none',
      caption: '2020年！我們展開了一場四處躲雨的宜蘭行！'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4m7x3Mwlzfpz6XtB3sRPPH63kMR_ygztzaUDpp_P3oty6t1QAbmwt1bTnyT6K_6V8FSE4GAmkeart7YP1QVOvT8NIL_Kzys6IIDe9h8beBQW-UzBJyOQnmlkQakVOFi-q5WkupKa77V7FWNesjMM13iZP_m7x4fzP0IwbiD7dOSggu_SmI5SyoCcpjm6yADsk5?width=2362&height=1772&cropmode=none',
      caption: '又一個新的交通工具！小心啊~危險駕駛二人組！'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mJvGXUZJ99hdqXJsUeip-H4ft1kBEuvigO6htyXsl25u5BYbGhvi6SsjkQEaCzCWqz8RtKhQNZnA_XFZ5ign_0nevK9wvBpEifbdZXHn_PzdLa52ebgTZTFd5jXlYEMuK1nQHLg4sjsJei_H3NzOe2ETlnbCjfMSK5O7FJnwk7Qq7-WmABZZBsol9mtI3nF18?width=4898&height=3265&cropmode=none',
      caption: 'ㄜ...這是...沒錯，就是只有我們看得到的彼此~'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4m9OWlsZI1PWjh86jSvGYx5s618g33BeQiKIS18vta_u-S9Ml3hLkzinhrQZQqr2A84Wj-PjWyfb5NTcHY-FT5R_eP-8UjHdkMw67WgMg-PuEL6TCuKaEN1gQ8TDCROsclWoN4ndcofHDCQVpwl7uYlxTlTU9yPEZECRgedWij8OV2or5OUp2OFqjHqAV3fIpE?width=5759&height=3839&cropmode=none',
      caption: '那一次沒有看到海...只好放跟水的合照了XD'
    }
  ],
  [
    {
      img: 'https://bn1305files.storage.live.com/y4mj1ac221O-ajFXiOXvWFr5NZdQ591QNq3b_RAtO3qLpbu8ybFTpUENjpyDP-ab0OTKWa2Skxap8BMNBAtVZ4T-eLBvR6AO2H6jGouQ3gWOlVr1wjdGtDPb_g-PDbGeIYWHH372fHHWFz17iCLjFzS9V5uV63wbPpwotsmxuRp5rqxL4fTIwVyzub8ZZa9-ay9?width=4032&height=3024&cropmode=none',
      caption: '2021年，我們騎車(才不是)到了台南~'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mRlJ1dQsWYMTDiA7OXsfoBspx8lanNpPlBKPALwe6-zDS2DAUS0iS6ZXaC7DFGOCHhUnZd6Nv2aB_G8EOCqE0ODSgafd1xJD3qyChIYgMuhBsFO3Wiop3jI41-GaqFBjBZMDDoxkFtbqL_EK0BSBxm-05-anBDNMeYNFk3SyHnF73C-YsdqJqQr9SDcnHG3MF?width=4032&height=3024&cropmode=none',
      caption: '與海邊的落日合照了~'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mcg9GMIrawiNfecB3z8e0k66JsbIzBr2-u9F7mKE26Rr4-oLlC7zp0zsJUdkNLz_h7M7IEgF7x0CTkUqzA-BUwyJElt6GYsOK_LTK5eiVfBVPfM3XFINYJENeiaWxYToa96Hfih8Qre-VU7N_7qGC6eO1AvIkK9Aw3DeAvjKCT_3qVeOYpmTKYAgFZIXiaRVx?width=4032&height=3024&cropmode=none',
      caption: '記得這一天晚上，有兩個人玩猜燈謎玩到瘋了XD'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mHy57mTXvoXdlbzqMeyxhzjv71VrDSoTyX8nvGI0HNfEJQYfzqxf5uA5KAH1WRZgwDUhb8S5BXyVAyCwrw4AJIKdqDuHdIVFbLcA5AaYGIRzUPfW1VeL3Jc_FqPVEkdfG3tuOUYlsjXr0akSRYvfiYgM7yUYqoixV6ISAAkhwwkGaA73vIVzx7DoP0avJ6D4H?width=4032&height=3024&cropmode=none',
      caption: '甚至為了美景一大早就在與時間賽跑呢~'
    }
  ]
]

export default {
  name: 'SeaAlbum', 
  components: {
    Album,
  },
  data () {
    return {
      photos: originalData
    }
  }
}
</script>
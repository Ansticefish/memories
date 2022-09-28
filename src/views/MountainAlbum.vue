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
      img: 'https://bn1305files.storage.live.com/y4mQCVRrsVN2fheefckNQ5jH3ZrFCNtWyI9rmK-ZqPZqs-_nfSE1Q1dsTW0Rlu0OXOftu5MzTvqpdm4ViaGsHNr1ScdyLOIgiIr_xhyp6AjZg5PxTDPAh3JeUicTYg_Q4i50gakYZdiT7Yr0ML5MLlQHmbbUOjecgkY7BkiVYcsSGrQmEXQ9IsiH0Ke7tqfSSxG?width=660&height=495&cropmode=none',
      caption: '除了海，我們也爬過不少(?)山呢~~'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4m0t-ZR92zX0dbPCw_JqqPwUlLc5MFx3pf8Kre-u2Fv0Z-SUl2bwbGR2FW3tdRgIR-B1TR15OIhmnfdwn1g7EexkZ7O9-1Y-gn833H7FG2y7qK4X6Vez1pgKvFtVKouDJrJk3-UY2my4Tfd61HvFA5ZKSL-hdI_d7HTe2w8-UDB1VCNDPDMnOlVwInen_8IP04?width=660&height=495&cropmode=none',
      caption: '這是爬象山~這次好像少了胖胖？'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mLJHU75TrDnw6WlTWjKMMUdi4HZ0Cnj6PrkACTQBSOf5HZXGjpTb4QflgHI1nb9DrvZ5Of9ia7dHH4yAfiFQEBfF2lVoSgU3VNvPDthPfX5zgZbdY_rZj5MbnCFkkp6F_z-d9s-YgnUBKYwYsxFfTpMqT-Tk3ktJNYqlwfIlaplvFkQPuJymi9CzPHuT0m83b?width=660&height=495&cropmode=none',
      caption: '這好像跟前一張是不同天呢~ 只是為什麼我們的衣服沒變呢？'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mk1kwfIZJLO6zVqCj3olxjZ72mey1o16iV5PyZ3hYZw_--oXeamR5lDFH7eyVn3wivxW1n4FNCQwL2S7GnkYdpNudyS_rmRq7Cs3hc-meF6zWea6gilRBDdPJytpg4EQK-zm2uZaD81WbpaUfSYFXOjuH5GYdyUjTsXee6SkZmC42KboGFKIrG6yvfkSY0Dd-?width=495&height=660&cropmode=none',
      caption: 'Google說這是爬山前一晚的照片'
    }
  ],
  [
    {
      img: 'https://bn1305files.storage.live.com/y4mpNPXkzJ8zPfApz0EsEtRaXGGKwa9NB--iNjgys8zxsi2TOZrNK2FP4bMAeeTxI8nxBmYv8ZVI9YAzgd0Q1zRLK0zG4VDFqP035WhC3BucqsSrM3d0bXbroo3irgBYa37fTXN2KaMQA7aOG_Lmrc77uBNQIkfZOzSlY-wJIVY8deYQrJl5c9f6KzF1sPOB_rR?width=660&height=495&cropmode=none',
      caption: '這麼說來，我們常常不單純只是去爬「山」呢~'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4m9sYz_gV9QmkaehOMqA6dJPAf--qexBAW3Ffb6FUTCxWPc-AXh7kPldhHTACXU4q7Sl78Q6EohzjcTqrIxxEoigNQI0zEdPYmF7v39jBQcXinuj2CC7uDHHxmirrnF-66cqWIwfgbT3c3KIdZ1ZtvfiSGgDVu9N5-q47eyWAa23VnoqhxVGgHMG7X35FlA7NG?width=660&height=495&cropmode=none',
      caption: '還記得這是哪裡嗎？沒錯！就是我們最愛(?)的母校！'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mjbGRzEGz6DvW2YNrnJOHqLBV45d9qAmmv57lB65EuVKobsguFOWINf2uTHYtUf-o_CfYXWKi17wJAmhBwSCDeHmlD4EUyiJ5xXVso1l9om2FBfYwaZ9gez9WMUKeurMreABGAhhxaUzOQMjdhXbg8hC0ppiX2EANPeTqPCwTNk6LkgvRFwe2Gv3HXIypHQjP?width=495&height=660&cropmode=none',
      caption: '那一天好像是這樣開始的...'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mWUp5_b-Nyhb8m5Mzw6Iamht64z5LFBtytxkU_LdqUl9HiP3W2NgpRvRt7CfIDJXWXyhmf65Chh4b9OJd7ocHy7Ey_8I0YlaE_4JAGPwgc5zp6ZOkdUWIr54-6HpJYR2ofVHHz9JNQXJVT6m5G9aIR0zB8-CV4wtbGEuial3yAcMnh9y8mAnBZG1HJDQeNnDO?width=660&height=495&cropmode=none',
      caption: '嗯~這就是那天結束時的心情'
    }
  ],
  [
    {
      img: 'https://bn1305files.storage.live.com/y4mN--j8fXxhEJalzeUHQ5RUcbrxK3Zotwnu9TkjKvdKI1pYx-iAx-FzJDf8kj1rupylvp3-mXMPKkqkTXknCftvrraZeB8ZTQs7b0_MzPHi9xQ5wBVjbejoti9ujh4ZJTxjGRtY2c28fY0jtexTqDo_HRefWs4DTHp3NsxZiS4H1YfCCKn_XQwaVUsbDRmycBO?width=660&height=495&cropmode=none',
      caption: '雖然結束時很痛苦，但請別忘了一開始開心的我們'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mEShsT30q6TXfdKvZ0XwmZFUQWPO2z7wL8aFSERXivriGnNSuDZd_NMJI0jBdvNx9ywhvIXYF080iG_Z1Nb4vVMRJjuLldbEQpYfiNAh3cVVlMlGJ4GRvkIcPPQXMh7B1a7dHX8FN27H0bA0NGWPcG_xUCLyKMF5buCeQ4Kwf5Fax2YKnS_yX56GJf_tEJiQd?width=660&height=495&cropmode=none',
      caption: '記得這是用當時最厲害的iphone拍的'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mZut6LsmPVnICD-f51BUWgaYPCFUG9ZBC8SVekh2sKjsZtdeOYB5jx8IR_hbSb0j3dP0TOmAeu16exDbv2r5PaCub2tWUAof2wiFlI4sKlmtFVS1l9Z3XLrIQyYXF-w-K5NPNqVxfusA0Cc8qMncEq6vKhKoots8ZlZinhbyODc8PseIFqGTO68S1-B8uEKO0?width=660&height=495&cropmode=none',
      caption: '遇到了拍照失敗的伯伯，只好自立自強的我們'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mcW7wvXgegRY4Gs5n3AhSvToCuf9_yDe4TER6G390SvEOjjzB-InhLu629FYAl1_2bPz3_40STpkBdF63VTJ2J6LYQFORexPEWcrNa7pank9xx8lD5i71--QcoIEB1z7W6Zmyk77CYczid0iS7Q6E3fKz2pWhMuOP-JYvecWrD2zK8hkBEYiDgJPJ8N2XId-3?width=660&height=495&cropmode=none',
      caption: '甚至在茶園演起情境劇來了XD'
    }
  ],
  [
    {
      img: 'https://bn1305files.storage.live.com/y4mu8revgxGBRw5fxJ0cazz3X5xff3YAouFUdglYqP3zlwo2_HI7ugyNHEmRcH_fimztHfsoYluNtH4IiIxaQDScgKSz4vFlsYNVjBZHIjNvXrkOJp5FgeB33-yf5UeOkDbwnpCjtPPmawsGDWdDZ7cwbxD9ncRB5K5zxi54YY9dtsewIlg-HzXC6MibXdvpmXZ?width=660&height=495&cropmode=none',
      caption: '這是忘了為什麼決定騎河堤去政大的一天(對！都是同一天！)'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4mmK-eZmhmuphKsOtzAjjbvJE2vQWF0a0ni90Y3RHKUkJimql5gscLMwBW1HRpVU9qe0m8or2jKxRH8t3UL-bOP2-nINYl-oZzNPos4Ut7dTmBpjh4t9_Vi6id7II0tdli_CitPeS-TiJgexRm_OBoQAVtc6i_MNfe2hXRvHqze-LfakIUCDBIHIE3Ibme8YRN?width=660&height=495&cropmode=none',
      caption: '吃到了心心念念的里克(為什麼沒有合照呢？)'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4msTcZ-CqjN-k982f5QsNGMJCSW7wHETTplmEu2XnayByabS9a9prxkM6OCf_rGmWTaK7wcS2pJYVFwWJ7uF1-UCPK0OdauBLso-RQkOeanUn0vWMGb6ogd6xqvWVVG-OAlXLaBmkp3LPaCOJ2klU00O-mEva-lg7Lc79lFa2X4etOXkBtmvsck_fp-SNWapAC?width=660&height=495&cropmode=none',
      caption: '在市府和101拍個合照~~然後就在夜晚登上了象山'
    },
    {
      img: 'https://bn1305files.storage.live.com/y4m2YxyBBgOox30fiEkgnk56PgZuVCiEJ8R1O3QRvhqTzC9_vC7jqEfDQkhbmDbfKV-v5mnYUoLbah4Pvds4lgJijDWTBdZ5ou49ogSMAqDipSSHpV_lUspJ5QKJb5t7KbnRyCNkaxWv6W35-_LkUrRfnd9m5eRQTTEMjIRF1q8XDxZ5-qGCNrvwEO43eFFHECD?width=660&height=495&cropmode=none',
      caption: '現在回想起來，時常臨時起意的我們'
    }
  ],
]

export default {
  name: 'MountainAlbum',
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
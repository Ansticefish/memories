<template>
  <div>
    <Album :photos="photos" />
  </div>
</template>

<script>
import Album from '../components/AlbumTest'

// const originalData = [
//   [
//     {
//       img: 'https://bn1305files.storage.live.com/y4mzHAiGJr2F5d9hFQPpa2yw4OeqwovTFojnNuaXLzSaf5DcyJ_si2agY3K7F3si30NyTxMMP6FhngLTIWZUUtkXDE8LzYcQnrC1KSfApaZ22lPtRCeA4JSGoZ8dpx1KfJwBsbyoPoUT8JLlhTxqOvva_sgmckP0oi0uNXTLTtNtqCmtll0ManQyxogAPmZPcr2?width=495&height=660&cropmode=none',
//       caption: '不管是爬山還是羽球，一切都始於「脂肪肝」！！！'
//     },
//     {
//       img: 'https://bn1305files.storage.live.com/y4muLtYk0asjf6UF9qHMoJeQXOtLO7hxGlFbA0xvXVpULlsjhDf_PsnbxGu4R6qQSk2z43I55cKC5yZH6gsekZ7PmveuhflHHNf3yLcUPKxqxAZAjb9J1WeiUpxj29SG9LUOAfl_Pv6EoSo4354G5s81bsKjQo32NYicHM6aRmTz4nqoaSCWOYYbWkqnBfCYwuF?width=660&height=495&cropmode=none',
//       caption: '第一次運動就遇到了阿寶！'
//     },
//     {
//       img: 'https://bn1305files.storage.live.com/y4mv2J8D3rkjwQ3wilLeEWFhHX2ikdi57rQ-MDtEdBI_42uUaarWax7SKP26J5ZNPDti1C2bO1MmTDYHPFX0a-LhsikcsoeRXFv8GqmSqdac49hM2OwrMuIG0fE3Ktn5eZNX1i8CazEGby_qJoTP64BlAYiGGbDimSZpZcGGGCfurNXU-Zw-A5hc7Ln3WlTWeWp?width=495&height=660&cropmode=none',
//       caption: '打球完逛逛超市也是另一個Routine?'
//     },
//     {
//       img: 'https://bn1305files.storage.live.com/y4mS1Hgch93yAhcAXA9CoAOgykkxKcBoUdj5GgDNZ3QW8il2uZhujtTGbPuds35RX2T6Fgzx679K3ryzU7OtSMclij2R_SZPxI1JM0jvFLxQ4xSMFrQRh7STH-HLX5SAP9cP4ekCyd48WllDtALCXGSFFKGL4PmMovBi8VczKhGXu83Lx2AKCBbzdbNMtb52GK8?width=660&height=495&cropmode=none',
//       caption: '比燃燒脂肪更重要的事：自拍！'
//     }, 
//   ],
//   [
//     {
//       img: 'https://bn1305files.storage.live.com/y4mwj81qxYWm_dZ-ATPj_Pw9fdymnDrmrQTk0ADSNp2ArpdkqfrbKYw8QnlCSh0aftePeplP8mW2VFX2NbjrRqm6hfNnw44qkLBg6wiMrWBCqbrKYbw-nLfPFZnDlw3nY8GQS_V8fHn5SQBTykt7xRmqf3PtD4O8FyquYHaoMFOKm5cE0MjU09JONyHvRxPx9Jl?width=660&height=495&cropmode=none',
//       caption: '曉榆掌鏡就是人都有進去就好XD'
//     },
//     {
//       img: 'https://bn1305files.storage.live.com/y4mnYCSjleRJRzHGrmgWQdfBULu1eNr2LkpcOuVnrb4EbTmuoCu4GdOpXBMgZMCNvJBIe4b7V0rlhHgG8bE2kbmJKRv6z9C_JQ3tqDWvtQtnFFjNiy15PPB9U_YMQ1cZXUUkYOjRlT6aGTU6K_NOoJl6JX6UGxLV0z44eu9QD4WIHqbkgR7zcBf2xqxdkQNMqnf?width=660&height=495&cropmode=none',
//       caption: '嗯...我知道你會懂的'
//     },
//     {
//       img: 'https://bn1305files.storage.live.com/y4mGkLG9RaiTUEJ1xiQKNOpJTmkD4bpnW_RerGwbMqQyVhPJJSQq2OMuKYR2Oc6llWtENw6QgA4RK6O19EKBOX1KbPMHdYF2zm_DxBkA8gkq1dvLLpwWDUMnrsApIu580K0CTCb331IeisIGot-F7HmEy6smqXaHOWXsGbJOF0w2RTGZkdvWC_Rw6rtTuqrG3q-?width=660&height=495&cropmode=none',
//       caption: '據說這一天有人手指受傷了'
//     },
//     {
//       img: 'https://bn1305files.storage.live.com/y4mXKg9I-ZvBjeLbaHwm_Nl1oY4BJC_1nZwMRFY79NAwE8NZNm0xM7u6e3qiWGyGRihe7h-W0GXTVvv4Qa-PVW1B1ybc0IMOHRuYzmfnyqk9aqckgjuAYGqL1c57QCtESteMmBvNnIreKfCRqQ48_G2wZISLvHN2T2Fs8UmFEu1tua8SUmjTC8xsdszxXdTaEAx?width=660&height=495&cropmode=none',
//       caption: '球打著打著就換季了呢~'
//     }
//   ],
//   [
//     {
//       img: 'https://bn1305files.storage.live.com/y4mL-xPd-oGspZZZZ_Qjaoq7icDd9nHMG71HYP8m81U8kmdYWGVPe98dHJxC1jj3JNQzj-QxR_0mPwk7rlV6dCsTrLTn0MofR0uWUn_mVEL9pGTgGjdo4a7rHBkn8d1pbJDCKWHvVn3A_b-9cHaUHtaa5QLV9zXOalFAMKzH2yk8FDqMzEjzU8-5GXfNimSslrb?width=660&height=495&cropmode=none',
//       caption: '有時候覺得其實打球只是附加價值呢~'
//     },
//     {
//       img: 'https://bn1305files.storage.live.com/y4m8r_RH7vox4Szb7qJtNv4YtwcgXtWpSVjoSmWVuNhb9QKMLk9_v9C1WSfD7H0lBXowGq3o-qMlghLO9HJZ_V4OuLST_2DTqOPF6ndSJTUy7dabE9okEGBhJAx5DKl8MdWlhpL0pXXmxKoGOkzFcENxXwfta_tFgouzoZTxlIPJjrHz8H-BC_rN4VRxNH3Kur8?width=495&height=660&cropmode=none',
//       caption: '聚在一起做一些奇奇怪怪的事'
//     },
//     {
//       img: 'https://bn1305files.storage.live.com/y4m5XHZZz52kcPZ306ZRS4_ByW6HPd3h81-5CXiQ0WvqlqWg0mqpVf7AtacBV70IEZgn__YcKfUrAbtRXvNqb1P79QmDQQ_IGls2roN5aFkFeI011OCmZ1B4wk9x5l50IZDIW3_9xhsqnXHaG70QUK5sLysfsd3_tbKyRqAbs2R2ySS9YJfSeVUzf0yo5zJbt7K?width=660&height=495&cropmode=none',
//       caption: '拍一些有趣的照片'
//     },
//     {
//       img: 'https://bn1305files.storage.live.com/y4m73mQIINcoxl328mMgVDtxxb8_wQ8SmKZuG_2UBMOYV_8N4XenGRJlgdns4gp9LSE4RcbCClWi6DZ1BhUXPCKvxyKX4l3G0oSs7tdmsr3U-nzAAxpf5mVc0z3n6ahSi9oMu4M2XOFrhAVeM7pzBOAyU5-Ygh1TJEfTUKIM2GZDs4U_XhNxkvIHHgUaQJeCRMN?width=495&height=660&cropmode=none',
//       caption: '一起將時間變成美好的回憶，這樣就值得了！'
//     }
//   ],
// ]

export default {
  name: 'BadmintonAlbum',
  components: {
    Album,
  },
  data() {
    return {
      photos: this.$store.state.badmintonAlbum
    }
  }
}
</script>
<template>
  <div class="container">
    <!-- big candle -->
    <svg  v-if="size === 'big'" viewBox="0 0 548 602" preserveAspectRatio="xMaxYMax meet" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="127" y="326" width="92" height="144" :fill="color.mainColor" />
      <ellipse cx="173" cy="463.5" rx="46" ry="35.5" :fill="color.mainColor" />
      <ellipse cx="173" cy="331" rx="46" ry="31" :fill="color.mainColor" />
      <ellipse cx="173" cy="325" rx="46" ry="25" fill="url(#paint0_linear_409_13)" />
      <ellipse cx="173" cy="326.5" rx="375" ry="326.5" fill="url(#paint1_radial_409_13)" />
      <path
        d="M178.119 230C200.573 244.091 207.353 273.718 193.262 296.172L174.657 325.818C152.203 311.726 145.423 282.1 159.515 259.646L178.119 230Z"
        :fill="color.fireColor" />
      <defs>
        <linearGradient id="paint0_linear_409_13" x1="173" y1="300" x2="173" y2="350" gradientUnits="userSpaceOnUse">
          <stop :stop-color="color.gradient" />
          <stop offset="1" stop-color="#220000" stop-opacity="0" />
        </linearGradient>
        <radialGradient id="paint1_radial_409_13" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="translate(173 326.5) rotate(68.2301) scale(337.037 322.644)">
          <stop :stop-color="color.light1" stop-opacity="0.49" />
          <stop offset="0.362388" :stop-color="color.light2" stop-opacity="0.26" />
          <stop offset="1" :stop-color="color.light3" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
    <!-- small candle -->
    <svg v-if="size === 'small'" viewBox="0 0 27 63" fill="none" 
    preserveAspectRatio="xMinYMax meet" xmlns="http://www.w3.org/2000/svg">
      <rect y="12.0359" width="27" height="42.2609" :fill="colorSm.mainColor" />
      <ellipse cx="13.5" cy="52.3891" rx="13.5" ry="10.4185" :fill="colorSm.mainColor" />
      <ellipse cx="13.5" cy="13.5031" rx="13.5" ry="9.09783" :fill="colorSm.mainColor" />
      <ellipse cx="13.5" cy="11.7422" rx="13.5" ry="7.33696" :fill="colorSm.secondColor" />
      <ellipse cx="13.5374" cy="11.673" rx="8.15495" ry="4.58716" :fill="colorSm.heartColor" />
      <path d="M11.2131 1.34729C16.5139 5.42477 13.546 8.99255 13.546 11.541" stroke="white" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Candle',
  props: {
    size: {
      type: String,
      default: 'big'
    },
    color: {
      type: Object,
      default () {
        return {
          mainColor: '#680505',
          fireColor: '#951818',
          gradient: '#F04A4A',
          light1: '#FC5E5E',
          light2: '#EF9696',
          light3: '#F4F4F4' 
        }
      }
    },
    colorSm : {
      type: Object,
      default () {
        return {
          mainColor: '#A42323',
          secondColor: '#A25C5C',
          heartColor: '#822020',
        }
      }
    }
  }
}
</script>
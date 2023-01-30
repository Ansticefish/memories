<template>
  <svg viewBox="0 0 548 602" preserveAspectRatio="xMaxYMax meet" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</template>

<script>
export default {
  name: 'Candle',
  props: {
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
    }
  }
}
</script>
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style lang="scss">
@import url("https://use.typekit.net/uxs3wyn.css");
$background-color: rgb(217, 217, 217);

html,
body {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font-family: chaloops, sans-serif;
  vertical-align: baseline;
  box-sizing: border-box;
  background-color: $background-color;
  overflow: hidden;
}

</style>

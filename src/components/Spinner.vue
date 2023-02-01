<template>
  <div class="spinner">
    <div class="tank">
      <div class="photo">
        <div class="content">回憶沖洗中......</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>

<style lang="scss" scoped>
.spinner {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(193, 192, 245);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  .tank {
    position: relative;
    width: 30vw;
    height: 30vh;
    border-width: 0px 5px 5px 5px;
    border-style: solid;
    border-color: #867D7D;
    border-radius: 0px 0px 50px 50px;
    overflow: hidden;
    &:before {
      content: '';
      position: absolute;
      bottom: -10%;
      left: -30%; 
      width: 130%;
      height: 70%;
      background-image: url('../assets/water.png');
      background-size: cover;
      z-index: 10;
      animation: waterMove 3s cubic-bezier(.69, .37, .5, .76) infinite alternate;
    }
    .photo {
      margin: auto;
      position: relative;
      bottom: -40%;
      width: 50%;
      height: 30%;
      padding: 3%;
      background: #F2E0D5;
      border: 3px solid #5F5858;
      transform: rotate(-18.48deg);
      animation: photoMove 3s cubic-bezier(.69, .37, .5, .76) infinite alternate, photoBlur 3s cubic-bezier(.69, .37, .5, .76) infinite;
      transform-origin: center;
      .content {
        width: 90%;
        height: 90%;
        margin:auto;
        background: #FCEEE7;
        border: 3px solid #5F5858;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

@keyframes waterMove {
  0% {
    transform: translate(0);
  }
  30% {
    transform: translateY(-10%);
  }
  100% {
    transform: translate(20%, 10%);
  }
}

@keyframes photoMove {
  0% {
    transform: translateY(20%) rotate(-18.48deg);
  }

  30% {
    transform: translateY(-30%);
  }

  100% {
    transform: translate(20%, 50%) rotate(-18.48deg);
  }
}

@keyframes photoBlur {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
</style>
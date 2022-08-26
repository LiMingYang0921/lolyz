<template>
  <div class="champions">
    <div class="content">123123</div>
    <img class="background_1" src="@/assets/images/latestBg_Wallpaper.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
export default defineComponent({
  setup () {
    return {

    }
  }
})
</script>
<style lang="scss" scoped>
.champions {
  position: relative;

  .background_1 {
    position: absolute;
    top: -20vw;
    left: 0;
    width: 100%;
    z-index: -1;
  }

  .content {
    background: rgb(10, 10, 12);
    opacity: 0.9;
  }
}
</style>

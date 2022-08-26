<template>
  <swiper class="swiper" :loop="true" :modules="modules" :effect="'coverflow'" :grab-cursor="true"
    :centered-slides="true" :slides-per-view="'auto'" :coverflow-effect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }">
    <swiper-slide v-for="i in 8" :key="i" class="slide" style="width: 33.33%;">
      <div class="box">
        <img src="@/assets/images/featured_1.webp" />
        <div class="bottom">
          <div class="content">
            <h3 class="name">织星</h3>
            <p class="text">为了将爱人从黑暗中拯救出来，霞踏上了穿越银河系的征程，展开了一段招募队友的奇妙之旅。</p>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [EffectCoverflow]
    }
  }
})
</script>
<style lang="scss" scoped>
.swiper {
  height: 100%;
  width: 100%;
  background: rgb(10, 10, 12);
  overflow: hidden;

  .slide {

    .box {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;

      img {
        width: 100%;
      }

      .bottom {
        border-top: 2px #c9aa71 solid;
        width: 100%;
        padding: 10px;
        background-color: rgb(14, 17, 20);

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 1px rgb(104, 81, 36) solid;

          h3 {
            color: #937341;
            font-size: 28px;
            padding-top: 30px;
            padding-bottom: 15px;
          }

          p {
            color: #c4b998;
            font-size: 14px;
            padding-bottom: 20px;
            padding: 0 20px 20px 20px;
          }

          .line {
            width: 50px;
            height: 2px;
            background: #937341;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
}
</style>

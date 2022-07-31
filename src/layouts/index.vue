<template>
  <Header />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './header/Header.vue'
export default defineComponent({
  name: 'LayoutsPage',
  components: { Header }
})
</script>

<style lang="scss" scoped>
</style>

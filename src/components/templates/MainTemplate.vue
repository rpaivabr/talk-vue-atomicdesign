<template>
  <div class="main-template">
    <div class="main-template-container">
      <Header />
      <slot />
      <Footer class="main-template-footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Header, Footer } from '@/components/organisms'

export default defineComponent({
  components: { Header, Footer }
})
</script>

<style lang="scss" scoped>
.main-template {
  margin: 5rem auto;
  display: grid;
  grid-gap: 5rem;

  &-container {
    width: 85%;
    max-width: 1150px;
    margin: 0 auto;
  }

  &-footer {
    position: fixed;
    bottom: 30px;
    width: 85%;
    max-width: 1150px;
    margin: 0 auto;
  }
}
</style>

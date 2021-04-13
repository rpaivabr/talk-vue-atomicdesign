<template>
  <header class="header">
    <Logo class="header-logo" />
    <NavBar />
    <SearchForm />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Logo } from '@/components/atoms'
import { NavBar } from '@/components/molecules'

export default defineComponent({
  components: { Logo, NavBar }
})
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;

  &-logo {
    width: 200px;
  }
}
</style>

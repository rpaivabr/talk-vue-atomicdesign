<template>
  <nav class="nav-bar">
    <NavItem text="Home" to="/home" />
    <NavItem text="Sobre" to="/about" />
    <NavItem text="Contato" to="/contact" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NavItem } from '@/components/atoms'

export default defineComponent({
  components: { NavItem }
})
</script>

<style lang="scss" scoped>
.nav-bar {
  width: max-content;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2rem;
}
</style>

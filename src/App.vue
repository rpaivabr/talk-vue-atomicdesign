<template>
  <component :is="currentPage" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      currentPage: 'HomePage'
    }
  }
})
</script>

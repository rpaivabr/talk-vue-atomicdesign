<template>
  <div class="note-list">
    <Note v-for="(note, index) in notes" :key="index" :note="note" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Note } from '@/components/atoms'
import { INote } from '@/interfaces'

export default defineComponent({
  components: { Note },
  props: {
    notes: {
      type: Array as PropType<INote[]>,
      default: []
    }
  }
})
</script>

<style lang="scss" scoped>
.note-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
}
</style>

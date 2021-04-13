<template>
  <div class="note" :class="note.category">
    <h3 class="note-title">{{ note.title }}</h3>
    <p>{{ note.description }}</p>
  </div>
</template>

<script lang="ts">
import { INote } from '@/interfaces'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    note: {
      type: Object as PropType<INote>
    }
  }
})
</script>

<style lang="scss" scoped>
.note {
  width: 250px;
  height: 150px;
  padding: 20px;
  box-shadow: 0px 5px 5px rgba(#000000, 0.08);

  &-title {
    font-size: 22px;
    margin-bottom: 15px;
  }

  &.note {
    background-color: #dbdcff;
  }

  &.task {
    background-color: #feffa3;
  }

  &.reminder {
    background-color: #ffd4e5;
  }
}
</style>

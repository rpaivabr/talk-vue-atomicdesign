<template>
  <main class="notes">
    <div class="notes-header">
      <h2>My Notes ({{ filteredNotes.length }} of {{ notes.length }})</h2>
      <InputSearch @search="search" />
    </div>
    <NoteGrid :notes="filteredNotes" />
  </main>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { INote } from '@/interfaces'
import { NoteGrid, InputSearch } from '@/components/molecules'

export default defineComponent({
  components: { NoteGrid, InputSearch },
  data() {
    return {
      searchText: ''
    }
  },
  props: {
    notes: {
      type: Array as PropType<INote[]>,
      default: []
    }
  },
  computed: {
    filteredNotes(): INote[] {
      if (!this.searchText) {
        return this.notes
      }
      return this.notes.filter((note: INote) =>
        note.title.includes(this.searchText)
      )
    }
  },
  methods: {
    search(text: string) {
      this.searchText = text
    }
  }
})
</script>

<style lang="scss" scoped>
.notes {
  width: 100%;
  &-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
}
</style>

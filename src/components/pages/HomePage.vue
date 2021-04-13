<template>
  <main-template>
    <Notes :notes="notes" />
  </main-template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { INote } from '@/interfaces'
import { Notes } from '@/components/organisms'
import { MainTemplate } from '@/components/templates'

export default defineComponent({
  components: { MainTemplate, Notes },
  data() {
    return {
      notes: [] as INote[]
    }
  },
  async created() {
    this.notes = await fetch('http://localhost:3000/notes').then((res) =>
      res.json()
    )
  }
})
</script>

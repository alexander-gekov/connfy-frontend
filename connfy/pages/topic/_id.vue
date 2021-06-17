<template>
  <div class="container flex flex-col md:w-1/2">
    <add-note-on-topic></add-note-on-topic>
    <div class="flex flex-wrap justify-between p-4">
      <note-card class="card md:w-1/2"></note-card>
      <note-card class="card md:w-1/2"></note-card>
      <note-card class="md:w-1/2"></note-card>
    </div>
  </div>
</template>

<script>
import addNoteOnTopic from '@/components/AddNoteOnTopic'
import noteCard from '@/components/NoteCard'

export default {
  name: '_id.vue',
  components: { noteCard, addNoteOnTopic },
  data() {
    return {}
  },
}
</script>

<style scoped>
.card {
  max-width: 40vw;
  max-height: 65vw;
}
</style>

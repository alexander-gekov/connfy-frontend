<template>
  <div class="container">

    <add-note-on-topic></add-note-on-topic>
    <div class="flex flex-wrap justify-between p-4">
      <note-card class="card"></note-card>
      <note-card class="card"></note-card>
      <note-card class=""></note-card>

    </div>
  </div>
</template>

<script>
import addNoteOnTopic from '@/components/addNoteOnTopic'
import noteCard from '@/components/noteCard'
export default {
  name: 'TopicDetails.vue',
  components: { noteCard, addNoteOnTopic },
}
</script>

<style scoped>
.card{
  max-width: 40vw;
  max-height: 65vw;
}
</style>

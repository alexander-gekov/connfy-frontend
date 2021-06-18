<template>
  <div class="container flex flex-col md:w-1/2">
    <add-note-on-topic v-if="showEdit" :note="editedNote"></add-note-on-topic>
    <div class="flex flex-wrap justify-between p-4">
      <note-card @edit-clicked="editClicked" class="card md:w-1/2" :note="note1"></note-card>
      <note-card @edit-clicked="editClicked" class="card md:w-1/2" :note="note2"></note-card>
      <note-card @edit-clicked="editClicked" class="md:w-1/2" :note="note3"></note-card>
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
    return {
      note1: {
        id: 1,
        content: "Jessica would like to have her salary raised next month.",
        author: "Page Gill",
        date: "11 May",
        topic: "Salary",
      },
      note2: {
        id: 2,
        content: "Alex is going on a paid leave from 18 May.",
        author: "May Gael",
        date: "9 May",
        topic: "Salary",
      },
      note3: {
        id: 3,
        content: "The next sprint will start on 15 May and will continue until the end of the month. The payment will be 2000 euro.",
        author: "Page Gill",
        date: "6 May",
        topic: "Salary",
      },
      editedNote: {},
      showEdit: false,
    }
  },
  methods: {
    editClicked(value) {
      console.log(value)
      this.editedNote = value
      this.showEdit = true
    }
  }

}
</script>

<style scoped>
.card {
  max-width: 40vw;
  max-height: 65vw;
}
</style>

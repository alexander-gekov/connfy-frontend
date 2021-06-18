<template>
  <div class="shadow-lg rounded-xl flex flex-col m-4">
    <div class="flex flex-row justify-between mx-3">
      <h2 class="text-lg">{{ note.date }}</h2>

    </div>
    <textarea class="mx-3 text-left font-light text-sm px-3 py-2 text-lg" :value="note.content"></textarea>
    <div class="flex justify-end">
      <button class="p-2 bg-yellow-500 rounded-full w-1/4 m-2 text-white">Save</button>
    </div>
  </div>
</template>

<script>
export default {
name: "AddNoteOnTopic.vue",
  props: {
  note: Object
  }
}
</script>

<style scoped>

</style>

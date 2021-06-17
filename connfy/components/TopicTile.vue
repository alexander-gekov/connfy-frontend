<template>
  <div class="mx-2 flex flex-col rounded-xl bg-white shadow-md p-2 ">
    <img class="text-center m-auto" src="../assets/notes.png">
    <h3 class="text-center m-auto font-semibold">{{ name }}</h3>
    <h3 class="text-center m-auto font-light">{{ notes }} notes</h3>
  </div>
</template>

<script>
export default {
name: "topicTile.vue",
  props: {
    name: {
      type: String
    },
    notes: {
      type: Number
    }
  },
}
</script>

<style scoped>

</style>

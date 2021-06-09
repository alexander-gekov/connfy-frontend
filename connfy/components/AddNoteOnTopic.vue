<template>
  <div class="shadow-lg rounded-xl flex flex-col m-4">
    <div class="flex flex-row justify-between mx-3">
      <h2 class="text-lg">12 May, Today</h2>
      <div class="flex flex-row pt-1">

        <img
          class="object-cover h-6 w-6"
          src="../assets/bookmark.png"
        />

        <img
          class="object-cover h-6 w-6 ml-3"
          src="../assets/edit.png"
        />
      </div>
    </div>
    <h3 class="text-left m-auto font-light text-sm px-3 py-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris erat, fermentum quis scelerisque </h3>
    <div class="flex justify-end">
      <button class="p-2 bg-yellow-500 rounded-full w-1/4 m-2 text-white">Save</button>
    </div>
  </div>
</template>

<script>
export default {
name: "AddNoteOnTopic.vue"
}
</script>

<style scoped>

</style>

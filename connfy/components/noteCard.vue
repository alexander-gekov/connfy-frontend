<template>
  <div class="m-1 mb-5 p-1 pt-2 flex flex-col justify-center align-items-center rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg square">
    <div class="flex flex-row justify-between mx-3">
      <h2 class="text-lg text-white">11 May</h2>
      <div class="flex flex-row pt-1">

        <img
          class="object-cover h-5 w-5"
          src="../assets/bookmark.png"
        />

        <img
          class="object-cover h-5 w-5 ml-2"
          src="../assets/edit.png"
        />
      </div>
    </div>
    <h3 class="text-left m-auto font-light text-sm px-3 py-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris erat, fermentum quis scelerisque </h3>
    <h3 class="text-sm m-auto font-bold text-white">John Doe</h3>
  </div>
</template>

<script>
export default {
name: "noteCard.vue"
}
</script>

<style scoped>

</style>

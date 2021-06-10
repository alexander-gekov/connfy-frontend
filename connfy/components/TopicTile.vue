<template>
  <div class="mx-2 flex justify-center align-items-center rounded-xl bg-red-200 shadow-md w-24 h-28 md:w-56 md:h-56 ">
    <h3 class="text-center m-auto ">{{ name }}</h3>
  </div>
</template>

<script>
export default {
name: "topicTile.vue",
  props: {
    name: {
      type: String
    }
  },
}
</script>

<style scoped>

</style>

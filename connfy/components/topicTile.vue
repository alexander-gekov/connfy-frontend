<template>
  <div class="m-1 flex justify-center align-items-center rounded-xl bg-red-200 shadow-md square">
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

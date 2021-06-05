<template>
  <img class="rounded-full w-10 border-white border-2" :src="imageUrl" alt="" />
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
    },
  },
}
</script>

<style></style>

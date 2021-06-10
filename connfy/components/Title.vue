<template>
  <div class="bg-white flex justify-center text-center mb-5">
    <h1 class="text-xl mx-auto text-gray font-montserrat">{{pageTitle}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {type: String},
    previousPage: {type: String}
  }
}
</script>

<style></style>

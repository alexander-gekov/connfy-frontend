<template>
  <div class="bg-white flex justify-center text-center mb-5">
    <div class="block px-3 py-2 rounded-md text-base font-medium bg-gray-200 absolute left-0 absolute top-2">
        <NuxtLink :to="`/${this.$store.state.previous.previousPage}`"><h2 class="icon"><font-awesome-icon :icon="['fas', 'arrow-left']" /></h2></NuxtLink>
    </div>
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

<template>
  <div class="bg-white flex justify-center text-center mb-5">
    <div
      @click="$router.go(-1)"
      class="
        block
        ml-5
        px-3
        py-2
        rounded-md
        text-base
        font-medium
        bg-gray-200
        absolute
        left-0
        top-2
      "
    >
      <h2 class="icon">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
      </h2>
    </div>
    <h1 class="text-xl mx-auto text-gray font-montserrat">{{ pageTitle }}</h1>
  </div>
</template>

<script>
export default {
  props: ['pageTitle', 'previousPage'],
}
</script>

<style></style>

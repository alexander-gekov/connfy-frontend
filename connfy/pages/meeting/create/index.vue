<template>
  <div>
    <Title class="py-3" pageTitle="Add new meeting" />
    <div class="flex flex-col items-center max-w-4xl mx-auto px-5">
      <nuxt-link
        to="/meeting/create/new"
        class="
          bg-white
          border-4
          text-2xl text-center
          border-orange
          rounded-3xl
          text-orange-dark
          focus:outline-none
          p-4
          shadow-lg
          my-10
          w-full
        "
      >
        New Meeting
      </nuxt-link>
      <div class="text-xl mt-5">Types of meetings:</div>
      <button
        class="
          bg-white
          border-4
          text-2xl
          border-blue
          rounded-3xl
          text-blue-dark
          focus:outline-none
          p-4
          shadow-lg
          my-10
          w-full
        "
      >
        Team Meeting
      </button>
      <button
        class="
          bg-white
          border-4
          text-2xl
          border-blue
          rounded-3xl
          text-blue-dark
          focus:outline-none
          p-4
          shadow-lg
          my-10
          w-full
        "
      >
        Progress Meeting
      </button>
      <button
        class="
          bg-white
          border-4
          text-2xl
          border-blue
          rounded-3xl
          text-blue-dark
          focus:outline-none
          p-4
          shadow-lg
          my-10
          w-full
        "
      >
        Brainstorm Meeting
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

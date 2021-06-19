<template>
  <div>
    <Title class="py-3" pageTitle="Upcoming meetings" />
    <div class="max-w-4xl mx-auto px-5">
      <nuxt-link
        to="/meeting/create"
        class="
          flex
          border-4 border-orange
          w-10/12
          mb-5
          px-4
          py-2
          rounded-full
          text-orange-dark
        "
        ><svg
          class="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path></svg
        >Add new meeting</nuxt-link
      >
      <meeting-card class="mb-5 mt-5" />
      <meeting-card class="mb-5" />
      <meeting-card class="mb-5" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MeetingCard from '~/components/MeetingCard.vue'

export default Vue.extend({
  components: { MeetingCard },
  computed: {
    getPreviousPage() {
      return this.$store.state.previousPage
    },
  },
  data() {
    return {
      meetings: [],
    }
  },
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="font-bold text-2xl mb-5">Upcoming Meetings</div>
    <meeting-card class="mb-5" />
    <meeting-card class="mb-5" />
    <meeting-card class="mb-5" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MeetingCard from '~/components/MeetingCard.vue'

export default Vue.extend({
  components: { MeetingCard },
  data() {
    return {
      meetings: [],
    }
  },
})
</script>

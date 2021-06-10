<template>
<div>
  <Title class="py-3" pageTitle="Upcoming meetings" />
  <div class="max-w-4xl mx-auto px-5">
    <meeting-card class="mb-5" />
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
  data() {
    return {
      meetings: [],
    }
  },
})
</script>

<template>
  <div>
    <Title class="py-3" pageTitle="Open meetings" />
    <div class="max-w-4xl mx-auto pb-10">
      <h3 class="text-xl pb-1">
        <font-awesome-icon :icon="['far', 'map']" /> Tech campus
      </h3>
      <div v-for="meeting in openMeetings">
        <open-meeting-card :meeting="meeting" class="mb-5"></open-meeting-card>
      </div>
    </div>
  </div>
</template>

<script>
import openMeetingCard from '@/components/OpenMeetingCard'
import openMeeting from '../mock/openMeeting.json'
export default {
  name: 'open-meetings.vue',
  components: { openMeetingCard },
  data() {
    return {
      openMeetings: openMeeting,
    }
  },

}
</script>

<style scoped></style>

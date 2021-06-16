<template>
  <div class="">
    <Title class="py-3" pageTitle="Open meetings" />
    <h3 class="text-xl pb-1"><font-awesome-icon :icon="['far', 'map']"/>  Tech campus</h3>
    <open-meeting-card></open-meeting-card>
    <open-meeting-card></open-meeting-card>
    <h3 class="text-xl pb-1"><font-awesome-icon :icon="['far', 'map']"/> Fontys</h3>
    <open-meeting-card></open-meeting-card>


  </div>
</template>

<script>
import openMeetingCard from '@/components/OpenMeetingCard'
export default {
name: "open-meetings.vue",
  components: {openMeetingCard}
}
</script>

<style scoped>

</style>

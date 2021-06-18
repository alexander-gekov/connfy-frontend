<template>
<div>
  <Title class="py-3" pageTitle="Upcoming meetings" />
  <div class="max-w-4xl mx-auto px-3 pb-10">
    <div v-for="meeting in meetings">
    <meeting-card :meeting="meeting" class="mb-5" />
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import MeetingCard from '~/components/MeetingCard.vue'
import meetings from '../mock/meetings.json'


export default Vue.extend({
  components: { MeetingCard },
  computed: {
    getPreviousPage () {
      return this.$store.state.previousPage
    }
  },
  data (){
    return{
      meetings: meetings
    }
  }
})
</script>

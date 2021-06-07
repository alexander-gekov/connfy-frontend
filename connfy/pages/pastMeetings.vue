<template>
  <div class="m-3">

    <h3 class="text-lg font-bold p-3">All meetings:</h3>


    <div class="flex justify-center">
    <no-ssr>
<!--      <v-calendar></v-calendar>-->
<!--      <v-date-picker v-model="date" />-->
      <v-calendar :attributes="attributes" @dayclick="onDayClick" />
    </no-ssr>
    </div>
    <h3 class="text-lg font-bold p-3">My groups:</h3>

    <div class="rounded-xl bg-blue-300 shadow-lg p-3 mb-4">
      <h3 class="text-lg pb-2">Staff meeting</h3>
      <div class="flex flex-row">
        <participant-circle />
        <participant-circle />
        <participant-circle />
      </div>
    </div>

    <div class="rounded-xl bg-yellow-300 shadow-lg p-3 mb-4">
      <h3 class="text-lg pb-2">Staff meeting</h3>
      <div class="flex flex-row">
        <participant-circle />
        <participant-circle />
        <participant-circle />
      </div>
    </div>

    <div class="rounded-xl bg-blue-200 shadow-lg p-3 mb-4">
      <h3 class="text-lg pb-2">Staff meeting</h3>
      <div class="flex flex-row">
        <participant-circle />
        <participant-circle />
        <participant-circle />
      </div>
    </div>
  </div>
</template>

<script>
import participantCircle from '@/components/participantCircle'

export default {
  name: 'pastMeetings.vue',
  components: { participantCircle },
  data() {
    return {
      date: new Date(2021,6,5),
      days: [],
    }
  },
  computed: {
    dates() {
      return this.days.map(day => day.date);
    },
    attributes() {
      return this.dates.map(date => ({
        highlight: true,
        dates: date,
      }));
    },
  },
  methods: {
    onDayClick(day) {
      const idx = this.days.findIndex(d => d.id === day.id);
      if (idx >= 0) {
        this.days.splice(idx, 1);
      } else {
        this.days.push({
          id: day.id,
          date: day.date,
        });
      }
    },
  },
}
</script>

<style scoped></style>

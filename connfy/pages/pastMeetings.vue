<template>
  <div class="">
    <div class="flex justify-center">
    <no-ssr>
      <v-calendar is-expanded :attributes="attributes" @dayclick="onDayClick" />
    </no-ssr>
    </div>

    <div class="mt-3 bg-white rounded-xl shadow-lg" v-bind:class="{ hidden: isHidden}">
      <h3 class="text-xl font-light mx-5 py-2">{{date}}</h3>
      <MeetingCard class="mx-3"/>
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
      <h3 class="text-lg pb-2">Team meeting</h3>
      <div class="flex flex-row">
        <participant-circle />
        <participant-circle />
        <participant-circle />
      </div>
    </div>

    <div class="rounded-xl bg-blue-200 shadow-lg p-3 mb-4">
      <h3 class="text-lg pb-2">Group meeting</h3>
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
import MeetingCard from '@/components/MeetingCard'
export default {
  name: 'pastMeetings.vue',
  components: { participantCircle, MeetingCard },
  data() {
    return {
      date: "",
      days: [],
      isHidden: true
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
      console.log(day.date)
      const idx = this.days.findIndex(d => d.id === day.id);
      if (idx >= 0) {
        // this.days.splice(idx, 1);
        // Show meeting
        this.isHidden = false
        let dayString = String(day.date).split(' ')
        this.date = dayString[0] + " " + dayString[1] + " " + dayString[2];
      } else {
        // Do nothing or add meeting if the date is in the future
        this.days.push({
          id: day.id,
          date: day.date,
        });
      }
    },
  },
  created() {
    const day = {
      id: '2021-06-03',
      date: 'Thu Jun 03 2021 00:00:00 GMT+0200 (Central European Summer Time)'
    }
    const day2= {
      id: '2021-06-11',
      date: 'Fri Jun 11 2021 00:00:00 GMT+0200 (Central European Summer Time)'
    }
    this.days.push({
      id: day.id,
      date: day.date,
    });
    this.days.push({
      id: day2.id,
      date: day2.date,
    });
  }
}
</script>

<style scoped></style>

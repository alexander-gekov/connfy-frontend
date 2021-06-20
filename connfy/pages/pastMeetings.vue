<template>
  <div>
    <Title id="v-step-4" class="py-3" pageTitle="Past meetings" />
    <div class="md:w-1/2 px-5 h-screen">
      <div class="flex justify-center">
        <no-ssr>
          <v-calendar
            is-expanded
            :attributes="attributes"
            @dayclick="onDayClick"
          />
        </no-ssr>
      </div>

      <div
        class="mt-3 bg-white rounded-xl shadow-lg"
        v-bind:class="{ hidden: isHidden }"
      >
        <h3 class="text-xl font-light mx-5 py-2">{{ date }}</h3>
        <div class="mx-5">
          <div class="flex justify-between">
            <h1 class="text-xl font-bold font-montserrat">
              {{ currentMeeting.title }}
            </h1>
          </div>
          <div class="flex">
            <span class="text-light">{{ currentMeeting.start_time}} - {{currentMeeting.end_time}}</span>
          </div>
          <div class="flex justify-between items-baseline m-2 pb-2">
            <div class="attendees flex self-end">
              <circle-image
                class="-ml-3"
                imageUrl="https://randomuser.me/api/portraits/women/47.jpg"
              />
              <circle-image
                class="-ml-3"
                imageUrl="https://randomuser.me/api/portraits/women/79.jpg"
              />
              <circle-image
                class="-ml-3"
                imageUrl="https://randomuser.me/api/portraits/men/86.jpg"
              />
            </div>
            <nuxt-link
              :to="'/meeting/' + currentMeeting.id"
              class="
                bg-orange-light
                transform
                transition
                duration-200
                ease-in
                hover:scale-110
                text-white
                px-4
                py-2
                rounded-full
                focus:outline-none
              "
            >
              Details ⏭
            </nuxt-link>
          </div>
        </div>
      </div>

      <h3 class="text-lg font-bold p-3">My groups:</h3>

      <nuxt-link to="/meetingChannel/0"
        ><div class="rounded-xl bg-blue-300 shadow-lg p-3 mb-4">
          <h3 class="text-lg">{{ channels[0].title }}</h3>
          <div class="attendees flex self-end">
            <div :key="attendee" v-for="attendee in channels[1].attendees">
              <circle-image
                :imageUrl="attendee.picture"
              />
            </div>
          </div></div
      ></nuxt-link>

      <nuxt-link to="/meetingChannel/1"
        ><div class="rounded-xl bg-yellow-300 shadow-lg p-3 mb-4">
          <h3 class="text-lg">{{ channels[1].title }}</h3>
          <div class="attendees flex self-end">
            <div :key="attendee" v-for="attendee in channels[0].attendees">
              <circle-image
                :imageUrl="attendee.picture"
              />
            </div>
          </div></div
      ></nuxt-link>

      <nuxt-link to="/meetingChannel/2"
        ><div class="rounded-xl bg-blue-200 shadow-lg p-3 mb-4">
          <h3 class="text-lg">{{ channels[2].title }}</h3>
          <div class="attendees flex self-end">
            <div :key="attendee" v-for="attendee in channels[2].attendees">
              <circle-image
                :imageUrl="attendee.picture"
              />
            </div>
          </div></div
      ></nuxt-link>
    </div>
  </div>
</template>

<script>
import CircleImage from '@/components/CircleImage'
export default {
  name: 'pastMeetings.vue',
  components: { CircleImage },
  data() {
    return {
      date: '',
      days: [],
      isHidden: true,
      meetings: [],
      currentMeeting: {},
    }
  },
  mounted: function () {
    this.$tours['myTour'].start()
  },
  computed: {
    dates() {
      return this.days.map((day) => day.date)
    },
    attributes() {
      return this.dates.map((date) => ({
        highlight: true,
        dates: date,
      }))
    },
    channels() {
      return this.$store.state.channels.channels[0]
    }



  },
  methods: {
    onDayClick(day) {
      console.log(day.date)
      const idx = this.days.findIndex((d) => d.id === day.id)
      if (idx >= 0) {
        // this.days.splice(idx, 1);
        // Show meeting
        this.currentMeeting = this.meetings.find(meeting => meeting.date === day.id)
        this.isHidden = false
        let dayString = String(day.date).split(' ')
        this.date = dayString[0] + ' ' + dayString[1] + ' ' + dayString[2]
      } else {
        // Do nothing or add meeting if the date is in the future
      }
    },
  },

  created() {
    this.meetings = this.$store.state.meetings[0]
    this.meetings.forEach(meeting => this.days.push({id: meeting.date, date: meeting.date}))

  },
}
</script>

<style scoped></style>

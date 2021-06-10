<template>
  <div class="md:w-1/2">
    <div class="flex justify-center">
    <no-ssr>
      <v-calendar is-expanded :attributes="attributes" @dayclick="onDayClick" />
    </no-ssr>
    </div>

    <div class="mt-3 bg-white rounded-xl shadow-lg" v-bind:class="{ hidden: isHidden}">
      <h3 class="text-xl font-light mx-5 py-2">{{date}}</h3>
      <div class="mx-5">
      <div class="flex justify-between">
        <h1 class="text-xl font-bold font-montserrat">
          Brainstorm meeting
        </h1>
      </div>
      <div class="flex">
        <span class="text-light">10:00 - 11:00</span>
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
          to="/meeting/1"
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

    <nuxt-link to="/meetingChannel/1"><div class="rounded-xl bg-blue-300 shadow-lg p-3 mb-4">
      <h3 class="text-lg">Staff meeting</h3>
      <div class="attendees flex self-end">
        <circle-image
          imageUrl="https://randomuser.me/api/portraits/men/46.jpg"
        />
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
    </div></nuxt-link>

      <nuxt-link to="/meetingChannel/1"><div class="rounded-xl bg-yellow-300 shadow-lg p-3 mb-4">
      <h3 class="text-lg">Team meeting</h3>
      <div class="attendees flex self-end">
        <circle-image
          imageUrl="https://randomuser.me/api/portraits/men/46.jpg"
        />
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
      </div></nuxt-link>

        <nuxt-link to="/meetingChannel/1"><div class="rounded-xl bg-blue-200 shadow-lg p-3 mb-4">
      <h3 class="text-lg">Group meeting</h3>
      <div class="attendees flex self-end">
        <circle-image
          imageUrl="https://randomuser.me/api/portraits/men/46.jpg"
        />
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
        </div></nuxt-link>
  </div>
</template>

<script>
import CircleImage from '@/components/CircleImage'
export default {
  name: 'pastMeetings.vue',
  components: { CircleImage },
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

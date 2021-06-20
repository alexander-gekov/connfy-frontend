<template>
  <div
    class="
      bg-gradient-to-bl
      from-orange
      to-orange-light
      rounded-lg
      p-5
      shadow-lg
      flex flex-col
    "
  >
    <div class="flex justify-between items-baseline">
      <h1 class="text-white text-lg font-bold font-montserrat">
        {{ meeting.title }}
      </h1>
      <span class="text-white text-light">{{ meeting.date }}</span>
    </div>
    <div class="flex">
      <span class="text-white text-light">{{ meeting.start_time }} - {{ meeting.end_time }}</span>
    </div>
        <div class="flex flex-col">
      <span class="text-white">2.5 km</span>
      <span class="text-white">Rachelsmolen 1</span>
    </div>
    <div class="flex justify-between items-baseline mt-5">
      <div class="attendees flex self-end">
        <div :key="attendee" v-for="attendee in meeting.attendees">
        <circle-image
          :imageUrl="attendee.picture"
        />
        </div>
      <span class="text-white text-sm ml-2">+ 2 more</span>
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
</template>

<script lang="ts">
// import { Meeting } from '../_providers/Meeting/Meeting'
export default {
  props: {
    meeting: Object,
  },
}
</script>

<style></style>

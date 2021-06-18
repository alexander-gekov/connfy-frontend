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
      <h1 class="text-white text-xl font-bold font-montserrat">
        Brainstorm meeting
      </h1>
      <span class="text-white text-light">Today</span>
    </div>
    <div class="flex">
      <span class="text-white text-light">10:00 - 11:00</span>
    </div>
    <div class="flex flex-col">
      <span class="text-white">2.5 km</span>
      <span class="text-white">Rachelsmolen 1</span>
    </div>
    <div class="flex justify-between items-baseline mt-3">
      <div class="attendees flex self-center items-center">
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
import { Meeting } from '../_providers/Meeting/Meeting'
export default {
  props: {
    meeting: Meeting,
  },
}
</script>

<style></style>

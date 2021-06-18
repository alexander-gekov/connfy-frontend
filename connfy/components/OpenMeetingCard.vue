<template>
  <div class="rounded-xl shadow-lg bg-white flex flex-col">
    <div id="map-wrap" class="rounded-xl" style="height: 180px">
      <no-ssr>
        <l-map :zoom="16" :center="[51.411164486772115, 5.457615316908337]">
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
        </l-map>
      </no-ssr>
    </div>

    <div class="p-4 pt-2">
      <h2 class="text-xl font-light">{{ meeting.title }}</h2>
      <div class="flex flex-row justify-between">
        <div class="flex flex-col">
          <h3><font-awesome-icon :icon="['far', 'clock']" />
            {{ meeting.duration }}</h3>
          <h3>@ {{ meeting.date }}</h3>
        </div>
        <div class="flex flex-col">
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
            Details
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'openMeetingCard.vue',
  props: {
    meeting: Object
  },

}
</script>

<style scoped></style>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="font-bold text-2xl">Brainstorm Meeting</div>
    <div class="text-xl mt-5">Description/Agenda</div>
    <p class="text-gray-600">
      This meeting is about brainstorming new ideas for our project and
      discussing which ones make it to the final version.
    </p>
    <div class="flex justify-start mt-5">
      <button
        class="
          bg-orange
          px-4
          py-2
          rounded-full
          transform
          transition
          duration-200
          ease-in
          hover:scale-110
          shadow-lg
          text-white
          focus:outline-none
          mr-5
        "
      >
        Private Notes
      </button>
      <button
        class="
          bg-orange
          px-4
          py-2
          rounded-full
          transform
          transition
          duration-200
          ease-in
          hover:scale-110
          shadow-lg
          text-white
          focus:outline-none
        "
      >
        Shared Notes
      </button>
    </div>
    <div class="flex flex-col mt-5">
      <div class="flex py-1 justify-between items-center">
        <div class="flex items-center">
          <circle-image
            imageUrl="https://randomuser.me/api/portraits/men/46.jpg"
          />
          <div class="text-lg ml-5">John Doe</div>
        </div>
        <div class="text-green-500">Accepted</div>
      </div>
      <hr />
      <div class="flex py-1 justify-between items-center">
        <div class="flex items-center">
          <circle-image
            imageUrl="https://randomuser.me/api/portraits/men/49.jpg"
          />
          <div class="text-lg ml-5">Why Tho</div>
        </div>
        <div class="text-green-500">Accepted</div>
      </div>
      <hr />
      <div class="flex py-1 justify-between items-center">
        <div class="flex items-center">
          <circle-image
            imageUrl="https://randomuser.me/api/portraits/women/87.jpg"
          />
          <div class="text-lg ml-5">Jessica Alba</div>
        </div>
        <div class="text-red-500">Declined</div>
      </div>
    </div>
    <div id="map-wrap" style="height: 200px">
      <no-ssr>
          <l-map :zoom="16" :center="[51.411164486772115, 5.457615316908337]">
            <l-tile-layer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            ></l-tile-layer>
          </l-map>
      </no-ssr>
    </div>
    <div id="app">
      <HereMap 
        ref="map"
        apiKey=""
        appId=""
        appCode=""
        latitude="37"
        longitude="-121"
        zoom="10"
        />
    </div>
    <weather lat="51.411164486772115" lon="5.457615316908337" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CircleImage from '~/components/CircleImage.vue'
import MeetingCard from '~/components/MeetingCard.vue'
import HereMap from '~/components/HereMap.vue'

export default Vue.extend({
  components: { MeetingCard, CircleImage, HereMap },
  mounted() {
    let map = this.$refs.map;
  }
})
</script>

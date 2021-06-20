<template>
  <div>
    <Title class="py-3" pageTitle="Meeting details" />
    <div class="max-w-4xl mx-auto p-5">
      <div class="font-bold text-2xl">{{ meeting.title}}</div>
      <div class="text-xl mt-5">Description/Agenda</div>
      <p class="text-gray-600">
        {{ meeting.description }}
      </p>
      <div class="flex justify-start mt-5">
        <nuxt-link
          to="1/private-notes"
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
        </nuxt-link>
        <nuxt-link
          to="1/shared-notes"
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
        </nuxt-link>
      </div>
      <button
        @click="openMaps"
        class="
          bg-orange
          flex
          items-center
          mt-4
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
        <img class="w-6 mr-2" src="../../../assets/google-maps.svg" /> Open in
        Google Maps
      </button>
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
          <l-map class="z-10" :zoom="16" :center="[51.411164486772115, 5.457615316908337]">
            <l-tile-layer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            ></l-tile-layer>
          </l-map>
        </no-ssr>
      </div>
      <weather lat="51.411164486772115" lon="5.457615316908337" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CircleImage from '~/components/CircleImage.vue'
import MeetingCard from '~/components/MeetingCard.vue'

export default Vue.extend({
  components: { MeetingCard, CircleImage },
  data () {
    return {
      meeting: []
    }
  },
  methods: {
    openMaps() {
      window.open(
        'google.navigation:q=51.415857268131894, 5.447544760390502&mode=w',
        '_system'
      )
    },
  },
  computed: {
    meeting() {
      console.log( this.$route.params.id)
    }
  },
  created() {
    this.meeting = this.$store.getters.getById(this.$route.params.id);
    console.log("Meeting " + this.meeting)

  }
})
</script>

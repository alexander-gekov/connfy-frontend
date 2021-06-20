<template>
<div>
  <Title class="py-3" pageTitle="Meeting channel" />
  <div class="container flex flex-col md:w-1/2">
    <div class="flex flex-row justify-between m-5 mt-0">
      <h2 class="font-bold text-lg">Topics:</h2>
      <h2 class="icon"><font-awesome-icon :icon="['fas', 'angle-right']" /></h2>
    </div>
    <div class="flex flex-row justify-center">
      <nuxt-link to="/topic/1"><topic-tile :name="topics[0].name" :notes="topics[0].numberOfNotes"></topic-tile></nuxt-link>

      <nuxt-link to="/topic/1"><topic-tile :name="topics[1].name" :notes="topics[1].numberOfNotes"></topic-tile></nuxt-link>

      <nuxt-link to="/topic/1"><topic-tile :name="topics[2].name" :notes="topics[2].numberOfNotes"></topic-tile></nuxt-link>
    </div>

    <div class="flex flex-row justify-between m-5">
      <button v-on:click="prev"><h2 class="icon"><font-awesome-icon :icon="['fas', 'angle-left']" /></h2></button>
      <h2>{{  currentMeeting.date_name }}</h2>
      <button v-on:click="next"><h2 class="icon"><font-awesome-icon :icon="['fas', 'angle-right']" /></h2></button>
    </div>

    <div class="flex flex-col mx-4 bg-white shadow-lg rounded-xl p-3 text-lg ">
      <span class="pt-2 underline"> Subject: </span>
      <h1 class="font-light mb-2">{{ currentMeeting.title }}</h1>
      <hr>
      <span class="pt-2 underline"> Agenda: </span>
      <h1 class="font-light mb-2">{{ currentMeeting.description}}</h1>
      <hr>
      <span class="py-2 underline"> Participants: </span>
      <div class="attendees flex">
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


    <div class="flex flex-row justify-center items-baseline m-auto mt-8 lg:mt-2 text-base">
      <button class="rounded-full shadow-lg bg-orange py-3 px-4 mx-3">
        Personal notes
      </button>
      <button class="rounded-full shadow-lg bg-blue py-3 px-4 mx-3">
        Shared notes
      </button>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import topicTile from '@/components/TopicTile'
import CircleImage from '@/components/CircleImage'
export default {
  name: '_id.vue',
  components: { topicTile, CircleImage },
  data() {
    return {
      topics: [{name: "Vacation", numberOfNotes: 6}, {name: "Sprint", numberOfNotes: 3},{name: "Salary", numberOfNotes: 8}],
      currentMeeting: {}
    }

  },
  computed: {
    meetings() {
      return this.$store.state.meetings[0]
    }
  },
  created() {
    this.currentMeeting = this.meetings[0]
  },
  methods: {
    prev() {
      let nextId = this.currentMeeting.id + 1
      if (this.meetings.length > nextId) {
        this.currentMeeting = this.meetings[nextId]
      }
    },
    next() {
      if (this.currentMeeting.id - 1 >= 0) {
        let nextId = this.currentMeeting.id - 1
        this.currentMeeting = this.meetings[nextId]
      }
    }
  }

}
</script>

<style scoped>

</style>

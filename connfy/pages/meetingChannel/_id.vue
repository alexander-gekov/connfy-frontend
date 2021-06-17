<template>
  <div class="container flex flex-col md:w-1/2">
    <div class="flex flex-row justify-between m-5">
      <h2 class="font-bold text-lg">Topics:</h2>
      <h2 class="icon"><font-awesome-icon :icon="['fas', 'angle-right']" /></h2>
    </div>
    <div class="flex flex-row justify-center">
      <nuxt-link to="/topic/1"><topic-tile :name="topicName" :notes="numberOfNotes"></topic-tile></nuxt-link>

      <nuxt-link to="/topic/1"><topic-tile :name="topicName" :notes="numberOfNotes"></topic-tile></nuxt-link>

      <nuxt-link to="/topic/1"><topic-tile :name="topicName" :notes="numberOfNotes"></topic-tile></nuxt-link>
    </div>

    <div class="flex flex-row justify-between m-5">
      <h2 class="icon"><font-awesome-icon :icon="['fas', 'angle-left']" /></h2>
      <h2>18 May, 2021:</h2>
      <h2 class="icon"><font-awesome-icon :icon="['fas', 'angle-right']" /></h2>
    </div>

    <div class="flex flex-col mx-4 bg-white shadow-lg rounded-xl p-3 text-lg ">
      <span class="pt-2 underline"> Subject: </span>
      <h1 class="font-light mb-2">Discuss transition to new office.</h1>
      <hr>
      <span class="pt-2 underline"> Agenda: </span>
      <h1 class="font-light mb-2">Set dates to move tech devices.</h1>
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
</template>

<script>
import topicTile from '@/components/TopicTile'
import CircleImage from '@/components/CircleImage'
export default {
  name: '_id.vue',
  components: { topicTile, CircleImage },
  data() {
    return {
      topicName: 'Vacation',
      numberOfNotes: 12,
    }
  },
}
</script>

<style scoped>

</style>

<template>
  <div class="container flex flex-col md:w-1/2">
    <div class="flex flex-row justify-between m-5">
      <h2>Topics:</h2>
      <h2 class="icon"><font-awesome-icon :icon="['fas', 'angle-right']" /></h2>
    </div>
    <div class="flex flex-row justify-center">
      <nuxt-link to="/topic/1"
        ><topic-tile :name="topicName"></topic-tile
      ></nuxt-link>

      <nuxt-link to="/topic/1"
        ><topic-tile :name="topicName"></topic-tile
      ></nuxt-link>

      <nuxt-link to="/topic/1"
        ><topic-tile :name="topicName"></topic-tile
      ></nuxt-link>
    </div>

    <div class="flex flex-row justify-between m-5">
      <h2 class="icon"><font-awesome-icon :icon="['fas', 'angle-left']" /></h2>
      <h2>18 May, 2021:</h2>
      <h2 class="icon"><font-awesome-icon :icon="['fas', 'angle-right']" /></h2>
    </div>

    <div class="flex flex-col mx-5">
      <span class="pt-2 underline"> Subject: </span>
      <h1 class="text-lg font-bold">Discuss transition to new office.</h1>

      <span class="pt-2 underline"> Agenda: </span>
      <h1>Set dates to move tech devices.</h1>

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
    </div>

    <div
      class="flex flex-row justify-center items-baseline m-auto mt-16 lg:mt-2"
    >
      <button class="rounded-full shadow-md bg-yellow-500 p-4 mx-3">
        Personal notes
      </button>
      <button class="rounded-full shadow-md bg-blue-500 p-4 mx-3">
        Shared notes
      </button>
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
    }
  },
}
</script>

<style scoped>
.square {
  width: 28vw;
  height: 28vw;
}
</style>

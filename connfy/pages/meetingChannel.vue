<template>
  <div class="container">
    <div class="flex flex-row justify-between m-5">
      <h2>Topics:</h2>
      <h2 class="icon"><font-awesome-icon :icon="['fas', 'angle-right']" /></h2>
    </div>

    <div class="flex flex-row justify-center">
      <topic-tile :name="topicName"></topic-tile>

      <topic-tile :name="topicName"></topic-tile>

      <topic-tile :name="topicName"></topic-tile>
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
      <div class="flex flex-row">
        <img
          class="object-cover h-8 w-8 rounded-full border border-yellow-400"
          src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
        />
        <img
          class="object-cover h-8 w-8 rounded-full border border-yellow-400"
          src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
        />
        <img
          class="object-cover h-8 w-8 rounded-full border border-yellow-400"
          src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
        />
      </div>
    </div>

    <div class="flex flex-row justify-center absolute bottom-5 left-5">
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
import topicTile from '@/components/topicTile'

export default {
  name: 'MeetingChannel.vue',
  components: { topicTile },
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

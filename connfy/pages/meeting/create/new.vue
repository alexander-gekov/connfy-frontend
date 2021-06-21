<template>
  <div class="h-screen">
    <Title class="py-3" pageTitle="Create meeting" />
    <div class="flex flex-col items-center max-w-4xl mx-auto">
      <formulate-form @submit="submitData" v-model="formData">
        <formulate-input
          type="text"
          label="Subject"
          name="title"
          placeholder="Subject of meeting"
        />
        <formulate-input
          type="textarea"
          label="Agenda/Description"
          name="description"
          placeholder="Subject of meeting"
        />
        <formulate-input type="date" name="date" label="Date" />
        <div class="flex row">
          <formulate-input type="time" name="start_time" label="Start Time" />
          <formulate-input type="time" name="end_time" label="End Time" />
        </div>
        <formulate-input
          type="text"
          label="Starting Location"
          name="startingLocation"
          placeholder="Rachelsmolen 1, Eindhoven"
        />
        <formulate-input
          type="checkbox"
          label="Save as a template"
          name="saveAsTemplate"
        />
      </formulate-form>
      <div class="flex flex-col justify-center mt-10">
        <!-- <button
          class="
            bg-white
            border-2
            text-center
            border-orange
            rounded-full
            text-orange-dark
            focus:outline-none
            px-4
            py-2
            shadow-lg
            m-3
          "
        >
          Generate Route
        </button> -->
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
            m-3
          "
          v-on:click="submitData"
        >
          Create meeting
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  created() {
    this.$geolocation.getCurrentPosition().then((position) => {
      this.formData.coordinates = position.coords
      console.log(position.coords)
    })
  },
  data() {
    return {
      formData: {
        id: 4,
        title: '',
        description: '',
        date: '',
        attendees: [
          {
            name: 'Aleksandar Gekov',
            picture: 'https://randomuser.me/api/portraits/men/46.jpg',
            email: 'aleksandar.gekov@fake-email.com',
            accepted: true,
          },
          {
            name: 'Viktor Naydenov',
            picture: 'https://randomuser.me/api/portraits/men/64.jpg',
            email: 'viktor.naydneov@fake-email.com',
            accepted: true,
          },
          {
            name: 'Yulia Krusharska',
            picture: 'https://randomuser.me/api/portraits/women/46.jpg',
            email: 'yulia.krusharksa@fake-email.com',
            accepted: false,
          },
        ],
        start_time: '',
        end_time: '',
        startingLocation: '',
        // TODO: add Route model
        route: {},
        coordinates: {},
        notes: [],
      },
    }
  },
  methods: {
    submitData() {
      this.$store.commit('add', this.formData)
      this.$router.push('/')
    },
  },
})
</script>

<style></style>

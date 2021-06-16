<template>
<div>
  <Title class="py-3" pageTitle="Create meeting" />
  <div class="flex flex-col items-center max-w-4xl mx-auto">
    <formulate-form @submit="submitData" v-model="formData">
      <formulate-input
        type="text"
        label="Subject"
        name="subject"
        placeholder="Subject of meeting"
      />
      <formulate-input
        type="textarea"
        label="Agenda/Description"
        name="description"
        placeholder="Subject of meeting"
      />
      <formulate-input
        type="datetime-local"
        name="startTime"
        label="Start Time"
      />
      <formulate-input type="datetime-local" name="endTime" label="End Time" />
      <formulate-input
        type="text"
        label="Starting Location"
        name="startingLocation"
        placeholder="Rachelsmolen 1, Eindhoven"
      />
    </formulate-form>
    <div class="flex flex-col justify-center mt-10">
      <button
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
          m-3
        "
      >
        Create meeting
      </button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Attendee } from '~/_providers/Meeting/Attendee'
export default Vue.extend({
  data() {
    return {
      formData: {
        subject: '',
        description: '',
        participants: [] as Attendee[],
        startTime: '',
        endTime: '',
        startingLocation: '',
        // TODO: add Route model
        route: {},
      },
    }
  },
  methods: {
    submitData() {},
  },
})
</script>

<style></style>

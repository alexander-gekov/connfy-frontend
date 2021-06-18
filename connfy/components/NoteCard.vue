<template>
  <div class="m-1 mb-5 p-1 pt-2 flex flex-col justify-center align-items-center rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg square">
    <div class="flex flex-row justify-between mx-3">
      <h2 class="text-lg text-white">{{ note.date }}</h2>
      <div class="flex flex-row pt-1">


        <CategoriesModal :topic="note.topic"/>
        <button class="" v-on:click="onEdit(note)" type="button"><font-awesome-icon :icon="['far', 'edit']"/></button>

      </div>
    </div>
    <h3 class="text-left m-auto font-light text-sm px-3 py-1">{{ note.content}}</h3>
    <h3 class="text-sm m-auto font-bold text-white">{{ note.author }}</h3>
  </div>
</template>

<script>
import CategoriesModal from '@/components/modals/CategoriesModal'
export default {
  name: "noteCard.vue",
  components: {
    CategoriesModal
  },
  props: {
    note: Object,
  },
  data() {
    return {}
  },
  methods: {
    onEdit(note) {
      console.log("Here")
      this.$emit('edit-clicked', note)
    }
  }
}
</script>

<style scoped>

</style>

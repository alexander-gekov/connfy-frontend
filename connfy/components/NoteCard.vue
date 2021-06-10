<template>
  <div class="m-1 mb-5 p-1 pt-2 flex flex-col justify-center align-items-center rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg square">
    <div class="flex flex-row justify-between mx-3">
      <h2 class="text-lg text-white">11 May</h2>
      <div class="flex flex-row pt-1">


        <CategoriesModal/>
        <button class="" type="button"><font-awesome-icon :icon="['far', 'edit']"/></button>

      </div>
    </div>
    <h3 class="text-left m-auto font-light text-sm px-3 py-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris erat, fermentum quis scelerisque </h3>
    <h3 class="text-sm m-auto font-bold text-white">John Doe</h3>
  </div>
</template>

<script>
import CategoriesModal from '@/components/modals/CategoriesModal'
export default {
name: "noteCard.vue",
  components: {
    CategoriesModal
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <button class="mx-2" type="button" v-on:click="toggleModal()">
      <font-awesome-icon :icon="['far', 'bookmark']"/>
    </button>
    <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

          <!--body-->
          <div class="relative p-6 flex-auto items-center flex flex-col justify-center">
            <div class="text-lg font-bold text-center my-4">
              + Add new topic
            </div>
            <div class="text-center font-bold text-blue border-t border-solid border-blueGray-200 py-2">
              Current topic
            </div>
           <div class="text-center border-t border-solid border-blueGray-200 py-4">
              Topic 1
           </div>
            <div class="text-center border-t border-solid border-blueGray-200 py-4">
              Topic 2
            </div>
            <div class="text-center border-t border-solid border-blueGray-200 py-4">
              Topic 3
            </div>
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Close
            </button>
            <button class="text-blue background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
export default {
  name: "CategoriesModal",
  props: {
    showModal: Boolean,
  },
  data() {
    return {

    }
  },
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
    }
  }
}
</script>

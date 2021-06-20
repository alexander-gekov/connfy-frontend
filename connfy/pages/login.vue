<template>
<div class="flex flex-col justify-center max-w-4xl mx-auto px-5 bg-white">

  <div class="mb-4 mx-auto">
      <img class="relative inset-0 w-48 h-48 object-cover rounded-lg" src="../static/icon.png">
  </div>
  <div class="mb-4">
    <label class="block text-md font-light mb-2" for="username">Username</label>
    <input class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="username" id="" placeholder="Username">
  </div>
  <div class="mb-4">
    <label class="block text-md font-light mb-2" for="password">Password</label>
    <input class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" id="" placeholder="Password">
  </div>
  <div class="flex items-center justify-between mb-5">
    <nuxt-link to="/open-meetings">
      <button class="bg-orange-light text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="button">
      LOGIN
      </button>
    </nuxt-link>
    <a class="inline-block align-baseline font-light text-sm text-orange hover:text-indigo-500" href="#">
      Forgot Password?
    </a>
  </div>
  <p class="text-center text-md font-light">Don't have an account? <a class="font-light text-md text-orange">Create</a></p>
</div>
</template>

<script>
export default {
  layout: 'notes',
}
</script>


<style scoped>

</style>

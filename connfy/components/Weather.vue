<template>
  <div
    class="
      bg-blue
      h-32
      mt-5
      px-6
      py-4
      rounded-lg
      shadow-lg
      flex
      justify-between
      items-center
    "
  >
    <div class="flex flex-col md:flex-row">
      <h1 class="text-white text-2xl font-bold mr-4">
        {{ Math.round(weather.main.temp) }} °C
      </h1>
      <h3 class="text-white text-lg mr-4">{{ weather.weather[0].main }}</h3>
      <img
        :src="`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`"
        alt=""
        class="w-10"
      />
    </div>
    <div class="flex flex-col float-right">
      <div class="text-white text-lg">{{ weather.name }}</div>
      <div class="text-white text-sm">updated 1 min ago</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      weather: {
        weather: [
          {
            id: '',
            main: '',
            description: '',
            icon: '',
          },
        ],
        main: {
          temp: '',
        },
        name: '',
      },
    }
  },
  created() {
    axios
      .post(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=814fd1338161d019346743c5ae6c4d04&units=metric`
      )
      .then((response) => {
        this.weather = response.data
      })
  },
  computed: {
    icon() {
      return this.weather.weather[0].icon
    },
  },
  props: ['lat', 'lon'],
}
</script>

<style></style>

<template>
<div class="flex justify-between p-1">
    <div class="flex-grow text-center p-1">
        <div class="block px-3 py-2 rounded-md text-base font-medium mx-auto">
            <NuxtLink to="/pastMeetings"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="30px" height="30px" ><linearGradient id="T916tadNOpJibEhZepnjFa" x1="32" x2="32" y1="42.333" y2="53.365" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#T916tadNOpJibEhZepnjFa)" d="M37 47L33 47 33 43 31 43 31 47 27 47 27 49 31 49 31 53 33 53 33 49 37 49z"></path><linearGradient id="T916tadNOpJibEhZepnjFb" x1="32" x2="32" y1="5.5" y2="58.751" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#T916tadNOpJibEhZepnjFb)" d="M47,10h-1V9c0-1.654-1.346-3-3-3h-3c-1.654,0-3,1.346-3,3v1H27V9c0-1.654-1.346-3-3-3h-3 c-1.654,0-3,1.346-3,3v1h-1c-2.757,0-5,2.243-5,5v29c0,2.757,2.243,5,5,5h5.051c0.503,5.046,4.773,9,9.949,9s9.446-3.954,9.949-9H47 c2.757,0,5-2.243,5-5V15C52,12.243,49.757,10,47,10z M39,9c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v4c0,0.552-0.448,1-1,1h-3 c-0.552,0-1-0.448-1-1V9z M20,9c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v4c0,0.552-0.448,1-1,1h-3c-0.552,0-1-0.448-1-1V9z M17,12h1v1c0,1.654,1.346,3,3,3h3c1.654,0,3-1.346,3-3v-1h10v1c0,1.654,1.346,3,3,3h3c1.654,0,3-1.346,3-3v-1h1 c1.654,0,3,1.346,3,3v3H14v-3C14,13.346,15.346,12,17,12z M32,38c-3.691,0-6.915,2.016-8.647,5H18V20h28v23h-5.353 C38.915,40.016,35.691,38,32,38z M14,44V20h2v23c0,1.103,0.897,2,2,2h4.461c-0.203,0.642-0.342,1.31-0.411,2H17 C15.346,47,14,45.654,14,44z M32,56c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S36.411,56,32,56z M47,47h-5.051 c-0.069-0.69-0.208-1.358-0.411-2H46c1.103,0,2-0.897,2-2V20h2v24C50,45.654,48.654,47,47,47z"></path><linearGradient id="T916tadNOpJibEhZepnjFc" x1="32" x2="32" y1="22" y2="24.5" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#T916tadNOpJibEhZepnjFc)" d="M20 22H44V24H20z"></path></svg></NuxtLink>
        </div>
    </div>
    <div class="flex-grow text-center p-1">
        <div class="block px-3 py-2 rounded-md text-base font-medium">
            <NuxtLink to="/open-meetings"><h3 class="icon"><font-awesome-icon :icon="['fas', 'calendar-alt']" /></h3></NuxtLink>
        </div>
    </div>
    <div class="flex-grow text-center p-1">
        <div class="block px-3 py-2 rounded-md text-base font-medium">
            <NuxtLink to="/upcoming-meetings"><h3 class="icon"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></h3></NuxtLink>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    previousPage: {type: String}
  }
}
</script>
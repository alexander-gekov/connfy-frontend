<template>
<div class="flex justify-between p-1">
    <div class="flex-grow text-center p-1">
        <div class="block px-3 py-2 rounded-md text-base font-medium">
            <NuxtLink to="/pastMeetings"><h2 class="icon"><font-awesome-icon :icon="['fas', 'sticky-note']" /></h2></NuxtLink>
        </div>
    </div>
    <div class="flex-grow text-center p-1">
        <div class="block px-3 py-2 rounded-md text-base font-medium">
            <NuxtLink to="/open-meetings"><h2 class="icon"><font-awesome-icon :icon="['fas', 'calendar-alt']" /></h2></NuxtLink>
        </div>
    </div>
    <div class="flex-grow text-center p-1">
        <div class="block px-3 py-2 rounded-md text-base font-medium">
            <NuxtLink to="/upcoming-meetings"><h2 class="icon"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></h2></NuxtLink>
        </div>
    </div>
</div>
</template>

<script>
export default {
}
</script>
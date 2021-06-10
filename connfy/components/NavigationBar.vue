<template>
<div class="flex justify-between p-1">
    <div class="flex-grow text-center p-1">
        <div class="block px-3 py-2 rounded-md text-base font-medium">
            <NuxtLink to="/"><h2 class="icon"><font-awesome-icon :icon="['fas', 'sticky-note']" /></h2></NuxtLink>
        </div>
    </div>
    <div class="flex-grow text-center p-1">
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium">
            <h2 class="icon"><font-awesome-icon :icon="['fas', 'calendar-alt']" /></h2>
        </a>
    </div>
    <div class="flex-grow text-center p-1">
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium">
            <h2 class="icon"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></h2>
        </a>
    </div>
</div>
</template>

<script>
export default {
}
</script>
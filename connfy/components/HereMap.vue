<template>
    <div ref="map" style="width: 100vw; height: 100vh"></div>
</template>

<script>
export default {
    name: "HereMap",
    data() {
        return {
            platform: {},
            map: {},
            routingService: {}
        }
    },
    props: {
        apiKey: String,
        appId: String,
        appCode: String,
        latitude: String,
        longitude: String,
        zoom: String
    },
    created() {
        this.platform = H.service.Platform({
            "apikey": this.apiKey
        });
        this.routingService = this.platform.getRoutingService();
    },
    mounted() {
        let defaultLayers = this.platform.createDefaultLayers();
        this.map = new H.Map(
            this.$refs.map,
            defaultLayers.vector.normal.map,
            {
                zoom: this.zoom,
                center: { lat: this.latitude, lng: this.longitude}
            }
        )
    },
    methods: {
        drawRoute(start, finish) {
            this.routingService.calculateRoute(
                {
                    "mode": "fastest;pedestrian;traffic:disabled",
                    "waypoint0": `${start.lat},${start.lng}`,
                    "waypoint1": `${finish.lat},${finish.lng}`,
                    "representation": "display"
                },
                data => {
                    if(data.response.route.length > 0) {
                        let lineString = new H.geo.LineString();
                        data.response.route[0].shape.forEach(point => {

                        })
                    }
                },
                error => {
                    console.error(error);
                }
            );
        },
    }
}
</script>

<style>

</style>
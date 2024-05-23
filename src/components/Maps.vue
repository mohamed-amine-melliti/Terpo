<template>
  <div class="text-center">
    <h1>Hello Maps</h1>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: "Maps",

  mounted() {
    var map = L.map("map").setView([54.39696,24.45118], 12);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    navigator.geolocation.watchPosition(success, error);

    function success(pos) {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const accuracy = pos.coords.accuracy;
      let marker = L.marker({ lat, lng });
      marker.addTo(map);
      let circle = L.circle({ lat, lng }, { raduis: accuracy }).addTo(map);
      map.fitBounds(circle.getBounds());
    }
  },
};
</script>

<style>
#map {
  height: 90vh;
  width: 90%;
  margin: 100px auto;
  border-radius: 20px;
}
</style>

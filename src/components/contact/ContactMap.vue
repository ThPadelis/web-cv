<template>
  <l-map :zoom="zoom" :center="center" :options="mapOptions" class="leaflet-map">
    <l-tile-layer :url="url" :attribution="attribution" :subdomains="subdomains" />
    <l-marker :lat-lng="markerLatLng">
      <l-tooltip>
        <div class="p-2">
          <h6 class="font-weight-bold">Padelis Theodosiou</h6>
          <p class="mb-0">Thessaloniki, Greece</p>
        </div>
      </l-tooltip>
    </l-marker>
  </l-map>
</template>

<script>
import { latLng, Icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  data() {
    return {
      zoom: 12,
      center: latLng(40.6253732, 22.950601),
      url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      markerLatLng: latLng(40.6253732, 22.950601),
      mapOptions: {
        zoomSnap: 0.5,
        zoomControl: false
      }
    };
  }
};
</script>
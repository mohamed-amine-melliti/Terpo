<template>
  <div id="Services" class="py-5">
    <div class="cards-list container">
      <RouterLink
        v-for="(ser, i) in services"
        :key="i"
        :to="getServiceRoute(ser)"
        class="routerlink"
      >
        <div class="card item1">
          <div class="card_image">
            <img class="img-fluid" :src="ser.src" />
          </div>
          <div class="card_title title-white">
            <p>{{ ser.name }}</p>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  methods: {},
  computed: {
    services() {
      return JSON.parse(JSON.stringify(this.$store.state.services));
    },
  },
  async mounted() {
    this.$store.dispatch("getServices");
    // console.log(this.services)
  },
  methods: {
    getServiceRoute(service) {
      if (service.rout === "WO") {
        return { name: "fuel", params: { id: service.rout } };
      } else if (service.rout === "TZ") {
        return { name: "TZ", params: { id: service.rout } };
      }
       else if (service.rout === "SH") {
        return { name: "SH", params: { id: service.rout } };
      } 
       else if (service.rout === "KO") {
        return { name: "KO", params: { id: service.rout } };
      } 
       else if (service.rout === "GH") {
        return { name: "GH", params: { id: service.rout } };
      } 
      else {
        return { name: "fuel", params: { id: service.rout } };
      }
    },
  },
};
</script>

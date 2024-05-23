<template lang="">
  <div>
    <hero />
    <Services />
    <price />
    <!-- <maps /> -->
    
  </div>
</template>
<script>
// import { RouterLink } from "vue-router";
import hero from "../components/Hero.vue"
import Services from "../components/Services.vue"
import price from "../components/Pricing.vue"
// import maps from "../components/Maps.vue"

export default {
  components: {
    hero,
    Services,
    price,
    // maps,
  }
}
</script>
<style lang="">
  
</style>
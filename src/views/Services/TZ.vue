<template >
  <div class="bg-gray" id="Servic">
    <div v-if="products.length > 0" class="container-fluid" dir="rtl">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gap-6 my-5">
        <RouterLink class="col rounded-lg mb-4 routerlink"  v-for="( item , i) in  products" :key="i" :to="{name : 'productInfo' , params:{ id : item.id }}" >
          <div class="bg-white rounded-3 shadow-lg p-2">
            <div class="position-relative">
              <img
                :src="item.src"
                alt="Product Image"
                class="rounded-3 w-100 img-fluid object-cover rounded-lg"
              />
              <div
                class="position-absolute top-0 end-0 bg-success stock text-white m-3 px-2 py-1 rounded-pill">
                متاح {{ $route.params.id }}
              </div>
            </div>
            <div class="m-3">
              <h3 class="text-xl fw-bold mb-3">{{ item.name }}</h3>
              <p class="text-sm text-gray mb-3">
                المادة: <span class="text-success fw-bold">متاحة للشراء</span>
              </p>
              <p class="text-gray mb-3">ألسعر: ${{ item.price }}</p>
              <div class="size-chart mb-3">                
              </div>
              <button :product="product" class="add-to-cart btn text-success px-4 py-2 rounded-md w-100">
                عرض تفاصيل المنتج
              </button>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
    <div v-else mode="alert" class="bg-info rounded-3 w-50 mx-auto text-center py-4 my-5 fw-bold">
      <p>لا يوجد خدمات مضافة مؤخرا</p>
    </div>
  </div>
</template>
<script>
// import axios from "axios";

export default {
  name: "servic",
  data() {
    return {
        
    }
  },
  computed: {
    products(){
      return  JSON.parse(JSON.stringify(this.$store.state.products)) 
    },
  },
  async mounted() {
    this.$store.dispatch('getProducts')
  }
};
</script>

<style>
#Servic img {
  width: 500px !important;
  height: 300px !important;
}

#Servic .add-to-cart {
  background-color: var(--c-sky);
}
#Servic  .routerlink {
  color:#4e89bde3;;
}
</style>

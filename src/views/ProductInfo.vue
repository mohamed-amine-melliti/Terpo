<template lang="">
  <div class="my-5 product" dir="rtl">
    <div class="container" v-if="product">
      <!-- <span>product page {{ product.id }}</span> -->
      <div class="row">
        <div class="col order-2 order-lg-1 mt-4 mt-lg-0">
          <h2 class="mb-4 fw-bold">اسم المنتج : {{ product.name }}</h2>
          <p>المنتج : {{ product.description }}</p>
          <span class="d-block mb-4">السعر : <small class="fw-bold">{{ product.price }} AED</small> </span>
          <span class="d-block mb-4">الحجم : <small class="fw-bold">{{ product.weight }}</small> </span>
          <span class="d-block mb-4">العلامة التجارية : <small class="fw-bold"> {{ product.brand }}</small> 
          </span>
          <span class="d-block">نوع المركبة : <small class="fw-bold"> {{ product.service_type }} </small> </span>
          <Router-link :to="{name : 'payment' , params:{ id : product.id }}">
            <button class="bg-dark w-100 rounded-2 p-3 mt-3 text-white fw-bold ">اضافة للحقيبة</button>
          </Router-link>
        </div>
        <div class="col-1 d-none d-lg-block"></div>
        <div class="col-12 col-lg-6 text-center order-1 order-lg-2">
          <img :src="product.src" class="img-fluid rounded-4 shadow-lg" />
        </div>
      </div>
      <div class="row"> 
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "productInfo",
  data() {
    return {
      productId: this.$route.params.id,
    };
  },
  computed: {
    product() {
      return JSON.parse(JSON.stringify(this.$store.state.product));
    },
  },
  mounted() {
    this.$store.dispatch("getproduct", this.productId);
  },
};
</script>

<style>
.product img {
  width: 500px;
  height: 500px !important;
}
.product h2 {
    color: #3ba49d;
}
.product span {
    font-size: 24px;
}
.product small {
    font-size:20px;
    color: #3ba49d;

}
</style>

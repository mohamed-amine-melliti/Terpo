<template dir="rtl">
  <div id="fuelproduct" class="fuelproduct my-5 container hv-100">
    <div class="row shadow-lg rounded-4">
      <div class="fuelproduct_img col-12 col-lg-6 p-4">
        <img
          src="https://media.istockphoto.com/id/1407850410/photo/gas-station-work.jpg?s=612x612&w=0&k=20&c=X6eXNAzVghqCovPtdVS2KiXBv5YjzDaADmhgqiEVP08="
          class="img-fluid rounded-2 w-100 h-100"
        />
      </div>
      <div class="col-12 col-lg-6 p-4" dir="rtl">
        <h2>{{ fuelproduct.name }}</h2>
        <div class="d-flex flex-column gap-4 mt-3">
          <span
            >السعر : <small>{{ fuelproduct.price }} USD</small></span
          >
          <span
            >الخصائص : <small>{{ fuelproduct.prop }}</small></span
          >
          <span
            >الاستخدام : <small>{{ fuelproduct.use }}</small></span
          >
          <span
            >الشرح : <small>{{ fuelproduct.decs }}</small></span
          >
          <div class="">
            <label for="quantity">الكمية:</label>
            <select v-model="selectedOption" @change="updateQuantity">
              <option v-for="option in quantityOptions" :value="option">
                {{ option }}
              </option>
            </select>
            <input
              type="number"
              v-model="quantity"
              min="1"
              value="1"
              disabled
            />
          </div>
          <Router-link
            :to="{ name: 'payment', params: { id: fuelproduct.id } }"
          >
            <button
              class="bg-dark w-100 rounded-2 p-3 mt-3 text-white fw-bold"
              @click="AddToCart()"
            >
              اضافة للحقيبة
            </button>
          </Router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fuelproductInfo",
  data() {
    return {
      fuelproductId: this.$route.params.id,
      quantity: 1,
      quantityOptions: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 90, 100, 110, 120, 130, 140, 150,
      ],
    };
  },
  computed: {
    fuelproduct() {
      return JSON.parse(JSON.stringify(this.$store.state.fuelproduct));
    },
  },
  created() {
    this.selectedOption = 1;
  },
  methods: {
    updateQuantity() {
      this.quantity = parseInt(this.selectedOption);
    },
    AddToCart() {
      this.$store.dispatch("addtocart", {
        product: this.fuelproduct,
        quantity: 1,
      });
    },
  },
  mounted() {
    this.$store.dispatch("getfuelproduct", this.fuelproductId);
  },
};
</script>

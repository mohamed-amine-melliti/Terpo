<template>
  <div class="cart row justify-content-center m-0" dir="rtl">
    <div class="col-12 mt-5 mb-5">
      <div class="card">
        <div class="card-header bg-dark p-3">
          <div class="d-flex justify-content-between">
            <h2 class="text-white m-0">
              عدد العناصر في الحقيبة
              <small class="text-warning">{{
                cart2.length > 0 ? `(${cart2.length})` : 0
              }}</small>
              عنصر
            </h2>
            <button
              v-if="cart2.length > 0"
              class="btn btn-danger mt-0 btn-sm"
              @click="emptyCart"
            >
              <!-- <i class="fa-solid fa-trash"></i> -->
              <span>افراغ الحقيبة</span>
            </button>
          </div>
        </div>
        <div class="card-body p-0">
          <table class="table cart-table mb-0 text-center">
            <thead>
              <tr>
                <th>احداث</th>
                <th>المنتج</th>
                <th>اسم المنتج</th>
                <th>السعر</th>
                <th>الكمية</th>
                <th>السعر الكامل</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in cart2" :key="index">
                <td>
                  <button
                    class="bg-danger text-white fw-bold p-1 px-2 rounded-2 shadow-lg"
                    @click="removeFromCart(index)"
                  >
                    <!-- <i class="fa fa-trash-alt"></i> -->
                    حذف
                  </button>
                </td>
                <td>
                  <div class="product-img">
                    {{ data.product.prod }}
                    <!-- <img :src="data.image" alt="" /> -->
                  </div>
                </td>
                <td>
                  <div class="">
                    <p>{{ data.product.name }}</p>
                  </div>
                </td>
                <td>${{ data.product.price }}</td>
                <td>
                  <div class="d-flex">
                    <button
                      class="bg-danger px-2"
                      type="button"
                      @click="decreaseQuantity(data.product.name)"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      name="quantity"
                      class="text-center fw-bold bg-body-secondary"
                      v-model="data.quantity"
                      disabled
                    />
                    <button
                      class="bg-info px-2"
                      type="button"
                      @click="increaseQuantity(data.product.name)"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td class="text-right">
                  ${{ data.quantity * data.product.price }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colspan="4"></th>
                <th>
                  Items in Cart:
                  <span class="text-danger"> {{ Countitems }}</span>
                </th>
                <th class="text-right">
                  Total Price:
                  <span class="text-danger">
                    {{ CountTotalprice }} $ all monye</span
                  >
                </th>
              </tr>
            </tfoot>
          </table>
          <div v-if="cart2.length === 0" class="cart-empty">
            <!-- <i class="fa fa-shopping-cart"></i> -->
            <p>Your Cart Is empty</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    increaseQuantity(nameprod) {
      let items = JSON.parse(JSON.stringify(this.$store.state.cart[0]))
        console.log(items);
        let itemclick = items.find(element => {   
          element.product.name === nameprod
        });      
    },
    decreaseQuantity(index) {
      console.log(index);
    },
    removeFromCart(index) {
      if (
        window.confirm(
          "Are you sure you want to remove this item from your cart?"
        )
      ) {
        this.cart.splice(index, 1);
      }
    },
    emptyCart() {
      if (window.confirm("Remove all items from your cart?")) {
        this.cart = [];
      }
    },
  },
  computed: {
    cart2() {
      return JSON.parse(JSON.stringify(this.$store.state.cart));
    },
    Countitems() {
      return JSON.parse(JSON.stringify(this.$store.getters.Countitems));
    },
    CountTotalprice() {
      return JSON.parse(JSON.stringify(this.$store.getters.CountTotalprice));
    },
  },
};
</script>

<style scoped>
.cart h2 {
  font-size: 20px;
}
</style>

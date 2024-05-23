<template >
    <div class="container fuel">
        <div class="row row-cols-1 row-cols-lg-2 my-5" dir="rtl">
          <div class="product-card d-flex justify-content-center col" v-for="(fuel , i ) in fuelproducts" :key="i" >
            <div class="product-info"> 
              <span href="#" class="free-shipping">متاح للشراء</span>
              <h3 class="product-name">
               {{ fuel.name }}
              </h3>
              <p class="regular-price">15$</p>
              <div class="stock-status"></div>
              <p class="discount-price">{{ fuel.price }}$</p>
              <RouterLink :to="{name : 'fuelproductInfo' , params:{ id : fuel.id }}">
                  <a href="#" class="add-to-cart">Add to cart</a>
              </RouterLink>
              
            </div>
          </div>
       </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
  name: "fuel",
  data () {
    return {

    }
  },
  computed: {
    fuelproducts() {
       return JSON.parse(JSON.stringify(this.$store.state.fuelproducts))
    }
  },
  mounted () {
    this.$store.dispatch("getFuel")
  }
};
</script>

<style>
body {
  background: #eef2f9;
}
.fuel .product-card {
    margin-top: 50px;
    display: flex;
    color: #191847;
}
.fuel .product-info {
    min-width: 555px;
    box-shadow: #dbe2ee 0 0 20px 5px;
    background: white;
    padding: 30px;
    border-radius: 20px;
}
@media (max-width: 1200px) {
    .product-info  {
        min-width: 430px;
  }
}
@media (max-width: 991px) {
    .product-info  {
        min-width: 530px;
  }
}
@media (max-width: 600px) {
    .product-info  {
        min-width: 360px !important;
  }
}

.fuel img:hover {
  transform: scale(1.05);
  transition: 0.5s;
}

.free-shipping {
  display: inline-block;
  background: #191847;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 14px;
  color: white;
  font-weight: 400;
}

.product-name {
  margin: 10px 0 20px 0;
  font-size: 22px;
}

.regular-price {
  text-decoration: line-through;
}

.discount-price {
  display: inline-block;
  font-size: 40px;
  font-weight: 700;
}

.offer-info {
  font-size: 14px;
  color: gray;
}

.add-to-cart {
  display: inline-block;
  width: 100%;
  background: #191847;
  color: white;
  padding: 15px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  box-shadow: #e2e9f3 0 5px;
  margin: 20px 0;
}
.add-to-cart ion-icon {
  font-size: 30px;
  margin-bottom: -8px;
}
.add-to-cart:hover {
  background: #e2e9f3;
  box-shadow: #191847 0 5px;
  color: #191847;
}
.add-to-cart:hover ion-icon {
  transform: rotate(360deg);
}

.fuel .stock {
  display: flex;
  align-items: center;
  gap: 10px;
}
.stock-status {
  width: 14px;
  height: 14px;
  background: #00d98b;
  border-radius: 50%;
}
.stock-info {
  font-size: 14px;
  font-weight: 600;
  color: black;
}

.fuel .buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.fuel .button {
  /* width: 200px; */
  color: #191847;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding: 15px;
  border: solid #dfe6f0 2px;
  border-radius: 10px;
}

</style>

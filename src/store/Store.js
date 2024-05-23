// store.js
import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    products: [],
    services: [],
    product: [],
    fuelproducts: [],
    fuelproduct: [],
    cart: [],
  },
  getters: {
    Countitems(state) {
      return state.cart.length;
    },
    CountTotalprice(state) {
      let totalPrice = 0;

      state.cart.forEach((element) => {
        totalPrice += element.product.price * element.quantity;
      });
      return totalPrice;
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_SERVICES(state, services) {
      state.services = services;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
    SET_FUEL(state, fuelproducts) {
      state.fuelproducts = fuelproducts;
    },
    SET_FUELPRODUCT(state, fuelproduct) {
      state.fuelproduct = fuelproduct;
    },
    ADD_TO_CART(state, { product, quantity }) {
      let produxtExist = state.cart.find((item) => {
        return item.product.name === product.name;
      });
      if (produxtExist) {
        produxtExist.quantity += quantity;
        return;
      }
      state.cart.push({
        product,
        quantity,
      });
    },
  },
  actions: {
    getProducts({ commit }) {
      axios.get("http://localhost:3000/service2?rout=TZ").then((respond) => {
        commit("SET_PRODUCTS", respond.data[0].product);
      });
    },
    getServices({ commit }) {
      axios.get("http://localhost:3000/service2").then((respond) => {
        commit("SET_SERVICES", respond.data);
      });
    },
    getproduct({ commit }, productId) {
      axios.get(`http://localhost:3000/oil?id=${productId}`).then((respond) => {
        // console.log(respond.data[0])
        commit("SET_PRODUCT", respond.data[0]);
      });
    },
    getFuel({ commit }) {
      axios.get("http://localhost:3000/service2?rout=WO").then((respond) => {
        // console.log(respond.data[0].product)
        commit("SET_FUEL", respond.data[0].product);
      });
    },
    getfuelproduct({ commit }, fuelproductId) {
      axios
        .get(`http://localhost:3000/fuel?id=${fuelproductId}`)
        .then((respond) => {
          commit("SET_FUELPRODUCT", respond.data[0]);
        });
    },
    addtocart({ commit }, { product, quantity }) {
      commit("ADD_TO_CART", { product, quantity });
      // axios.post("")
    },
  },
});

export default store;

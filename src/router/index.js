import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Price from "../views/Price.vue";
import Signup from "../views/Signup.vue";
import Profile from "../views/Profile.vue";
import fuel from "../views/fuel.vue";
import ProductInfo from "../views/ProductInfo.vue";
import payment from "../views/payment.vue";
import TZ from "../views/Services/TZ.vue";
import SH from "../views/Services/SH.vue";
import KO from "../views/Services/KO.vue";
import GH from "../views/Services/GH.vue"; 
import fuelproductInfo from "../views/fuelproductInfo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/fuel/:id",
      name: "fuel",
      component: fuel,
    },
    {
      path: "/TZ",
      name: "TZ",
      component: TZ,
    },
    {
      path: "/SH",
      name: "SH",
      component: SH,
    },
    {
      path: "/KO",
      name: "KO",
      component: KO,
    },
    {
      path: "/GH",
      name: "GH",
      component: GH,
    },
    {
      path: "/fuelproductInfo/:id",
      name: "fuelproductInfo",
      component: fuelproductInfo,
    },
    {
      path: "/productInfo/:id",
      name: "productInfo",
      component: ProductInfo,
    },
    {
      path: "/price/:id",
      name: "price",
      component: Price,
    },
    {
      path: "/payment/:id",
      name: "payment",
      component: payment,
    },

    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
  ],
});

export default router;

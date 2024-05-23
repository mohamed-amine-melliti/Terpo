<template>
  <header>
    <div id="Navbar">
      <nav class="navbar navbar-expand-md py-3">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center" href="#">
            <span class="d-flex justify-content-center align-items-center me-2">
              <img
                class="navbar-logo"
                src="https://s3-alpha-sig.figma.com/img/f812/890c/02aa11f5702484d918632cb769cf9541?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YI0avI7qhE3V1HTtEAMylZDDkyDL99XXyvJENGv6~cAy8yxpKTcBdPBQYUmTQLapB7B3OmX8YVFj3BuYpSMkoDuK-6XcygXK~sTokcFdt~HWhaWCw2~YnQyo~Ax0Xqv7iF-sLiJDGIeQyenvxQdJjIdrS~1XUvFnYm709Q8V2hv69ApuM3SB9OWJiqWrjKlj66sjWoovpNs9NPk1Q6218O62dsKqcHPfYxYJHNaFX-OkAmMYIG-HJ9U~RaMCelnPYMTC224T02GFuUR9f2B5fU2O8tq4W9gcaOw3Y5wZgZFp4sPa9VmRMe2VPBQ5ibU3on4Z9ffMqIIxO8829SnmyA__"
              />
            </span>
          </a>
          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navcol-4"
          >
            <span class="visually-hidden">Toggle navigation</span>
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              id="menu"
              data-name="Flat Color"
              xmlns="http://www.w3.org/2000/svg"
              class="icon flat-color"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="secondary"
                  d="M21,13H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
                  style="fill: #2ca9bc"
                ></path>
                <path
                  id="primary"
                  d="M21,19H9a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2ZM15,7H3A1,1,0,0,1,3,5H15a1,1,0,0,1,0,2Z"
                  style="fill: #000000"
                ></path>
              </g>
            </svg>
          </button>
          <div
            id="navcol-4"
            class="ps-4 ps-md-0 collapse navbar-collapse flex-grow-0 order-md-first"
          >
            <ul class="navbar-nav me-auto">
              <RouterLink to="/" class="routerlink">
                <li class="nav-item pe-2 pe-lg-4">
                  <a class="nav-link active" href="#">الرئيسية</a>
                </li>
              </RouterLink>
              <RouterLink to="/servic" class="routerlink"
                ><li class="nav-item pe-2 pe-lg-4">
                  <a class="nav-link active" href="#">خدماتنا</a>
                </li></RouterLink
              >
              <RouterLink to="/price" class="routerlink"
                ><li class="nav-item pe-2 pe-lg-4">
                  <a class="nav-link active" href="#">باقات تيربو</a>
                </li></RouterLink
              >
              <RouterLink to="/about" class="routerlink"
                ><li class="nav-item">
                  <a class="nav-link active" href="#">من نحن </a>
                </li></RouterLink
              >
            </ul>
            <div class="d-md-none my-2">
              <button class="btn btn-light me-2" type="button ">
                انشاء حساب
              </button>
              <button class="btn btn-primary" type="button">تسجيل دخول</button>
            </div>
            <div></div>
          </div>
          <div v-if="!showusernavbar" class="signinupbtn">
            <RouterLink to="/signup" class="routerlink">
              <button
                class="btn btn-light me-2 btn-nav"
                @click="opensigninonclick()"
                type="button"
              >
                انشاء حساب
              </button>
            </RouterLink>
            <RouterLink to="/signup" class="routerlink">
              <a
                class="btn btn-p rimary bg-success"
                @click="opensignuponclick()"
                role="button"
                href="#"
                >تسجيل دخول</a
              >
            </RouterLink>
          </div>
          <router-link to="/profile" class="routerlink">
            <div v-if="showusernavbar" class="avatar-nav">
              <img
                src="https://www.w3schools.com/w3images/avatar2.png"
                class="avatar"
              />
              <span class="avatar-name">{{ userName }}</span>
            </div>
          </router-link>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
// import { mapState, mapGetters, mapMutations } from "vuex";
// import Navbar from "./components/NavBar.vue"; DB

export default {
  data() {
    return {
      message: "ahd king",
      showusernavbar: false,
      userName: "",
    };
  },
  mounted() {
    this.toggleimage();
    let user = localStorage.getItem("userinfo");
    if (user) {
      this.userName = JSON.parse(user).name;
    }
  },
  methods: {
    opensignuponclick() {
      const banner = document.getElementById("banner");
      const loginContainer = document.getElementById("login-container");
      const signupContainer = document.getElementById("signup-container");

      banner.style.transform = "translateX(0%)";
      signupContainer.style.transform = "scale(0)";
      loginContainer.style.transform = "scale(1)";
    },
    opensigninonclick() {
      const banner = document.getElementById("banner");
      const loginContainer = document.getElementById("login-container");
      const signupContainer = document.getElementById("signup-container");

      banner.style.transform = "translateX(-100%) ";
      loginContainer.style.transform = "scale(0)";
      signupContainer.style.transform = "scale(1)";
    },
    toggleimage() {
      let user = localStorage.getItem("userinfo");
      if (user) {
        this.showusernavbar = true;
      } else {
        this.showusernavbar = false;
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.toggleimage();
    next();
  },
};
</script>

<style scoped>
.avatar-name {
  background-color: black;
  font-weight: bold;
  color: #04b1d7;
  font-size: 14px;
  margin-left: 7px;
  padding: 6px;
  border-radius: 11px;
}
</style>

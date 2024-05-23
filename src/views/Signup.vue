<template lang="">
  <div id="Signin" class="Signin">
    <div class="form-container">
      <div class="login-container" id="login-container">
        <h1 class="title fw-bold text-warning fs-4">تسجيل دخول لتيربو</h1>

        <p class="desc text-center fs-6">
          سجل معنا للحصول على افضل الباقات والعروض والدعم ولاك
        </p>
        <span class="signup-text">
          ليس لديك حساب؟<a
            id="signup-form-toggler"
            @click="togglesigninandsignup()"
          >
            انشئ حساب جديد</a
          ></span
        >

        <div class="input-container w-100 mt-2">
          <input
            type="email"
            class=""
            placeholder="أدخل الايميل"
            autofocus="on"
            v-model="emailLog"
          />
        </div>
        <div class="input-container w-100 mt-2">
          <input
            type="password"
            class=""
            placeholder="أدخل الباسوورد"
            autofocus="on"
            v-model="passwordLog"
          />
        </div>
        <div class="account-controls w-100">
          <a href="">نسيت حسابك؟</a>
          <button @click="LoginData()">
            ارسال <i class="fas fa-solid fa-angle-right"></i>
          </button>
        </div>
        <span class="line"></span>
        <span class="other-login-text">بامكانك التسجيل بحساباتك مع</span>
        <div class="social-logins">
          <button class="social-login">
            <i style="color: #1e7bf2" class="fas fa-brands fa-facebook-f"></i>
          </button>
          <button class="social-login">
            <i style="color: #ea4335" class="fas fa-brands fa-google"></i>
          </button>
        </div>
      </div>
      <div class="placeholder-banner" id="banner">
        <img
          src="https://plus.unsplash.com/premium_photo-1675810094948-d4634e766d2b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          class="banner"
        />
      </div>

      <!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

      <div class="signup-container" id="signup-container">
        <h1 class="title fw-bold text-warning fs-4">انشاء حساب جديد</h1>
        <p class="desc text-center fs-6">
          سجل معنا للحصول على افضل الباقات والعروض والدعم ولاك
        </p>
        <span class="signup-text"
          >لديك حساب بالفعل
          <a id="login-form-toggler" @click="togglesigninandsignup()"
            >سجل هنا</a
          ></span
        >

        <div class="input-container w-100">
          <input type="text" placeholder=" الأسم الكامل" v-model="nameRig" />
          <p class="error-feedback" v-if="v$.nameRig.$error">
            {{ v$.nameRig.$errors[0].$message }}
          </p>
        </div>
        <div class="input-container w-100">
          <input type="phone" placeholder="0956368284" v-model="phoneRig" />
          <p class="error-feedback" v-if="v$.nameRig.$error">
            {{ v$.nameRig.$errors[0].$message }}
          </p>
        </div>
        <div class="input-container w-100">
          <input type="email" placeholder="الأيميل" v-model="emailRig" />
          <p class="error-feedback" v-if="v$.emailRig.$error">
            {{ v$.emailRig.$errors[0].$message }}
          </p>
        </div>
        <div class="input-container w-100">
          <input
            type="password"
            placeholder="الباسوورد"
            v-model="passwordRig"
          />
          <p class="error-feedback" v-if="v$.passwordRig.$error">
            {{ v$.passwordRig.$errors[0].$message }}
          </p>
        </div>
        <div class="account-controls">
          <button @click="submitData()">
            ارسال <i class="fas fa-solid fa-angle-right"></i>
          </button>
        </div>

        <span class="line"></span>
        <span class="other-login-text">بامكانك التسجيل بحساباتك مع</span>
        <div class="social-logins">
          <button class="social-login">
            <i style="color: #1e7bf2" class="fas fa-brands fa-facebook-f"></i>
          </button>
          <button class="social-login">
            <i style="color: #ea4335" class="fas fa-brands fa-google"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import axios from "axios";
export default {
  name: "signup",
  data() {
    return {
      v$: useVuelidate(),
      nameRig: "",
      passwordRig: "",
      emailRig: "",
      phoneRig: "",
      passwordLog: "",
      emailLog: "",
    };
  },
  validations() {
    return {
      nameRig: { required, minLength: minLength(10) },
      passwordRig: { required },
      emailRig: { required, email },
    };
  },
  mounted() {
    let user = localStorage.getItem("userinfo");
    if (user) {
      //this.$router.push("/");
      this.emailLog = JSON.parse(user).email;
      this.passwordLog = JSON.parse(user).password;
    }
  },
  methods: {
    async submitData() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let result = await axios.post("http://localhost:3000/users", {
          name: this.nameRig,
          email: this.emailRig,
          phone: this.phoneRig,
          password: this.passwordRig,
        });
        if (result.status == 201) {
          console.log("yes send");
          localStorage.setItem("userinfo", JSON.stringify(result.data));
          this.$router.push("/");
        } else {
          console.log("no send");
        }
      } else {
        console.log("error");
      }
    },
    async LoginData() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.emailLog}&&password=${this.passwordLog}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("userinfo", JSON.stringify(result.data[0]));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "تم تسجيل الدخول بنجاح",
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          this.$router.push("/");
          // window.location.reload();
        }, 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "!لقد ادخلت بيانات خاطئة عزيزي",
          // footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    },
    togglesigninandsignup() {
      // Write your JavaScript code here
      const banner = document.getElementById("banner");
      const loginContainer = document.getElementById("login-container");
      const signupContainer = document.getElementById("signup-container");
      const loginToggle = document.getElementById("login-form-toggler");
      const signupToggle = document.getElementById("signup-form-toggler");

      signupToggle.addEventListener("click", () => {
        banner.style.transform = "translateX(-100%)";
        loginContainer.style.transform = "scale(0)";
        signupContainer.style.transform = "scale(1)";
      });
      loginToggle.addEventListener("click", () => {
        banner.style.transform = "translateX(0%)";
        signupContainer.style.transform = "scale(0)";
        loginContainer.style.transform = "scale(1)";
      });
    },
  },
};
</script>

<style>
.error-feedback {
  color: red !important;
  font-size: 12px;
}
</style>

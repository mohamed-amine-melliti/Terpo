<template lang="">
  <div class="">
    <!-- Profile cover start -->
    <section class="mt-4">
      <div class="container">
        <div class="cover">
          <div class="cover-bg p-3">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              class="cover-avatar"
            />
          </div>
          <div class="cover-name p-4">
            <div class="ml-5 pl-5">
              <strong>{{ nameupdate }}</strong>
            </div>
            <div>
              <a
                href="#"
                @click="Logoutuser()"
                class="btn btn-sm btn-danger fw-bold"
                >تسجيل الخروج</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Profile cover end -->
    <!-- Profile Menu Start -->
    <section class="mt-4">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3">
            <div class="profile-card p-3">
              <strong>Account Settings</strong>
              <ul>
                <li><a href="#" class="active">Edit Profile</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#"> Social profiles</a></li>
                <li><a href="#">Notifications </a></li>
                <li><a href="#">Profile Privacy</a></li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-9">
            <div class="profile-card text-end p-3">
              <h3>معلوماتك الشخصية</h3>
              <p>يمكنك التحكم بمعلوماتك بشكل كامل من خلال اللوحة</p>
              <hr class="mb-3" />
              <div class="row align-items-center change-image">
                <div class="col-9">
                  <div class="d-flex align-items-center">
                    <img
                      src="https://www.w3schools.com/w3images/avatar2.png"
                      class="avatar"
                    />
                    <div class="ml-3">
                      <h4 class="d-inline">صورتك الشخصية</h4>
                      <p>
                        يمكنك التعديل من خلال الضغط على تعديل او ازالة الصورة من
                        خلال الضغط عللى حذف
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <a href="#" class="btn btn-sm btn-outline-secondary m-1"
                    >تعديل</a
                  >
                  <a href="#" class="btn btn-sm btn-outline-danger m-1">حذف</a>
                </div>
              </div>

              <h5>التفاصيل الخاصة بك</h5>
              <p>اضف معلوماتك الشخصية وعنوانك</p>
              <form @click.prevent>
                <div class="form-row">
                  <div class="form-group col mb-2">
                    <label for="fname">الأسم الكامل</label>
                    <input
                      type="text"
                      class="form-control"
                      id="fname"
                      placeholder="عهد امقيدح"
                      autocomplete="off"
                      v-model="nameupdate"
                    />
                    <p
                      class="error-feedback float-start"
                      v-if="v$.nameupdate.$error"
                    >
                      {{ v$.nameupdate.$errors[0].$message }}
                    </p>
                  </div>
                  <div class="form-group col mb-2">
                    <label for="phone">الايميل</label>
                    <input
                      type="email"
                      class="form-control"
                      id="phone"
                      placeholder="ahd@gmail.com"
                      autocomplete="off"
                      v-model="emailupdate"
                    />
                    <p
                      class="error-feedback float-start"
                      v-if="v$.emailupdate.$error"
                    >
                      {{ v$.emailupdate.$errors[0].$message }}
                    </p>
                  </div>
                  <div class="form-group col mb-2">
                    <label for="phone">الرقم الشخصي</label>
                    <input
                      type="phone"
                      class="form-control"
                      id="phone"
                      placeholder="09563518182"
                      autocomplete="off"
                      v-model="phoneupdate"
                    />
                    <p
                      class="error-feedback float-start"
                      v-if="v$.phoneupdate.$error"
                    >
                      {{ v$.phoneupdate.$errors[0].$message }}
                    </p>
                  </div>
                  <div class="form-group col mb-2">
                    <label for="phone"> الباسوورد</label>
                    <input
                      type="password"
                      class="form-control"
                      id="phone"
                      placeholder="0000000000"
                      autocomplete="off"
                      v-model="passwordupdate"
                    />
                    <p
                      class="error-feedback float-start"
                      v-if="v$.passwordupdate.$error"
                    >
                      {{ v$.passwordupdate.$errors[0].$message }}
                    </p>
                  </div>
                  <div class="form-group col mb-2">
                    <label for="country">المدينة</label>
                    <select
                      type="text"
                      class="form-control"
                      id="country"
                      v-model="cityupdate"
                    >
                      <option>العين</option>
                      <option>الشارقة</option>
                      <option>السسيم</option>
                    </select>
                    <p
                      class="error-feedback float-start"
                      v-if="v$.cityupdate.$error"
                    >
                      {{ v$.cityupdate.$errors[0].$message }}
                    </p>
                  </div>
                  <div class="form-group col mb-2">
                    <label for="state">الشارع</label>
                    <select
                      class="form-control"
                      id="state"
                      v-model="streetupdate"
                    >
                      <option>يمين</option>
                      <option>يسار</option>
                      <option>فوق</option>
                    </select>
                    <p
                      class="error-feedback float-start"
                      v-if="v$.streetupdate.$error"
                    >
                      {{ v$.streetupdate.$errors[0].$message }}
                    </p>
                  </div>
                </div>
                <button
                  type="submit"
                  @click="updateuserdetails()"
                  class="btn btn-primary"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import axios from "axios";

export default {
  name: "Profile",
  data() {
    return {
      v$: useVuelidate(),
      nameupdate: "",
      phoneupdate: "",
      passwordupdate: "",
      emailupdate: "",
      addressupdate: "",
      cityupdate: "",
      streetupdate: "",
      userId: "",
    };
  },
  validations() {
    return {
      nameupdate: { required, minLength: minLength(4) },
      phoneupdate: { required },
      passwordupdate: { required, minLength: minLength(6) },
      emailupdate: { required, email },
      cityupdate: { required },
      streetupdate: { required },
    };
  },
  mounted() {
    let user = localStorage.getItem("userinfo");
    if (user) {
      this.nameupdate = JSON.parse(user).name;
      this.emailupdate = JSON.parse(user).email;
      this.phoneupdate = JSON.parse(user).phone;
      this.passwordupdate = JSON.parse(user).password;
      this.userId = JSON.parse(user).id;
    } else {
      this.$router.push("/");
    }
  },
  methods: {
    async updateuserdetails() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("updated");
        let result = await axios.put(
          `http://localhost:3000/users/${this.userId}`,
          {
            name: this.nameupdate,
            email: this.emailupdate,
            phone: this.phoneupdate,
            password: this.passwordupdate,
          }
        );
        if (result.status == 200) {
          console.log("yes")
          localStorage.setItem("userinfo", JSON.stringify(result.data));
          Swal.fire({
            position: "center",
            icon: "success",
            title: "تم تعديل البيانات بنجاح",
            showConfirmButton: false,
            timer: 2000,
          });
          setTimeout(() => {
            this.$router.push("/");
          }, 2000);
        }
      } else {
        console.log("not validated");
        // console.log(this.v$.$errors[0]);
      }
    },
    Logoutuser() {
      localStorage.clear();
      // this.$router.push("/signup");
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "تم تسجيل الخروج بنجاح",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        this.$router.push("/signup");
      }, 2000);
      // window.location.reload();
    },
  },
};
</script>

<style scope="">
body {
  background: #f6f4fc;
}
.cover {
  display: flex;
  flex-direction: column;
}

.cover-bg {
  background: url("https://media.istockphoto.com/id/1304509203/photo/man-after-washing-wipes-white-car-with-a-rag-at-car-wash.jpg?s=612x612&w=0&k=20&c=_GKYMFSq_xF4QzOD9fg-S5hNNZXEJIIQA1M1x-81_7A=")
    center/cover;
  border-radius: 10px 10px 0 0;
  position: relative;
  min-height: 220px;
}

.cover-name {
  background: #fff;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cover-avatar {
  width: 105px;
  border-radius: 129px;
  border: 4px solid var(--c-sky);
  margin-bottom: -299px;
}

.cover-name strong {
  font-size: 20px;
  font-weight: 500;
}

.cover-name p {
  font-size: 12px;
  font-weight: 400;
}
/* 
.cover-name i {
  color: #6c757d;
} */

.profile-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
}

.profile-card strong {
  font-size: 11px;
  text-transform: uppercase;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
}

.profile-card ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.profile-card ul li a {
  color: #475569;
  font-size: 14px;
  display: block;
  padding: 3px 5px;
  border-radius: 5px;
  margin-bottom: 6px;
}

.profile-card ul li a:hover,
.profile-card ul li a.active {
  color: #64748b;
  background: #e2e8f0;
  text-decoration: none;
}

.profile-card h3 {
  font-size: 18px;
}

.profile-card h4 {
  font-size: 16px;
}

.profile-card p {
  font-size: 14px;
  color: #64748b;
}

.profile-card hr {
  margin: 0 -1rem;
}

.profile-card .avatar {
  width: 75px;
  height: 75px;
  border-radius: 50%;
}

.change-image {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1.5rem;
}

.profile-card h5 {
  font-size: 16px;
}
.hero {
  background: #7651ff;
  color: #fff;
}

.hobe {
  background: #1aca9a;
  color: #fff;
}

.hobe-na {
  background: #fcfcfd;
  color: #000;
}

.bor {
  max-width: 250px;
  margin-bottom: -90px;
}

.bg-red {
  background: red;
}

.nav-link {
  text-transform: capitalize;
}

.avatar {
  display: inline-block;
  height: 42px;
  width: 42px;
  background-color: aqua;
  background-size: cover;
  background-repeat: none;
  border-radius: 50%;
  position: relative;
}

.green-dot {
  background: green;
  width: 14px;
  height: 14px;
  border: 3px solid white;
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>

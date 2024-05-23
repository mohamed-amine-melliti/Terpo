<template lang="">
  <div class="py-5 pricing">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 pb-5 pb-lg-0">
          <router-link
            :to="{ name: 'price', params: { id: 1 } }"
            class="routerlink"
          >
            <div class="mycard basic">
              <div class="title">
                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                <h2>الشهري</h2>
              </div>
              <div class="price">
                <h4><sup>$</sup>25</h4>
              </div>
              <div class="option">
                <ul>
                  <li>
                    <i class="fa fa-check" aria-hidden="true"></i> 10 GB Space
                  </li>
                  <li>
                    <i class="fa fa-check" aria-hidden="true"></i> 3 Domain
                    Names
                  </li>
                  <li>
                    <i class="fa fa-check" aria-hidden="true"></i> 20 Email
                    Address
                  </li>
                  <li>
                    <i class="fa fa-times" aria-hidden="true"></i> Live Support
                  </li>
                </ul>
              </div>
              <a
                class="btn btn-light btn-block"
                href="https://codepen.io/collection/XdWJOQ/"
                >Order Now</a
              >
            </div>
          </router-link>
        </div>

        <div class="col-12 col-md-4 pb-5 pb-lg-0">
          <router-link
            :to="{ name: 'price', params: { id: 2 } }"
            class="routerlink"
          >
            <div class="mycard standard">
              <div class="title">
                <i class="fa fa-plane" aria-hidden="true"></i>
                <h2>الأوفر</h2>
              </div>
              <div class="price">
                <h4><sup>usd</sup>50</h4>
              </div>
              <div class="option">
                <ul>
                  <li>
                    <i class="fa fa-check" aria-hidden="true"></i>50 GB Space
                  </li>
                  <li>
                    <i class="fa fa-check" aria-hidden="true"></i> 5 Domain
                    Names
                  </li>
                  <li>
                    <i class="fa fa-times" aria-hidden="true"></i> Unlimited
                    Email Address
                  </li>
                  <li>
                    <i class="fa fa-times" aria-hidden="true"></i> Live Support
                  </li>
                </ul>
              </div>
              <a
                class="btn btn-light btn-block"
                href="https://codepen.io/collection/XdWJOQ/"
                >Order Now</a
              >
            </div>
          </router-link>
        </div>
        <div class="col-12 col-md-4 pb-5 pb-lg-0">
          <router-link
            :to="{ name: 'price', params: { id: 3 } }"
            class="routerlink"
          >
            <div class="mycard premium">
              <div class="title">
                <i class="fa fa-rocket" aria-hidden="true"></i>
                <h2>الأقوى</h2>
              </div>
              <div class="price">
                <h4><sup>$</sup>100</h4>
              </div>
              <div class="option">
                <ul>
                  <li>
                    <i class="fa fa-check" aria-hidden="true"></i> Unlimited GB
                    Space
                  </li>
                  <li>
                    <i class="fa fa-check" aria-hidden="true"></i> 30 Domain
                    Names
                  </li>
                  <li>
                    <i class="fa fa-check" aria-hidden="true"></i> Unlimited
                    Email Address
                  </li>
                  <li>
                    <i class="fa fa-check" aria-hidden="true"></i> Live Support
                  </li>
                </ul>
              </div>
              <a
                class="btn btn-light btn-block"
                href="https://codepen.io/collection/XdWJOQ/"
                >Order Now</a
              >
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "price",
};
</script>
<style lang=""></style>

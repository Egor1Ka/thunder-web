<script setup lang="ts">
import Instagram from "./svg/instagram.vue";
import Telegram from "./svg/telegram.vue";
import Tiktok from "./svg/tiktok.vue";
import Zsu from "./svg/zsu.vue";
import Youtube from "./svg/youtube.vue";
import {
  SOTIAL_MEDIA,
  DABL_LEAGUE_SOCIAL_MEDIA,
} from "~/helpers/constansts/links";
</script>

<template>
  <footer class="bg-black text-center text-lg-start text-white">
    <div class="container">
      <div class="container p-4">
        <div class="row my-4">
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div
              class="d-flex align-items-center justify-content-center mb-4 flex-column"
            >
              <a :href="SOTIAL_MEDIA.site" class="text-decoration-none">
                <NuxtImg
                  class="rounded-circle mb-4 mx-auto"
                  src="/images/thunder-logo.jpg"
                  height="70"
                  alt="dabl logo"
                  loading="lazy"
                />
              </a>
              <a :href="DABL_LEAGUE_SOCIAL_MEDIA.telegram">
                <NuxtImg
                  class="rounded-circle mb-4 mx-auto"
                  src="/images/dabl-logo.jpg"
                  height="70"
                  alt="dabl logo"
                  loading="lazy"
                />
              </a>
            </div>

            <p class="text-center">
              Приєднуйся до родини Thunder — стань частиною команди та слідкуй
              за нами в соціальних мережах!
            </p>

            <ul class="list-unstyled d-flex flex-row justify-content-center">
              <li>
                <a class="text-white px-2" href="#!">
                  <i class="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a class="text-white px-2" href="#!">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a class="text-white ps-2" href="#!">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">Social media</h5>
            <section class="mb-4">
              <!-- telegram -->
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                :href="DABL_LEAGUE_SOCIAL_MEDIA.telegram"
                role="button"
                target="_blank"
                ><Telegram />
              </a>

              <!-- Tiktok -->
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                :href="SOTIAL_MEDIA.tiktok"
                role="button"
                target="_blank"
                ><Tiktok />
              </a>

              <!-- Instagram -->
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                :href="SOTIAL_MEDIA.instagram"
                target="_blank"
                role="button"
              >
                <Instagram />
              </a>
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                :href="SOTIAL_MEDIA.donatZSU"
                target="_blank"
                role="button"
              >
                <Zsu />
              </a>
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                target="_blank"
                :href="SOTIAL_MEDIA.youtube"
                role="button"
                ><Youtube />
              </a>
            </section>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">Contact</h5>

            <ul class="list-unstyled">
              <li>
                <p>Dnipro, Богдана Хмельницкого, 118А</p>
              </li>
              <li>
                <p>
                  <a
                    href="tel:+380989734518"
                    class="text-decoration-none text-white"
                    >+380 (98) 973 4518</a
                  >
                </p>
              </li>
            </ul>
          </div>
          <!--Grid column-->
        </div>
      </div>
    </div>
    <div class="text-center p-3 bottom-gradient">
      © {{ new Date().getFullYear() }} Created by:
      <a class="text-white text-decoration-none" href="https://zaza21.com/"
        >ZAZA 21
      </a>
    </div>
  </footer>
</template>

<style scoped>
.bottom-gradient {
  bottom: 0;
  background: radial-gradient(
      120% 100% at 50% 100%,
      rgba(216, 86, 34, 0.95) 0%,
      rgba(216, 86, 34, 0.65) 45%,
      rgba(216, 86, 34, 0) 75%
    ),
    linear-gradient(0deg, rgba(216, 86, 34, 0.85) 0%, rgba(216, 86, 34, 0) 90%);
  mix-blend-mode: normal;
  z-index: 0;
}
</style>

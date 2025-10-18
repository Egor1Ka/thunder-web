<template>
  <section class="bg-dark text-white bg-hero section-noise">
    <div class="container">
      <!-- ограничиваем ширину и убираем выезды -->
      <!-- Заголовок -->
      <Reveal duration="600">
        <div class="row">
          <div class="col-12 col-md-5 offset-md-7">
            <h3 class="text-uppercase mb-3 fw-bold">
              Step into<br />team territory
            </h3>
          </div>
        </div>
      </Reveal>

      <!-- Блок с картинкой + текстом -->
      <Reveal duration="400" delay="200">
        <div class="row">
          <div class="col-12 col-md-6 offset-md-4">
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <NuxtImg
                  src="/images/into_1.png"
                  class="img-fluid d-block w-100"
                  alt=""
                />
              </div>
              <div class="col-12 col-md-6">
                <p class="mb-0">
                  We dream big, play hard, and move as one — this is team spirit
                  redefined.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <!-- Сетка ниже -->
      <Reveal duration="600" delay="400">
        <div class="row g-3">
          <div class="col-12 col-md-4">
            <NuxtImg
              src="/images/into_4.png"
              class="img-fluid d-block w-100"
              alt=""
            />
          </div>

          <div class="col-12 col-md-5 offset-md-3">
            <div class="row g-3 align-items-start">
              <div class="col-12 col-md-6">
                <NuxtImg
                  src="/images/into_3.png"
                  class="img-fluid d-block w-100"
                  alt=""
                />
              </div>
              <div class="col-12 col-md-6">
                <p class="mb-0">One team. One flight. This is how we rise.</p>
              </div>

              <div class="col-12 col-md-auto">
                <a
                  :href="SOTIAL_MEDIA.instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-outline-light btn-lg w-100 w-md-auto px-4 d-inline-flex align-items-center cta"
                >
                  <span>LEARN MORE</span>
                  <span aria-hidden="true" class="ms-1">→</span>
                </a>
              </div>

              <div class="col-12 col-md-3 ms-md-auto">
                <NuxtImg
                  src="/images/into_2.png"
                  class="img-fluid d-block w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
</template>

<script setup>
import Reveal from "@/components/Reveal.vue";
import { SOTIAL_MEDIA } from "~/helpers/constansts/links";
</script>

<style scoped>
.bg-hero {
  background: linear-gradient(to top, #8a3d12 0%, #0b0b0b 55%);
}

@media (max-width: 768px) {
  .bg-hero {
    background: #0b0b0b !important; /* просто чёрный фон */
  }
}

.cta {
  border-width: 2px;
  border-radius: 0.75rem;
  letter-spacing: 0.04em;
  font-weight: 800;
}
</style>

<template>
  <section class="bg-dark text-white bg-hero section-noise">
    <Reveal duration="600">
      <h3 class="col-12 offset-7 text-uppercase mb-3 fw-bold">
        Step into<br />team territory
      </h3>
    </Reveal>
    <Reveal duration="400" delay="200">
      <div class="col-6 offset-4 row p-0">
        <NuxtImg src="/images/into_1.png" class="col m-0 ps-0 h-100" alt="" />
        <p class="col p-0">
          We dream big, play hard, and move as one — this is team spirit
          redefined.
        </p>
      </div>
    </Reveal>
    <Reveal duration="600" delay="400">
      <div class="row">
        <NuxtImg src="/images/into_4.png" class="col-4 m-0 p-0 ps-0" alt="" />

        <div class="col-5 offset-3 p-0">
          <div class="row">
            <NuxtImg
              src="/images/into_3.png"
              class="col-6 m-0 p-0 pe-1 h-75 img-fluid"
              alt=""
            />
            <p class="col-6 p-0">One team. One flight. This is how we rise.</p>
          </div>

          <div class="row align-items-center">
            <div class="col-auto p-0 mt-5">
              <a
                href="#"
                class="m-0 btn btn-outline-light btn-lg px-4 d-inline-flex align-items-center cta"
              >
                <span>LEARN MORE</span>
                <span aria-hidden="true" class="ms-1">→</span>
              </a>
            </div>

            <NuxtImg
              src="/images/into_2.png"
              class="col-3 m-0 p-0 ps-0 ms-auto img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </Reveal>
  </section>
</template>

<script setup>
import Reveal from "@/components/Reveal.vue";
</script>

<style scoped>
.bg-hero {
  background: linear-gradient(to top, #8a3d12 0%, #0b0b0b 55%);
}
.cta {
  border-width: 2px;
  border-radius: 0.75rem;
  letter-spacing: 0.04em;
  font-weight: 800;
}
</style>

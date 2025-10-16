<template>
  <section class="stage">
    <MainLogo class="img" />
    <div class="container-fluid h-100 content pt-5">
      <div class="row h-100">
        <div class="col-12 mt-5 pt-5">
          <Reveal
            as="h1"
            class="title"
            :duration="800"
            :distance="40"
            direction="up"
            :once="true"
          >
            RISE <span>AN</span> <br />EMPIRE.
          </Reveal>
        </div>

        <div class="col-12 col-lg-7 d-flex flex-column copy">
          <div class="row">
            <div class="col-6">
              <!-- Левые подписи -->
              <Reveal
                as="div"
                class="mb-3"
                :delay="100"
                :duration="600"
                :distance="24"
                direction="up"
              >
                <span class="mb-2 copy">STYLE,</span><br />
                <span class="mb-3 copy">TEAM STRENGTH:</span>
              </Reveal>
            </div>

            <div class="col-6">
              <!-- Абзац справа -->
              <Reveal
                as="p"
                class="copy"
                :delay="200"
                :duration="600"
                :distance="24"
                direction="up"
              >
                We don’t just play – we dictate the pace. We create style and
                fight for every second on the court. We are here to turn the
                game into a legend.
              </Reveal>
            </div>
          </div>

          <!-- Нижний THUNDER -->
          <Reveal
            as="h3"
            class="mt-auto color-black-50 m-0 p-0"
            :delay="400"
            :duration="600"
            :distance="20"
            direction="up"
          >
            THUNDER
          </Reveal>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MainLogo from "@/components/svg/main-logo.vue";
import Reveal from "@/components/Reveal.vue"; // добавляем Reveal
import Header from "~/components/Header.vue";
</script>

<style scoped>
.stage {
  position: relative;
  height: 100dvh;
  background: #000;
  isolation: isolate;
  overflow: hidden;
}
.img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  pointer-events: none;
}
.title {
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: clamp(2.5rem, 8vw, 12rem);
  line-height: 0.9;
  font-weight: 900;
  letter-spacing: 0.02em;
  color: #fff;
  mix-blend-mode: difference; /* MAGIC */
}
.title .accent {
  text-decoration: underline;
  text-decoration-thickness: 0.2em;
  text-underline-offset: 0.08em;
}

/* === мелкие хелперы под сетку === */
.copy {
  color: #cfcfcf;
  z-index: 1;
}
.badge-e {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: inline-grid;
  place-items: center;
  font-weight: 700;
  background: #ff5833;
  color: #fff;
}

.brand-wordmark {
  letter-spacing: 0.06em;
}

@media (min-width: 992px) {
  .copy-wrapper {
    margin-top: 12vh; /* опускаем блок на больших экранах */
    padding-left: clamp(1rem, 3vw, 4rem);
  }
}
</style>

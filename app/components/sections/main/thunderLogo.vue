<template>
  <section class="stage d-flex justify-content-center align-items-center">
    <sircle class="img" />

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xxl-8 text-center">
          <!-- Появление снизу-вверх с задержкой -->
          <Reveal
            as="h2"
            class="title"
            :duration="800"
            :delay="150"
            :distance="36"
            direction="up"
            :threshold="0.15"
            :once="true"
            easing="cubic-bezier(.22,.8,.26,.99)"
          >
            WE’RE THE TEAM THAT’S NOT<br />
            AFRAID TO BE LOUD
          </Reveal>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import sircle from "@/components/svg/sircle.vue";
import Reveal from "@/components/Reveal.vue"; // <-- подключаем
</script>

<style scoped>
.stage {
  position: relative;
  height: 100vh !important;
  background: #000;
  isolation: isolate;
  overflow: hidden;
}
.img {
  position: absolute;
  display: block;
  max-height: 80vh; /* например 60% высоты экрана */
  max-width: 80%; /* ограничение по ширине */
  margin: auto; /* центрирование */
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
  mix-blend-mode: difference;
}
</style>

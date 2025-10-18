<!-- pages/team/index.vue -->
<template>
  <div class="team-page bg-black text-white">
    <!-- HERO: Ми команда -->
    <section class="container text-center py-5">
      <h1 class="display-4 fw-bold text-uppercase mb-3">
        <span class="text-thunder-ghost">THREE</span>
        <span class="text-thunder-accent ms-2">TWO</span>
        <span class="ms-2">ONE</span> — THUNDER!
      </h1>

      <p class="lead text-body-tertiary mx-auto mb-4" style="max-width: 720px">
        Ми — команда. Ми тримаємось разом, боремось за кожну секунду та задаємо
        темп гри. Якщо відчуваєш наш ритм — приєднуйся!
      </p>
    </section>

    <!-- ОРИГІНАЛЬНИЙ БЛОК З КАРУСЕЛЛЮ (НЕ ЧІПАВ) -->
    <div class="container py-4">
      <h2 class="mb-4 text-uppercase fw-bold">Гравці</h2>

      <div
        v-if="pending"
        class="d-flex justify-content-center align-items-center"
        style="height: 50vh"
      >
        <div
          class="spinner-border"
          role="status"
          aria-label="Завантаження"
        ></div>
      </div>

      <div v-else-if="errMsg" class="alert alert-danger">{{ errMsg }}</div>

      <BootstrapCarousel
        v-else
        id="playersCarousel"
        :slides="slides"
        :ride="'carousel'"
        :interval="5000"
        :show-indicators="true"
        :show-controls="true"
        :caption-bg="true"
      >
        <template #caption="{ slide }">
          <h5 class="fw-semibold mb-1">{{ slide.title }}</h5>
          <p class="mb-0">{{ slide.text }}</p>
        </template>
      </BootstrapCarousel>
    </div>

    <div class="u-bleed-line" aria-hidden="true"></div>
    <section class="container text-center">
      <p class="display-6 fw-bold text-uppercase mb-1">Thunder Family</p>
      <p class="text-body-tertiary mb-0">Разом — стиль, сила, швикiсть.</p>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
import BootstrapCarousel from "@/components/Carousel.vue";

// грузим игроков с клиента (чтобы не ждать SSR) и кэшируем
const { data, pending, error } = await useAsyncData(
  "players",
  () => $fetch("/api/players"),
  { server: false } // если хочешь и на сервере — убери эту строку
);

// превращаем игроков в формат слайдов
const slides = computed(() =>
  (data.value ?? []).map((p) => ({
    src: p.photoUrl, // на скрине ключ называется photoUrl
    title: p.fullName, // заголовок
    text: p.description, // подпись
    alt: p.fullName,
    // imgClass: 'object-fit-cover', // уже ставим по умолчанию в компоненте
  }))
);

const errMsg = computed(() =>
  error.value
    ? error.value?.data?.message ||
      error.value?.message ||
      "Не вдалося завантажити гравців"
    : null
);
</script>

<style scoped>
.team-page {
  min-height: 100vh;
}

/* невеликий акцент під референс */
.text-thunder-accent {
  color: #ff6a00;
}
.text-thunder-ghost {
  color: #c3e7ff;
}

.btn {
  border-radius: 50rem;
  transition: all 0.25s ease;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 18px rgba(255, 106, 0, 0.28);
}

.u-bleed-line {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw; /* повна ширина вікна */
  height: 1px; /* товщина лінії */
  background: rgba(255, 255, 255, 0.2); /* колір/прозорість лінії */
  margin: 2rem 0; /* відступи зверху/знизу — налаштуй під себе */
}
</style>

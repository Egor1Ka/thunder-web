<!-- pages/team/index.vue -->
<template>
  <div class="container py-4">
    <h1 class="mb-4">Игроки</h1>

    <div
      v-if="pending"
      class="d-flex justify-content-center align-items-center"
      style="height: 50vh"
    >
      <div class="spinner-border" role="status" aria-label="Загрузка"></div>
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
      "Не удалось загрузить игроков"
    : null
);
</script>

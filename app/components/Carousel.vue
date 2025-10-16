<template>
  <div ref="root" :id="id" class="carousel slide">
    <div v-if="showIndicators && slides.length" class="carousel-indicators">
      <button
        v-for="(_, i) in slides"
        :key="`ind-${i}`"
        type="button"
        :data-bs-target="`#${id}`"
        :data-bs-slide-to="i"
        :class="{ active: i === 0 }"
        :aria-current="i === 0 ? 'true' : undefined"
        :aria-label="`Slide ${i + 1}`"
      />
    </div>

    <div class="carousel-inner">
      <div
        v-for="(s, i) in slides"
        :key="i"
        class="carousel-item"
        :class="{ active: i === 0 }"
        :data-bs-interval="typeof s.interval === 'number' ? s.interval : null"
      >
        <NuxtImg
          :src="s.src"
          :alt="s.alt || s.title || `Slide ${i + 1}`"
          class="carousel-img"
          loading="lazy"
          decoding="async"
        />

        <div
          class="carousel-caption"
          :class="[
            'd-block',
            captionBg ? 'rounded-3 p-3 caption-backdrop' : '',
          ]"
        >
          <slot name="caption" :slide="s" :index="i">
            <h5 v-if="s.title" class="fw-semibold mb-1">{{ s.title }}</h5>
            <p v-if="s.text" class="mb-0">{{ s.text }}</p>
          </slot>
        </div>
      </div>
    </div>

    <!-- Стрелки -->
    <button
      v-if="showControls && slides.length"
      class="carousel-control-prev"
      type="button"
      :data-bs-target="`#${id}`"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      v-if="showControls && slides.length"
      class="carousel-control-next"
      type="button"
      :data-bs-target="`#${id}`"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  id: { type: String, default: "mainCarousel" },
  slides: { type: Array, required: true },
  ride: { type: String, default: "carousel" },
  interval: { type: [Number, Boolean], default: 5000 },
  showIndicators: { type: Boolean, default: true },
  showControls: { type: Boolean, default: true },
  captionBg: { type: Boolean, default: true },
});

const root = ref(null);
let carouselInstance = null;

async function init() {
  if (!root.value || !props.slides?.length) return;
  const { default: Carousel } = await import("bootstrap/js/dist/carousel");
  const options =
    typeof props.interval === "number"
      ? { interval: props.interval, ride: props.ride }
      : { interval: false };
  // пересоздаём при смене слайдов
  carouselInstance?.dispose?.();
  carouselInstance = new Carousel(root.value, options);
}

onMounted(init);
watch(() => props.slides?.length, init);
</script>

<style scoped>
/* полупрозрачный фон под подписью */
.caption-backdrop {
  background: rgba(245, 245, 245, 0.513);
  backdrop-filter: blur(2px);
}

/* ——— LETTERBOX макет без ломки Bootstrap ——— */

/* Высота области показа (под себя: 60–80vh или фиксированные px) */
:global(.carousel),
:global(.carousel-inner),
:global(.carousel-item) {
  height: 70vh;
}

/* Слайд — чёрный фон и относительное позиционирование */
:global(.carousel-item) {
  position: relative;
  background: #000;
}

/* Картинка вписывается целиком, НЕ обрезается, центрируется */
.carousel-img {
  position: absolute;
  inset: 0; /* top/right/bottom/left: 0 */
  width: 100%;
  height: 100%;
  object-fit: contain; /* ключ: без обрезки */
  object-position: center;
  z-index: 1;
}

/* подпись поверх картинки */
:global(.carousel-caption) {
  z-index: 2;
}

:global(.carousel-control-prev-icon),
:global(.carousel-control-next-icon) {
  filter: invert(53%) sepia(88%) saturate(7489%) hue-rotate(2deg)
    brightness(98%) contrast(105%);
}
</style>

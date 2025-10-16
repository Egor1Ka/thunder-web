<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, computed } from "vue";

const props = defineProps({
  as: { type: String, default: "div" }, // какой тег рендерить
  delay: { type: Number, default: 0 }, // мс, задержка
  duration: { type: Number, default: 600 }, // мс, длительность
  threshold: { type: Number, default: 0.2 }, // % видимости
  once: { type: Boolean, default: true }, // только один раз?
  distance: { type: Number, default: 24 }, // px смещения
  direction: { type: String, default: "up" }, // up|down|left|right|none
  easing: { type: String, default: "ease" }, // CSS easing
  startHidden: { type: Boolean, default: true }, // изначально скрыт?
});

const el = ref(null);
const inView = ref(false);
let observer = null;

const tag = computed(() => props.as);

onMounted(async () => {
  await nextTick();
  if (!el.value) return;
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        inView.value = true;
        if (props.once) observer.unobserve(entry.target);
      } else if (!props.once) {
        inView.value = false;
      }
    },
    { threshold: props.threshold }
  );
  observer.observe(el.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <component
    :is="tag"
    ref="el"
    class="rv"
    :class="{ 'rv--in': inView, 'rv--start-hidden': startHidden }"
    :style="{
      '--rv-delay': `${delay}ms`,
      '--rv-dur': `${duration}ms`,
      '--rv-ease': easing,
      '--rv-dist': `${distance}px`,
      '--rv-dir': direction,
    }"
  >
    <slot />
  </component>
</template>

<style scoped>
.rv {
  transition: opacity var(--rv-dur) var(--rv-ease),
    transform var(--rv-dur) var(--rv-ease);
  transition-delay: var(--rv-delay, 0ms);
}

/* стартовое состояние */
.rv.rv--start-hidden {
  opacity: 0;
  transform: translate3d(0, 0, 0);
}
.rv:not(.rv--in).rv--start-hidden {
  transform: translateY(calc(var(--rv-dir) == "up" ? var(--rv-dist): 0))
    translateY(calc(var(--rv-dir) == "down" ? calc(var(--rv-dist) * -1): 0))
    translateX(calc(var(--rv-dir) == "left" ? var(--rv-dist): 0))
    translateX(calc(var(--rv-dir) == "right" ? calc(var(--rv-dist) * -1): 0));
}

/* финал */
.rv.rv--in {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
</style>

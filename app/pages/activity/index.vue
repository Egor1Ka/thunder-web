<template>
  <div class="double-league bg-black text-white">
    <Head>
      <title>{{ pageTitle }}</title>
      <meta
        name="description"
        content="Дабл Ліга — аматорська баскетбольна ліга Дніпра. Стиль, темп і боротьба на кожному сантиметрі паркету."
      />
    </Head>

    <!-- HERO -->
    <Reveal
      as="section"
      class="hero container-xxl px-3 px-md-5 py-5 py-md-6 position-relative overflow-hidden"
      :duration="450"
      direction="up"
    >
      <div class="row align-items-center">
        <div class="col-lg-7">
          <h1 class="display-1 fw-bold lh-1 text-wrap hero-title">
            ДАБЛ<br /><span class="text-accent">ЛІГА.</span>
          </h1>
          <p class="lead mt-4 col-11 col-md-10">
            Ми не просто граємо — ми задаємо ритм. Створюємо стиль і боремось за
            кожну секунду. Дабл Ліга — місце, де аматори стають легендами
            Дніпра.
          </p>
          <div class="mt-4 d-flex gap-3">
            <NuxtLink to="#join" class="btn btn-lg btn-accent fw-semibold"
              >Приєднатися</NuxtLink
            >
            <NuxtLink
              to="#about"
              class="btn btn-lg btn-outline-accent text-white"
              >Дізнатися більше</NuxtLink
            >
          </div>
        </div>
        <div class="col-lg-5 position-relative mt-5 mt-lg-0">
          <!-- декоративні кільця -->
          <div class="rings position-relative">
            <span class="ring ring-lg"></span>
            <span class="ring ring-md"></span>
            <span class="ring ring-sm"></span>
            <span class="ring ring-xs"></span>

            <!-- Центральне зображення -->
            <div class="ring-center">
              <NuxtImg
                src="/images/dabl-logo.jpg"
                alt="Double League Logo"
                class="logo-img"
                height="200"
                width="200"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Reveal>

    <!-- ABOUT -->
    <Reveal
      as="section"
      id="about"
      class="container-xxl px-3 px-md-5 py-5 py-md-6 border-top border-dark"
      :delay="100"
      :duration="420"
      direction="up"
    >
      <div class="row g-4 align-items-start">
        <div class="col-lg-6">
          <h2 class="display-5 fw-bold mb-3">
            Ліга в Дніпрі для <span class="text-accent">баскетболу</span>
          </h2>
          <p class="fs-5 mb-3">
            Дабл Ліга — це сезонні турніри 5×5 та 3×3, жива статистика,
            професійна фото/відеозйомка, чесні правила і атмосфера великої гри.
            Команди формують заявки, грають регулярку та плей-оф, а фанати
            отримують емоції, що заряджають на тиждень.
          </p>
          <ul class="list-unstyled fs-5 mb-0">
            <li class="mb-2">• Рівні дивізіони: від новачків до хардкору</li>
            <li class="mb-2">• Суддівство та офіційний протокол</li>
            <li class="mb-2">• MVP туру, кращі хайлайти, статистика</li>
            <li>• Партнерські активності та призи</li>
          </ul>
        </div>
        <div class="col-lg-6">
          <div class="p-4 p-md-5 bg-dark rounded-4 shadow-soft">
            <h3 class="h2 fw-bold mb-3">Місія</h3>
            <p class="mb-0">
              Розвивати ком’юніті баскетболістів Дніпра: дати кожному майданчик,
              змагальний драйв і стиль, який хочеться показувати друзям.
            </p>
          </div>
        </div>
      </div>
    </Reveal>

    <!-- ORGANIZERS -->
    <Reveal
      as="section"
      id="orgs"
      class="container-xxl px-3 px-md-5 py-5 py-md-6 border-top border-dark"
      :delay="180"
      :duration="420"
      direction="up"
    >
      <div class="row mb-4 text-center">
        <div class="col">
          <h2 class="display-5 fw-bold">Організатори</h2>
          <p class="text-secondary fs-5">
            Ті, хто стоять за кожним матчем, кожною статистикою й атмосферою,
            яку відчуваш на майданчику.
          </p>
        </div>
      </div>

      <!-- Фото організаторів -->
      <div class="row justify-content-center">
        <div class="col-lg-8 position-relative">
          <div class="orgs-photo-wrapper rounded-4 overflow-hidden shadow-soft">
            <NuxtImg
              src="/images/dabl-orgs.jpg"
              alt="Організатори ДАБЛ — Євген Некрасов і Антон Соловйов"
              class="w-100 orgs-photo"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Текст під фото -->
      <div class="row justify-content-center mt-4">
        <div class="col-lg-8 text-center">
          <h3 class="h2 fw-bold mb-3">Євген Некрасов &amp; Антон Соловйов</h3>
          <p class="fs-5 mb-4">
            Разом створюємо історію баскетболу у Дніпрі 🏀 Ми запустили
            Дніпровську Аматорську Баскетбольну Лігу —
            <span class="text-accent fw-semibold">ДАБЛ</span>. Це не просто ігри
            — це стиль, драйв і комʼюніті, що росте з кожним сезоном.
          </p>
          <p class="fs-5 text-secondary mb-0">
            Ми відкриті до нових команд, партнерів і всіх, хто живе грою.
            Приєднуйся — разом зробимо ще гучніше. 🔥
          </p>
        </div>
      </div>
    </Reveal>

    <!-- TEAM CAROUSEL -->
    <Reveal
      as="section"
      id="join"
      class="container-xxl px-3 px-md-5 py-5 py-md-6 border-top border-dark"
      :delay="240"
      :duration="480"
      direction="up"
    >
      <h3>Команда Дабл Ліги</h3>
      <BootstrapCarousel
        id="playersCarousel"
        :slides="slides"
        :ride="'carousel'"
        :interval="5000"
        :show-indicators="true"
        :show-controls="true"
        :caption-bg="true"
      >
        <!-- принимаем ПРАВИЛЬНЫЙ проп слота -->
        <template #caption="{ slide }">
          <h5 class="fw-semibold mb-1">{{ slide.fullName }}</h5>
          <p class="mb-0">{{ slide.description }}</p>
        </template>
      </BootstrapCarousel>
    </Reveal>

    <!-- JOIN -->
    <Reveal
      as="section"
      id="join"
      class="container-xxl px-3 px-md-5 py-5 py-md-6 border-top border-dark"
      :delay="300"
      :duration="420"
      direction="up"
    >
      <div class="row align-items-center g-4">
        <div class="col-lg-6">
          <h2 class="display-5 fw-bold">
            Хочеш стати частиною <span class="text-accent">команди</span>?
          </h2>
          <p class="fs-5">
            Приєднуйся до Дабл Ліги: реєструй команду або гравця, волонтерь на
            івентах, стань партнером сезону. Більше гри — більше драйву.
          </p>
          <ul class="list-unstyled fs-5 mb-4">
            <li class="mb-2">
              • Командам: слот у сезоні, фіксований календар, статистика
            </li>
            <li class="mb-2">• Гравцям: персональна картка, підбір у ростер</li>
            <li>• Партнерам: інтеграції на майданчику та в контенті</li>
          </ul>

          <div class="d-flex flex-wrap gap-3">
            <a
              href="https://forms.gle/"
              target="_blank"
              class="btn btn-lg btn-accent fw-semibold"
              >Заявка команди</a
            >
            <a
              href="https://forms.gle/"
              target="_blank"
              class="btn btn-lg btn-outline-accent text-white"
              >Заявка гравця</a
            >
            <a
              href="mailto:league@example.com"
              class="btn btn-lg btn-outline-light"
              >Партнерство</a
            >
          </div>
        </div>
      </div>
    </Reveal>

    <!-- FOOT NOTE -->
    <Reveal
      as="section"
      class="container-xxl px-3 px-md-5 py-5 border-top border-dark"
      :delay="360"
      :duration="400"
      direction="up"
    >
      <div
        class="d-flex flex-wrap justify-content-between align-items-center gap-3"
      >
        <p class="mb-0 text-secondary">
          © {{ new Date().getFullYear() }} Дабл Ліга • Дніпро
        </p>
        <p class="mb-0 text-secondary">Стиль. Темп. Боротьба.</p>
      </div>
    </Reveal>
  </div>
</template>

<script setup lang="ts">
const pageTitle = "ДАБЛ ЛІГА — баскетбольна ліга Дніпра";

import { computed } from "vue";
import BootstrapCarousel from "@/components/Carousel.vue";
import Reveal from "@/components/Reveal.vue"; // ⬅️ твой компонент

const { data: employees } = await useFetch("/api/dablEmployees");

// приводим к формату слайдов
const slides = computed(() =>
  (employees.value ?? []).map((p) => ({
    id: p.id ?? p.fullName,
    src: p.photoUrl,
    alt: p.fullName,
    fullName: p.fullName,
    description: p.description,
  }))
);
</script>

<style scoped>
/* Акцентні кольори й тіні під стиль */
.text-accent {
  color: #ff6a00;
}
.btn-accent {
  background: #ff6a00;
  border-color: #ff6a00;
}
.btn-accent:hover {
  filter: brightness(1.05);
}
.btn-outline-accent {
  border-color: #ff6a00;
}
.btn-outline-accent:hover {
  background: #ff6a00;
  border-color: #ff6a00;
}

.shadow-soft {
  box-shadow: 0 16px 60px rgba(255, 106, 0, 0.12),
    0 8px 24px rgba(0, 0, 0, 0.35);
}

/* HERO */
.hero-title {
  letter-spacing: 0.02em;
}
.rings {
  position: relative;
  display: grid;
  place-items: center;
  width: 420px;
  height: 420px;
  margin: 0 auto;
}

/* Кільця залишаємо як було */
.ring {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
      circle at center,
      rgba(255, 106, 0, 0.85),
      rgba(255, 106, 0, 0.45) 55%,
      rgba(255, 106, 0, 0) 60%
    ),
    radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 56%,
      rgba(0, 0, 0, 0.85) 63%
    );
  -webkit-mask: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 56%,
    rgba(0, 0, 0, 0) 63%
  );
  mask: radial-gradient(circle, rgba(0, 0, 0, 1) 56%, rgba(0, 0, 0, 0) 63%);
  animation: float 12s ease-in-out infinite;
  filter: blur(1px);
}

.ring-lg {
  width: 420px;
  height: 420px;
  animation-delay: 0s;
}
.ring-md {
  width: 340px;
  height: 340px;
  animation-delay: 1s;
}
.ring-sm {
  width: 260px;
  height: 260px;
  animation-delay: 2s;
}
.ring-xs {
  width: 180px;
  height: 180px;
  animation-delay: 3s;
}

@keyframes float {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}

/* 🟠 центр з логотипом */
.ring-center {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  pointer-events: none;
}

.logo-img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  box-shadow: 0 0 25px rgba(255, 106, 0, 0.4);
}

/* ORGANIZERS заглушки під фото */
.org-photo,
.org-photo.alt {
  min-height: 260px;
  background-size: cover;
  background-position: center;
  filter: grayscale(1) contrast(1.05);
}
.org-photo {
  background-image: radial-gradient(
      100% 100% at 30% 30%,
      rgba(255, 106, 0, 0.45),
      rgba(255, 106, 0, 0) 60%
    ),
    linear-gradient(#1b1b1b, #1b1b1b);
}
.org-photo.alt {
  background-image: radial-gradient(
      100% 100% at 70% 30%,
      rgba(255, 106, 0, 0.45),
      rgba(255, 106, 0, 0) 60%
    ),
    linear-gradient(#1b1b1b, #1b1b1b);
}

/* дрібні адаптивні штрихи */
@media (max-width: 991.98px) {
  .hero-title {
    font-size: 12vw;
  }
  .rings {
    height: 300px;
  }
}
</style>

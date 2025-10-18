<template>
  <section
    ref="heroRef"
    class="event-hero position-relative overflow-hidden p-5"
    :class="{ 'in-view': inView }"
  >
    <div class="container-fluid h-100 position-relative" style="z-index: 1">
      <div class="row g-4 h-100">
        <!-- ЛЕВАЯ КОЛОНКА -->
        <div class="col-lg-7 d-flex flex-column justify-content-center">
          <Reveal
            as="h1"
            :delay="0"
            class="display-1 fw-black lh-1 text-uppercase text-white mb-1"
          >
            {{ game.firstTeam }}
          </Reveal>

          <Reveal
            as="h1"
            :delay="120"
            class="display-1 fw-black lh-1 text-uppercase text-white mb-3"
          >
            {{ game.secondTeam }}
          </Reveal>

          <Reveal
            as="h2"
            :delay="240"
            class="display-4 fw-black lh-1 text-uppercase text-white mb-5"
          >
            <span class="underline-accent">{{ game.arena }}</span>
          </Reveal>

          <Reveal as="div" :delay="360" class="col-12 col-md-10">
            <p class="lead text-white-50 mb-5">
              {{ game.description || fallback.description }}
            </p>
          </Reveal>

          <Reveal as="div" :delay="480" class="row small gy-4 mb-5">
            <div class="col-5 text-white-50">Teams:</div>
            <div class="col-7 text-white">
              {{ game.firstTeam }} {{ game.secondTeam }}
            </div>

            <div class="col-5 text-white-50">City:</div>
            <div class="col-7 text-white">
              {{ game.city }}
              <div class="text-white-50">({{ game.address }})</div>
            </div>

            <div class="col-5 text-white-50">Date:</div>
            <div class="col-7 text-white">{{ game.date }}</div>
          </Reveal>

          <Reveal
            as="a"
            :delay="600"
            :href="DABL_LEAGUE_SOCIAL_MEDIA.telegram"
            target="_blank"
            class="btn btn-outline-light btn-lg px-4 d-inline-flex align-items-center gap-3 cta w-auto"
          >
            <span>LEARN MORE</span>
            <span aria-hidden="true" class="ms-1">→</span>
          </Reveal>
        </div>

        <!-- ПРАВАЯ КОЛОНКА С ФОТО -->
        <div class="col-lg-5 p-0 h-100 photo d-none d-lg-block">
          <Reveal as="h1" :delay="400">
            <nuxt-img
              src="/images/mel.png"
              class="w-100 h-100 object-fit-cover"
              alt=""
            />
          </Reveal>
        </div>
      </div>
    </div>

    <div class="bottom-gradient position-absolute start-0 end-0"></div>
    <div class="orb position-absolute"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import Reveal from "@/components/Reveal.vue";
import { getNumericDate } from "~/helpers/date";
import { DABL_LEAGUE_SOCIAL_MEDIA } from "~/helpers/constansts/links";

const fallback = {
  description:
    "Basketball returns! The strongest clash on the court. Speed, fight, thrill — all for the fans. Support your team and join us!",
  teams: "Thunder vs Chornomorsk",
  city: "Odessa",
  arena: "ДК Шинник",
  address: "12 Sportivna Street",
  date: "June 25, 18:30 UTC+2",
  imageUrl: "/images/thunder-bw.jpg",
};

const { data } = await useFetch("/api/games");

const getLastGame = (games) => {
  if (!games || !games.length) return fallback;
  return games[games.length - 1] || fallback;
};

const game = ref(getLastGame(data.value));
</script>

<style scoped>
.event-hero {
  height: 100vh; /* фиксируем ровно 100vh */
  background: #000;
  isolation: isolate;
  overflow: hidden;
}

.container-fluid,
.row {
  height: 100%; /* передаём высоту вниз */
}

.photo {
  height: 100%; /* колонка фото тянется */
}
.object-fit-cover {
  object-fit: cover;
}

.fw-black {
  font-weight: 900;
}
.underline-accent {
  text-decoration: underline;
  text-decoration-color: #49c2ff;
  text-decoration-thickness: 0.35rem;
  text-underline-offset: 0.25rem;
}
.cta {
  border-width: 2px;
  border-radius: 0.75rem;
  letter-spacing: 0.04em;
  font-weight: 800;
}
.bottom-gradient {
  height: 34vh;
  bottom: 0;
  background: radial-gradient(
      120% 100% at 50% 100%,
      rgba(216, 86, 34, 0.95) 0%,
      rgba(216, 86, 34, 0.65) 45%,
      rgba(216, 86, 34, 0) 75%
    ),
    linear-gradient(0deg, rgba(216, 86, 34, 0.85) 0%, rgba(216, 86, 34, 0) 70%);
  mix-blend-mode: normal;
  z-index: 0;
}
.orb {
  width: 18px;
  height: 18px;
  left: 24px;
  bottom: 28vh;
  border-radius: 50%;
  background: radial-gradient(
    circle at 35% 35%,
    #ff915d 0 35%,
    #d85622 60%,
    #7a2f12 100%
  );
  box-shadow: 0 0 24px rgba(216, 86, 34, 0.6);
  z-index: 1;
}
.lead {
  font-size: 1.05rem;
  line-height: 1.45;
}
.text-white {
  color: #fff !important;
}
@media (min-width: 1400px) {
  .display-1 {
    font-size: 5.5rem;
  }
  .display-4 {
    font-size: 3.25rem;
  }
}
</style>

<template>
  <MainSection />
  <ActualGame />
  <ThunderLogo />
  <Into />
</template>

<script setup>
import MainSection from "@/components/sections/main/main.vue";
import ThunderLogo from "@/components/sections/main/thunderLogo.vue";
import ActualGame from "@/components/sections/main/actualGame.vue";
import Into from "@/components/sections/main/into.vue";
</script>

<style>
html,
body {
  overflow-x: hidden;
}
</style>

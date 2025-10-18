<template>
  <header class="py-3 bg-black Width-full">
    <div class="container d-flex justify-content-center">
      <nav class="navbar navbar-expand rounded-pill bg-dark px-4 w-100">
        <ul class="navbar-nav gap-4">
          <li class="nav-item">
            <NuxtLink class="nav-link fw-bold text-white" to="/">
              <NuxtImg
                class="rounded-circle mx-auto"
                src="/images/thunder-logo.jpg"
                height="30"
                alt="dabl logo"
                loading="lazy"
              />
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link fw-bold text-white" to="/team"
              >Team</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link fw-bold text-white" to="/activity"
              >Activity</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.nav-link {
  font-size: 1.1rem;
}
.nav-link:hover {
  color: #ff5833 !important;
}
.dropdown-menu {
  min-width: auto;
}
</style>

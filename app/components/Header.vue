<template>
  <header class="py-3 bg-black Width-full">
    <div class="container d-flex justify-content-center">
      <nav class="navbar navbar-expand rounded-pill bg-dark px-4 w-100">
        <ul class="navbar-nav gap-4">
          <li class="nav-item">
            <NuxtLink class="nav-link fw-bold text-white" to="/team"
              >Team</NuxtLink
            >
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold text-white" href="#">Matches</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold text-white" href="#">News</a>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle fw-bold text-white"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              UA
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">UA</a></li>
              <li><a class="dropdown-item" href="#">EN</a></li>
            </ul>
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

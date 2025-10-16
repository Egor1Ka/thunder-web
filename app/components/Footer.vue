<template>
  <footer class="bg-black text-center text-lg-start text-white">
    <div class="container">
      <div class="container p-4">
        <div class="row my-4">
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div
              class="d-flex align-items-center justify-content-center mb-4 flex-column"
            >
              <NuxtImg
                class="rounded-circle mb-4 mx-auto"
                src="/images/thunder-logo.jpg"
                height="70"
                alt="dabl logo"
                loading="lazy"
              />
              <NuxtImg
                class="rounded-circle mb-4 mx-auto"
                src="/images/dabl-logo.jpg"
                height="70"
                alt="dabl logo"
                loading="lazy"
              />
            </div>

            <p class="text-center">
              Homless animal shelter The budgetary unit of the Capital City of
              Warsaw
            </p>

            <ul class="list-unstyled d-flex flex-row justify-content-center">
              <li>
                <a class="text-white px-2" href="#!">
                  <i class="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a class="text-white px-2" href="#!">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a class="text-white ps-2" href="#!">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">Animals</h5>

            <section class="mb-4">
              <!-- Facebook -->
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                style="background-color: #3b5998"
                href="#!"
                role="button"
                ><i class="fab fa-facebook-f"></i
              ></a>

              <!-- Twitter -->
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                style="background-color: #55acee"
                href="#!"
                role="button"
                ><i class="fab fa-twitter"></i
              ></a>

              <!-- Google -->
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                style="background-color: #dd4b39"
                href="#!"
                role="button"
                ><i class="fab fa-google"></i
              ></a>

              <!-- Instagram -->
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                style="background-color: #ac2bac"
                href="#!"
                role="button"
                ><i class="fab fa-instagram"></i
              ></a>

              <!-- Linkedin -->
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                style="background-color: #0082ca"
                href="#!"
                role="button"
                ><i class="fab fa-linkedin-in"></i
              ></a>
              <!-- Github -->
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                style="background-color: #333333"
                href="#!"
                role="button"
                ><i class="fab fa-github"></i
              ></a>
            </section>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">Animals</h5>

            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>General information</a
                >
              </li>
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>About the shelter</a
                >
              </li>
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>Statistic data</a
                >
              </li>
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>Job</a
                >
              </li>
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>Tenders</a
                >
              </li>
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>Contact</a
                >
              </li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">Contact</h5>

            <ul class="list-unstyled">
              <li>
                <p>
                  <i class="fas fa-map-marker-alt pe-2"></i>Warsaw, 57 Street,
                  Poland
                </p>
              </li>
              <li>
                <p><i class="fas fa-phone pe-2"></i>+ 01 234 567 89</p>
              </li>
              <li>
                <p>
                  <i class="fas fa-envelope pe-2 mb-0"></i>contact@example.com
                </p>
              </li>
            </ul>
          </div>
          <!--Grid column-->
        </div>
      </div>
      <div class="text-center p-3 bg-secondary">
        © 2020 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/"
          >MDBootstrap.com</a
        >
      </div>
    </div>
  </footer>
</template>

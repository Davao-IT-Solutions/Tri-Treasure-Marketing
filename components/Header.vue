<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">
      <div class="logo mr-auto">
        <nuxt-link to="/">
          <img src="~/assets/img/logo.png" alt="" class="img-fluid">
        </nuxt-link>
      </div>

      <MainNav />
    </div>
  </header><!-- End Header -->
</template>

<style>
@media (max-width: 425px) {
  #header .logo img {
    max-height: 32px;
  }
}
</style>

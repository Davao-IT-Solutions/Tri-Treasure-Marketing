<template>
  <nav :class="className">
    <ul>
      <nuxt-link tag="li" to="/">
        <a @click="hideMobileClick">Home</a>
      </nuxt-link>

      <nuxt-link tag="li" to="/about">
        <a @click="hideMobileClick">About</a>
      </nuxt-link>

      <nuxt-link tag="li" to="/products">
        <a @click="hideMobileClick">Products</a>
      </nuxt-link>
      <!--
      <nuxt-link tag="li" to="/testimonials">
        <a @click="hideMobileClick">Testimonials</a>
      </nuxt-link>
      -->
      <nuxt-link tag="li" to="/contact">
        <a @click="hideMobileClick">Contact</a>
      </nuxt-link>

      <!--<nuxt-link tag="li" class="get-started" to="/get-started">
        <a @click="hideMobileClick">Get Started</a>
      </nuxt-link>-->
    </ul>
  </nav><!-- .nav-menu -->
</template>
<script>
export default {
  props: {
    className: {
      type: String,
      default: 'nav-menu d-none d-lg-block'
    }
  },
  methods: {
    hideMobileClick () {
      this.$store.commit('setShowMobileNav', false)
    }
  }
}
</script>

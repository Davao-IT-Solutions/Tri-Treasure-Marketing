<template>
  <div>
    <div class="mobile-nav-overly" :class="{ 'active' : showMobileNav }" />
    <MainNav class-name="mobile-nav d-lg-none" :class="{ 'active' : showMobileNav }" />
    <button type="button" class="mobile-nav-toggle d-lg-none" @click="showMobileClick">
      <i class="icofont-navigation-menu" />
    </button>
  </div>
</template>
<script>
export default {
  computed: {
    showMobileNav () {
      return this.$store.state.showMobileNav
    }
  },
  methods: {
    showMobileClick () {
      this.$store.commit('setShowMobileNav', true)
    }
  }
}
</script>
<style>
.mobile-nav-overly.active {
    display: block!important;
}
.mobile-nav.active {
    display: block!important;
    opacity: 1!important;
    visibility: visible!important;
}
</style>

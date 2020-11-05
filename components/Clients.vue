<template>
  <!-- ======= Clients Section ======= -->
  <section id="clients" class="clients clients">
    <div class="container">
      <div class="row">
        <div v-for="item in products" :key="item" class="col-lg-3 col-md-4 col-6">
          <nuxt-link :to="`/product/${item.slug}`">
            <img :src="item.attributes.logo" class="img-fluid" alt="">
          </nuxt-link>
        </div>
      </div>
    </div>
  </section><!-- End Clients Section -->
</template>

<script>
export default {
  computed: {
    products () {
      return this.$store.state.productsItems.filter((i) => {
        return (i.attributes.show_on_homepage === true)
      })
    }
  }
}
</script>

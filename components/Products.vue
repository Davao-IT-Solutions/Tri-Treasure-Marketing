<template>
  <!-- ======= More Services Section ======= -->
  <section id="more-services" class="more-services">
    <div class="container">
      <div class="row">
        <div v-for="(item, index) in products" :key="item" class="col-md-6 d-flex align-items-stretch mb-3">
          <div class="card" :style="`background-position-y: top;background-image: url(${item.attributes.thumbnail});`" data-aos="fade-up" :data-aos-delay="index * 300">
            <div class="card-body">
              <h5 class="card-title">
                <nuxt-link :to="`/product/${item.slug}`">
                  {{ item.attributes.title }}
                </nuxt-link>
              </h5>
              <p class="card-text">
                {{ item.attributes.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section><!-- End More Services Section -->
</template>

<script>
export default {
  computed: {
    products () {
      return this.$store.state.productsItems
    }
  }
}
</script>

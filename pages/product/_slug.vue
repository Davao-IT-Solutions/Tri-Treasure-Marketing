<template>
  <div class="inner-page">
    <section id="about" class="about">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>{{ productData.attributes.title }}</h2>
        </div>

        <div class="row content d-flex justify-content-center">
          <div class="col-lg-8" data-aos="fade-up" data-aos-delay="150">
            <img :src="productData.attributes.thumbnail" class="img-fluid d-flex" style="max-width: 300px;margin:0 auto;">
          </div>
          <div class="col-lg-8 mt-4" data-aos="fade-up" data-aos-delay="150">
            <nuxt-content :document="productData2" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const productData = await require(`~/content/products/${params.slug}.md`)
    const productData2 = await $content('products', `${params.slug}`).fetch()
    return {
      productData,
      productData2
    }
  },
  head () {
    return {
      title: `${this.productData.attributes.title}`
    }
  }
}
</script>

<style>
@media (max-width:425px) {
  .section-title h2::before {
    margin:0 ;
  }
  .section-title h2::before,
  .section-title h2::after {
      content: none;
  }
}
</style>

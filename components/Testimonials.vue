<template>
  <!-- ======= Testimonials Section ======= -->
  <section id="testimonials" class="testimonials section-bg">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
      </div>

      <div class="row owl-carousel testimonials-carousel" data-aos="fade-up" data-aos-delay="200">
        <div v-for="(testi, index) in testimonials" :key="index" class="testimonial-wrap col-sm-12 col-md-12 col-lg-6">
          <div class="testimonial-item">
            <img :src="testi.picture" class="testimonial-img" alt="">
            <h3>{{ testi.name }}</h3>
            <h4>{{ testi.position }}</h4>
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left" />
              {{ testi.message }}
              <i class="bx bxs-quote-alt-right quote-icon-right" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section><!-- End Testimonials Section -->
</template>

<script>
import { testimonials } from '../content/settings/testimonials.json'
export default {
  data () {
    return {
      testimonials
    }
  }
}
</script>

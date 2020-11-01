<template>
  <!-- ======= Contact Section ======= -->
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Contact Us</h2>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="contact-about">
            <h3>{{ settings.name }}</h3>
            <p>{{ settings.description }}</p>
            <div class="social-links">
              <a v-if="!!settings.social_fb" :href="settings.social_fb" class="facebook"><i class="icofont-facebook" /></a>
              <a v-if="!!settings.social_tw" :href="settings.social_tw" class="twitter"><i class="icofont-twitter" /></a>
              <a v-if="!!settings.social_ig" :href="settings.social_ig" class="instagram"><i class="icofont-instagram" /></a>
              <a v-if="!!settings.social_li" :href="settings.social_li" class="linkedin"><i class="icofont-linkedin" /></a>
              <a v-if="!!settings.social_yt" :href="settings.social_yt" class="youtube"><i class="icofont-youtube" /></a>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
          <div class="info">
            <div>
              <i class="ri-map-pin-line" />
              <p>{{ settings.address }}</p>
            </div>

            <div>
              <i class="ri-mail-send-line" />
              <p>{{ settings.email }}</p>
            </div>

            <div>
              <i class="ri-phone-line" />
              <p>{{ settings.phone }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300" />

        <div class="col-md-12">
          <iframe
            :src="settings.google_map"
            width="100%"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </div>
      </div>
    </div>
  </section><!-- End Contact Section -->
</template>

<script>
import settings from '../content/settings/contact_page.json'
export default {
  data () {
    return {
      settings
    }
  }
}
</script>

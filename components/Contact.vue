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
            <h3>Tri-Treasure Marketing</h3>
            <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
            <div class="social-links">
              <a href="#" class="twitter"><i class="icofont-twitter" /></a>
              <a href="#" class="facebook"><i class="icofont-facebook" /></a>
              <a href="#" class="instagram"><i class="icofont-instagram" /></a>
              <a href="#" class="linkedin"><i class="icofont-linkedin" /></a>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
          <div class="info">
            <div>
              <i class="ri-map-pin-line" />
              <p>A108 Adam Street<br>New York, NY 535022</p>
            </div>

            <div>
              <i class="ri-mail-send-line" />
              <p>tritreasure20@gmail.com</p>
            </div>

            <div>
              <i class="ri-phone-line" />
              <p>+1 5589 55488 55s</p>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <div class="form-group">
              <input
                id="name"
                type="text"
                name="name"
                class="form-control"
                placeholder="Your Name"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              >
              <div class="validate" />
            </div>
            <div class="form-group">
              <input
                id="email"
                type="email"
                class="form-control"
                name="email"
                placeholder="Your Email"
                data-rule="email"
                data-msg="Please enter a valid email"
              >
              <div class="validate" />
            </div>
            <div class="form-group">
              <input
                id="subject"
                type="text"
                class="form-control"
                name="subject"
                placeholder="Subject"
                data-rule="minlen:4"
                data-msg="Please enter at least 8 chars of subject"
              >
              <div class="validate" />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                data-rule="required"
                data-msg="Please write something for us"
                placeholder="Message"
              />
              <div class="validate" />
            </div>
            <div class="mb-3">
              <div class="loading">
                Loading
              </div>
              <div class="error-message" />
              <div class="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div class="text-center">
              <button type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section><!-- End Contact Section -->
</template>

<style>

</style>

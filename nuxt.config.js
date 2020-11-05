const webpack = require('webpack')

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Tri-Treasure Marketing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
        type: 'text/javascript'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
        type: 'text/javascript'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js',
        type: 'text/javascript'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js',
        type: 'text/javascript'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js',
        type: 'text/javascript'
      },
      {
        src: '/js/main.js',
        type: 'text/javascript'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/style.css',
    '@/assets/vendor/icofont/icofont.min.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/aos.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-fb-customer-chat.js',
      ssr: false
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ],
    extend (config, ctx) {
      // Add this to your build config
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          vue: true
        }
      })
    }
  },

  generate: {
    routes () {
      const fs = require('fs')
      const path = require('path')
      const yamlFront = require('yaml-front-matter')
      return fs.readdirSync('./content/products').map((file) => {
        return {
          route: `/product/${path.parse(file).name}`
          // payload: yamlFront.loadFront(require(`./content/products/${file}`))
        }
      })
    }
  }
}

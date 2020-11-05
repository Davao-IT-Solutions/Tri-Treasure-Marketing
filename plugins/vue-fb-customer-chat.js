import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: 102660118315930, //  change 'null' to your Facebook Page ID,
  theme_color: '#0A7CFF', // theme color in HEX
  locale: 'en_US' // default 'en_US'
})

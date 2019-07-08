import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1200,
  scale: 1,
  origin: 'left',
  distance: '30px',
  mobile: false
});
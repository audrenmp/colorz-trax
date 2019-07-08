import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 5,
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',
  attempt: 1
})
 
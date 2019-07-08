module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "audren-colorz",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Test inté Colorz" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  css: [
    "./assets/global.css",
    "./assets/scss/index.scss",
    "./assets/fonts/stylesheet.css"
  ],
  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["./assets/scss/index.scss"]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/lazyloading.js", ssr: false },
    { src: "~/plugins/vue-scroll-reveal", ssr: false }
  ],
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};

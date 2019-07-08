<template>
  <header :class="title" v-lazy:background-image="`/img/${title}-banner.png`">
    <h2>{{ title }}</h2>
  </header>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="scss">
header {
  position: relative;
  height: 50vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 2s ease-in;

  &:before {
    content: "";
    opacity: 0.6;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(187deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15));
  }

  h2 {
    text-transform: uppercase;
    mix-blend-mode: screen;
    font-family: hk_groteskregular;
    font-size: 5em;
    text-align: center;
    color: #ffffff;
  }
}

@media screen and (max-width: $tablets) {
  .agenda {
    height: 70vh;

    h2 {
      font-size: 3em;
    }
  }
}
</style>


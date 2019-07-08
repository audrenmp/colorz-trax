<template>
  <section class="program-list-container">
    <ul>
      <trax-program-item
        v-for="item in $store.state.program_list"
        v-bind:key="item.id"
        :item="item"
      />
    </ul>
  </section>
</template>

<script>
if (process.browser) {
  // require 
}

import TraxProgramItem from "./trax-program-item/trax-program-item.vue";

export default {
  components: {
    TraxProgramItem
  }
};
</script>

<style lang="scss">
.program-list-container {
  background-color: $trax_black;
  padding: 100px 0 100px $margin-container;

  ul {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  @media screen and (max-width: $tablets) {
    padding: 50px 0 50px $margin-container-resp;
  }
}
</style>


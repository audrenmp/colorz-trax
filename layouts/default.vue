<template>
  <div>
    <trax-menu />
    <nuxt />
    <trax-footer />
  </div>
</template>

<script>
import { TraxMenu, TraxFooter } from "~/components/UI";

export default {
  components: {
    TraxMenu,
    TraxFooter
  }
};
</script>
<style>
</style>


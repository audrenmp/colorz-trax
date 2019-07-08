<template>
  <div>
    <trax-header title="agenda" />
    <trax-program />
    <trax-calendar />
    <trax-print />
  </div>
</template>

<script>
// Components 
import { TraxHeader } from '~/components/UI'
import { TraxProgram, TraxCalendar } from '~/components/AGENDA/'
import TraxPrint from '~/components/PRINT/trax-print.vue'

export default {
  components: {
    TraxHeader,
    TraxProgram,
    TraxCalendar,
    TraxPrint
  }
}
</script>

<style lang="scss">
</style>


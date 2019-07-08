<template>
  <section class="calendar-list-container">
    <div v-for="days in $store.state.calendar_list" v-bind:key="days.id" class="calendar--day">
      <span v-scroll-reveal class="calendar--day-nb">{{ Object.keys(days)[0] }}</span>
      <div v-for="(event) in days[Object.keys(days)[0]]" v-bind:key="event.id">
        <nuxt-link :to="`/event/${event.id}`">
          <trax-calendar-item :item="event" />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import TraxCalendarItem from "./trax-calendar-item/trax-calendar-item.vue";

export default {
  components: {
    TraxCalendarItem
  }
};
</script>

<style lang="scss">
.calendar-list-container {
  margin: 10vh;
  .calendar {
    &--day {
      position: relative;
      margin: 0 5vw;

      &:last-of-type {
        .calendar-item--hr {
          display: none;
        }
      }
    }
    &--day-nb {
      z-index: 1;
      position: absolute;
      top: 30px;
      left: 5%;
      -webkit-text-stroke: 2px $trax-pink;
      font-family: hk_groteskregular;
      font-size: 170px;
      color: rgba(255, 255, 255, 0);
    }
  }

  @media screen and (max-width: $tablets) {
    margin: 10vh 0 0 0;
    .calendar {
      &--day {
        margin: 0;
        &:last-child {
          .calendar-item {
            margin: 0;
          }
        }
      }
      &--day-nb {
        display: none;
      }
    }
  }
}
</style>


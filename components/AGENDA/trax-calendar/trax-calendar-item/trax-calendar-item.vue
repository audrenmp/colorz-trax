<template>
  <li class="calendar-item" :class="{full: item.important}">
    <div class="calendar-item--container">
      <div class="calendar-item--picture">
        <div
          class="picture"
          v-lazy:background-image="`/img/calendar/${item.id}.png`" />
      </div>
      <div class="calendar-item--infos">
        <div>
          <p v-if="item.important" class="dontmiss">Don't miss</p>
          <h3>{{ item.title }}</h3>
          <p>{{ item.localisation }}</p>
          <div class="infos">
            <p>
              <img v-if="!item.important" src="~/assets/icons/calendar.svg" alt="date" />
              <img v-else src="~/assets/icons/calendar-white.svg" alt="date" />
              {{ item.date }}
            </p>

            <p>
              <img v-if="!item.important" src="~/assets/icons/time.svg" alt="hour" />
              <img v-else src="~/assets/icons/time-white.svg" alt="hour" />
              {{ item.hour }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="calendar-item--hr" />
  </li>
</template>

<script>
if (process.browser) {
  require("vue-lazyload");
}

export default {
  props: ["item"],
  data() {
    return {
      imgUrl: "/img/bulbe.jpg"
    };
  }
  //   asyncData() {
  //     return {
  //       imgUrl: '/img/bulbe.jpg'
  //     }
  //   }
};
</script>


<style lang="scss">
.calendar-item {
  width: 65%;
  margin: 0 auto 40px auto;

  &:hover {
    .picture {
      opacity: 0.8;
    }
  }

  &--container {
    position: relative;
    display: flex;
  }
  &--picture {
    width: 45%;
    .picture {
      background-position: center;
      background-size: cover;
      height: 200px;
      width: 100%;
      transition: all 0.3s ease-in;
    }
  }
  &--hr {
    width: 100%;
    height: 1px;
    background: black;
    opacity: 0.4;
    margin-top: 40px;
  }
  &--infos {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 55%;
    padding-left: 5%;
    box-sizing: border-box;

    > div {
      align-self: center;
      height: fit-content;

      h3 {
        font-size: 22px;
        line-height: 1.25;
        color: #000000;
        font-family: hk_groteskregular;
      }

      > p {
        margin: 10px auto;
      }
      p {
        font-family: MinotaurSans-Light;
        font-size: 14px;
        line-height: 1.56;
        color: #333333;
        font-weight: 100;
      }

      .infos {
        display: flex;
        p {
          vertical-align: middle;
          font-size: 12px;
          display: inline-block;

          &:first-child {
            margin-right: 15px;
          }
          img {
            vertical-align: middle;
            display: inline-block;
            width: 15px;
            margin-right: 5px;
          }
        }
      }
    }
  }

  @media screen and (max-width: $tablets) {
    width: 85%;
    .calendar-item {
      &--container {
        flex-direction: column;
      }
      &--picture {
        width: 100%;
      }
      &--infos {
        padding: 20px 0 0 0;
        width: 100%;
        > div {
          width: 100%;
        }
      }
    }
  }
}


.full {
  .calendar-item--container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .calendar-item--picture {
    width: 100%;
    background: gradient(184deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15));
    .picture {
      height: 400px;
    }
  }
  .calendar-item--infos {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 7%;

    > div {
      width: 100%;
      h3 {
        font-size: 30px;
        color: white;
      }
      p {
        color: white;
      }
      .dontmiss {
        font-size: 18px;
      }
    }
  }
  @media screen and (max-width: $tablets) {
    width: 100%;
  }
}
</style>


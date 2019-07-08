<template>
  <li class="program-item">
    <div class="program-item--container">
      <div>
        <h3>{{ item.title }}</h3>
        <div class="infos">
          <p>{{ item.localisation }}</p>
          <p>
            <img src="~/assets/icons/time-white.svg" alt="hour" />
            {{ item.hour }}
          </p>
        </div>
        <div class="picture" 
        v-lazy:background-image="`/img/program/${item.id}.png`" />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style lang="scss">
.program-item {
  width: 30%;
  max-width: 300px;
  margin-right: 50px;
  flex: 0 0 auto;

  &:hover {
    cursor: pointer;
  }

  &--container {
    padding-top: 20px;
    border-top: 1px solid #2d2d2d;
    position: relative;

    &:hover {
      &:before {
        width: 100%;
      }
      h3 {
        color: $trax-pink;
      }
      .picture {
        opacity: 0.8;
      }
    }

    &:before {
      content: "";
      width: 0;
      height: 2px;
      position: absolute;
      top: 0;
      left: 0;
      background: $trax-pink;
      transition: all .3s ease-in;
    }

    > div {
      width: 100%;
      h3 {
        font-family: hk_groteskregular;
        font-size: 18px;
        line-height: 1.33;
        color: #ffffff;
      transition: all .3s ease-in;
      }

      .infos {
        display: flex;
        margin: 10px 0;
        p {
          font-family: MinotaurSans-Light;
          font-size: 14px;
          line-height: 1.56;
          color: #999999;
          font-weight: 100;

          height: fit-content;
          vertical-align: middle;

          img {
            vertical-align: middle;
            display: inline-block;
            width: 15px;
            margin: 0 5px 0 25px;
            opacity: 0.6;
          }
        }
      }

      .picture {
        height: 350px;
        width: 100%;
        background-position: center;
        background-size: cover;
        transition: all .3s ease-in;
      }
    }
  }

  @media screen and (max-width: $tablets) {
    width: 75%;
  }
}
</style>


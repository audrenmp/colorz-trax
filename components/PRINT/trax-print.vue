<template>
  <div class="trax-print">
    <div class="trax-print-container">
      <div class="trax-print--image">
        <img :src="`/img/print/trax-${number}.png`" :alt="number" />
      </div>
      <div v-scroll-reveal class="trax-print--text">
        <span class="trax-print--number">N° {{ number }}</span>
        <p
          class="trax-print--title"
        >Intelligences Artificielles : comment elles réinventent la musique</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      number: 216
    };
  }
};
</script>
<style lang="scss">
.trax-print {
  background: $trax-black;
  overflow: hidden;
  height: 60vh;
  padding: 10vh 0 0 0;

  &-container {
    position: relative;
    display: flex;
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }
  &--image {
    img {
      height: 130%;
      position: relative;
      margin: 0 auto;
      display: block;
    }
  }
  &--text {
    margin-left: 5%;
    height: fit-content;
    align-self: center;
  }
  &--number {
    -webkit-text-stroke: 1px white;
    font-family: hk_groteskbold;
    font-size: 80px;
    color: rgba(255, 255, 255, 0);
  }
  &--title {
     font-family: hk_groteskregular;
    font-size: 22px;
    line-height: 1.25;
    color: #ffffff;
  }

  @media screen and (max-width: $tablets) {
    height: 80vh;
    &-container {
      flex-direction: column-reverse;
          justify-content: space-between;

    }
    &--image {
      img {
        width: 100%;
        margin-bottom: -50%;
      }
    }
  }
}
</style>


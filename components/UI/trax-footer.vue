<template>
  <footer>
    <ul class="footer-links">
      <li>
        <a href>S'abonner</a>
      </li>
      <li>
        <a href>Trouver le magazine</a>
      </li>
      <li>
        <a href>E-shop</a>
      </li>
    </ul>
    <div class="trax-logo-red">
      <img src="~assets/img/logo-trax-red.png" alt="trax-logo-red" />
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 40px $margin-container;

  .footer-links {
    width: 50%;
    display: flex;
    align-items: center;
    li {
      margin-right: 40px;
      height: fit-content;
      a {
        font-family: MinotaurSans-Light;
        font-size: 14px;
        font-weight: 300;
        line-height: 1.56;
        color: #333333;
        vertical-align: center;
      }
    }
  }

  .trax-logo-red {
    img {
      max-width: 180px;
    }
  }

  @media screen and (max-width: $tablets) {
    flex-direction: column;
    padding: 20px 10%;

    .footer-links {
      width: 100%;
    justify-content: space-around;
      li {
        margin-right: 10px;
      }
    }
    .trax-logo-red {
      margin-top: 20px;
      text-align: center;
    }
  }
}
</style>


<template>
  <nav class="nav">
    <div class="nav--hamburger-menu nav--icons">
      <img src="~assets/icons/menu.svg" alt />
    </div>
    <div class="nav--main">
      <ul>
        <li>
          <nuxt-link to="/lire">Lire</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/écouter">Écouter</nuxt-link>
        </li>
        <li id="logo">
          <nuxt-link to="/">
            <img src="~assets/img/logo-trax-white.png" alt="trax-logo" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/regarder">Regarder</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/sortir">Sortir</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="nav--search nav--icons">
      <img src="~assets/icons/search.svg" alt />
    </div>
  </nav>
</template>

<style lang="scss">
.nav {
  z-index: 5;
  position: absolute;
  width: 100%;
  padding: 40px $margin-container;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &--icons {
    max-width: 25px;
    img {
      width: 100%;
      &:hover {
        cursor: pointer;
      }
    }
  }

  &--main {
    width: 60%;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      li {
        list-style-type: none;

        a {
          text-decoration: none;
          text-transform: uppercase;

          font-family: hk_grotesklight;
          font-size: 16px;
          line-height: 1.56;
          color: #ffffff;
        }
      }

      #logo {
        img {
          display: block;
          max-width: 180px;
        }
      }
    }
  }
}

@media screen and (max-width: $tablets) {
  .nav {
    padding: $margin-container-resp $margin-container-resp;

    &--main ul {
      justify-content: center;
      li {
        &:not(#logo) {
          display: none;
        }
      }
      #logo {
        img {
          max-width: 140px;
        }
      }
    }
  }
}
</style>


<template>
  <section id="home" class="home-container">
    <p class="title flex-row flex-align-first-center">{{ literals.title }}</p>
    <a href="#" @click="logOut" class="logout">{{ literals.logout }}</a>
  </section>
</template>


<script>
export default {
  methods: {
    logOut() {
       this.$store.dispatch('auth/logOut');
    }
  },
  data() {
    return {
      literals: {
        title: this.$i18n.t("home.title"),
        logout: this.$i18n.t("home.logout")
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/styles/base.scss";

.home-container {
  height: 100%;
  margin: 5%;
  height: 100%;
  padding: 2%;
  background-color: $colorGrey4;
  .title {
    color: #2b2be2;
    font-size: 3em;
  }
  .logout {
    color: red;
    font-size: 1em;
  }
}
</style>

<template>
  <section id="auth" class="auth-container flex-column">
    <p class="title flex-row flex-align-first-center">{{ literals.title }}</p>
    <Login />
  </section>
</template>


<script>
import Login from './components/Login.vue';

export default {
  components: { Login },
  data() {
    return {
      literals: {
        title: this.$i18n.t("auth.title")
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/styles/base.scss";

.auth-container {
  height: 100%;
  margin: 5%;
  height: 100%;
  padding: 2%;
  background-color: $colorGrey4;
  .title {
    color: #2b2be2;
    font-size: 3em;
  }
}
</style>

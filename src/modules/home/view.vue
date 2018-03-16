<template>
  <section id="home" class="home-container">
    <p class="title flex-row flex-align-first-center">{{ literals.title }}</p>
  </section>
</template>


<script>
export default {
  data() {
    return {
      literals: {
        title: this.$i18n.t("home.title")
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
}
</style>

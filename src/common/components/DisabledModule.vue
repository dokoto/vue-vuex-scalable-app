<template>
  <div class="disable-module"> {{ literals.message }} </div>
</template>

<script>
export default {
  data() {
    return {
      literals: {
        message: this.$i18n.t('general.disableModuleMessage')
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.disable-module {
  font-size: 2em;
  font-weight: bold;
  background-color: red;
  color: yellow;
}
</style>

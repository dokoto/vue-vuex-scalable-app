<template>
  <span id="fakeA" class="fake-component">{{ fakeMessage }}</span>
</template>

<script>
export default {
  props: {
    fakeMessage: {
      type: String,
      default: 'Im a FAKE message'
    }
  }
};
</script>


<style lang="scss" scoped>
.fake-component {
  font-size: 0.9em;
  font-weight: bold;
  color: peru;
}
</style>


<template>
  <table>
    <slot name="head" />
    <slot name="row"
      v-for="item in collection"
      :item="item" />
    <slot name="footer" />
  </table>
</template>

<script>
export default {
  props: ['collection'],
};
</script>

<style lang="scss" scoped>
table {
  border: 2px solid #428265;
  border-radius: 3px;
  background-color: white;
}

</style>


<template>
  <tr class="row"
    :key="item.Id"
    @click="triggerClick">
    <td>{{ item.Composer || "-" }}</td>
    <td>{{ item.Name }}</td>
  </tr>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    triggerClick() {
      this.$emit('rowClick');
    },
  },
};
</script>

<style lang="scss" scoped>
th,
td {
  min-width: 120px;
  padding: 10px 20px;
}
</style>

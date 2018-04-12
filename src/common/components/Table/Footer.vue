<template>
  <tfoot class="footer" align="center">
    <tr>
      <td colspan="2">
        <button id="prev" class="btn prev"
                @click="triggerSwitchPage">prev</button>
        {{ page }} / {{ totalPages }}
        <button id="next" class="btn next"
                @click="triggerSwitchPage">next</button>
      </td>
    </tr>
  </tfoot>
</template>

<script>
export default {
  props: ['page', 'totalPages'],
  methods: {
    triggerSwitchPage(ev) {
      this.$emit('switchPageClick', ev.currentTarget.id);
    }
  }
};
</script>

<style lang="scss" scoped>
th,
td {
  min-width: 120px;
  padding: 10px 20px;
}
</style>

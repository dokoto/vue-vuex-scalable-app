<template>
  <tfoot class="footer"
         align="center">
    <tr>
      <td colspan="2">
        <button id="prev"
                class="btn prev"
                @click="e => $emit('switchPageClick', e.currentTarget.id)">prev</button>
        {{ page }} / {{ totalPages }}
        <button id="next"
                class="btn next"
                @click="e => $emit('switchPageClick', e.currentTarget.id)">next</button>
      </td>
    </tr>
  </tfoot>
</template>

<script>
export default {
  props: ['page', 'totalPages']
};
</script>

<style lang="scss" scoped>
th,
td {
  min-width: 120px;
  padding: 10px 20px;
}
</style>

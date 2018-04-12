<template>
  <tr class="row"
      :data-id="item.Id">
    <td v-for="field in header"
        :key="field">
      <input :value="item[field]"
             :data-field="field"
             type="text"
             @dblclick="switchOpen"
             @keyup.enter="saveChanges"
             :readonly="readonly" /></td>
  </tr>
</template>

<script>
export default {
  props: ['item', 'header'],
  methods: {
    triggerClick() {
      this.$emit('rowClick');
    },
    switchOpen() {
      this.readonly = false;
    },
    saveChanges(ev) {
      const id = ev.currentTarget.parentElement.parentElement.dataset.id;
      this.readonly = true;
      const fieldName = ev.currentTarget.dataset.field;
      if (this.item[fieldName] !== ev.currentTarget.value) {
        this.$emit('rowClick', {
          id,
          key: fieldName,
          value: ev.currentTarget.value
        });
      }
    }
  },
  computed: ['Name', 'Composer'].reduce((curr, next) => {
    return {
      [next]: function() {
        return this.item[next];
      },
      ...curr
    };
  }, {}),
  data: function() {
    return {
      readonly: true
    };
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

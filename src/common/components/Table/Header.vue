<template>
  <thead>
    <tr>
      <th v-for="headerField in headerFields"
          :key="headerField"
          :id="headerField"
          :class="orderBy[headerField] === 'asc' ? 'asc' : 'desc'"
          @click="triggerSort">{{ headerField }}
        <span class="arrow"
              :class="orderBy[headerField] === 'asc' ? 'asc' : 'desc'">
        </span>
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  props: ['headerFields'],
  methods: {
    triggerSort(ev) {
      this.orderBy[ev.currentTarget.id] =
        this.orderBy[ev.currentTarget.id] === 'asc' ? 'desc' : 'asc';
      this.$emit('sortClick', {
        id: ev.currentTarget.id,
        order: this.orderBy[ev.currentTarget.id]
      });
    }
  },
  data: function() {
    return {
      orderBy: this.headerFields.reduce(
        (curr, next) => ({ [next]: 'asc', ...curr }),
        {}
      )
    };
  }
};
</script>

<style lang="scss" scoped>
th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
th,
td {
  min-width: 120px;
  padding: 10px 20px;
}
.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.desc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>

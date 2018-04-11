<template>
  <div class="footer">
    <button class="btn prev"
      @click="triggerSwitchPage">prev</button>
    {{ page }} / {{ totalPages }}
    <button class="btn next"
      @click="triggerSwitchPage">next</button>
  </div>
</template>

<script>
export default {
  props: ['page', 'totalPages'],
  methods: {
    triggerSwitchPage() {
      this.$emit('switchPageClick');
    },
  },
};
</script>

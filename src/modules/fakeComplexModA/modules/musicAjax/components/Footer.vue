<template functional>
  <div class="footer">
    <button class="btn prev"
            @click="prev">prev</button>
    {{ page }} / {{ totalPages }}
    <button class="btn next"
            @click="next">next</button>
  </div>
</template>

<script>
export default {
  props: ['page', 'totalPages']
};
</script>

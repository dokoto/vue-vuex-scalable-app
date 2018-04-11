<template>
  <div class="table">
    <slot name="head" />
    <slot name="row"
          v-for="item in collection"
          :item="item" />
    <!-- <slot name="footer" />-->
  </div>
</template>

<script>
export default {
  props: ['collection']
};
</script>

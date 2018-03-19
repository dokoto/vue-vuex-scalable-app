<template>
  <input :type="type" class="input" :placeholder="placeholder" />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Something cool'
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>



<style lang="scss" scoped>
.input {

}
</style>


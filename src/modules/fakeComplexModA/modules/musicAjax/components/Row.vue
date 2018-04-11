<template >
  <div class="row"
       :key="item.Id">
    <span class="field">{{ item.Composer || "-" }}</span>
    <span class="field">{{ item.Name }}</span>
    <span class="field">{{ item.album.Title }}</span>
    <span class="field">{{ item.genre.Name }}</span>
    <span class="field">{{ item.UnitPrice }}</span>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

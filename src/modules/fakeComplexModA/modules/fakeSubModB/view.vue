<template>
  <section class="fake-mod-b">
    <Fake />
    <button @click="doSomething"> ClickMe !!</button>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import Fake from './components/fake';

export default {
  components: { Fake },
  methods: {
    ...mapActions('fakeComplexModA/fakeSubModB', ['doSomething'])
  }
};
</script>

<style lang="scss" scoped>
.fake-mod-b {
  border: solid 1px;
  height: 200px;
  padding: 2%;
  margin: 1%;
}
</style>

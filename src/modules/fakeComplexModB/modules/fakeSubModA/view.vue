<template>
  <section class="fake-mod-a">
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
    ...mapActions('fakeComplexModB/fakeSubModA', ['doSomething'])
  }
};
</script>

<style lang="scss" scoped>
.fake-mod-a {
  border: solid 1px;
  height: 200px;
  padding: 2%;
  margin: 1%;
}
</style>

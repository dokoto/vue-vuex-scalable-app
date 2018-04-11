// https://vuejs.org/v2/examples/grid-component.html
<template>
  <section class="gridAjax">
    <div class="filters">
      <input type="text"
             class="filter"
             @change="doFilter" />
    </div>
    <Table :collection="songs">
      <Header @onSort="doSort"
              slot="head" />

      <template slot="row"
                slot-scope="slot">
        <div class="header">
          <span class="field">{{ slot.item.Composer || "-" }}</span>
          <span class="field">{{ slot.item.Name }}</span>
        </div>
      </template>

      <Footer :page="pages.index"
              :totalPages="pages.total"
              slot="footer" />-->
    </Table>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Table from '@/common/components/Table';
import Header from './components/Header';
import Row from './components/Row';
import Footer from './components/Footer';

export default {
  components: { Table, Header, Row, Footer },
  computed: {
    ...mapState('fakeComplexModA/musicAjax', ['songs', 'pages'])
  },
  methods: {
    ...mapActions('fakeComplexModA/musicAjax', [
      'doSort',
      'doChange',
      'doFilter'
    ])
  },
  created() {
    this.$store.dispatch('fakeComplexModA/musicAjax/getTracks');
  }
};
</script>

<style lang="scss" scoped>
.gridAjax {
  border: solid 1px;
  height: 200px;
  padding: 2%;
  margin: 1%;
}
</style>

// https://vuejs.org/v2/examples/grid-component.html
<template>
  <section class="gridAjax">
    <div class="filters">
      <label for="filter">Filtro por Nombre
        <input type="text"
          name="filter"
          v-model="filterValue"
          class="filter" />
         <button @click="doFilter(filterValue)">filtrar</button>
      </label>
    </div>
    <Table :collection="songs">
      <Header slot="head"
        :headerFields="['Name', 'Composer']"
        @sortClick="doSort" />

      <template slot="row"
        slot-scope="row">
        <Row :item="row.item"
          @rowClick="doChange" />
      </template>

      <Footer slot="footer"
        :page="pages.index"
        :totalPages="pages.total"
        @switchPageClick="switchPage" />
    </Table>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Table from '@/common/components/Table';
import Header from '@/common/components/TableHeader';
import Row from './components/Row';
import Footer from './components/Footer';

export default {
  components: { Table, Header, Row, Footer },
  computed: {
    ...mapState('fakeComplexModA/musicAjax', ['songs', 'pages']),
  },
  methods: {
    ...mapActions('fakeComplexModA/musicAjax', ['doSort', 'doChange', 'doFilter', 'switchPage']),
  },
  data: function() {
    return {
      filterValue: ''
    }
  },
  created() {
    this.$store.dispatch('fakeComplexModA/musicAjax/getTracks');
  },
};
</script>

<style lang="scss" scoped>
.filters {
  margin: 2%;
  input {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 14px;
  }
}
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}
</style>

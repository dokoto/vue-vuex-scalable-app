<template>
  <section class="gridAjax">
    <div class="filters">
      <label for="filter">Filtro por Nombre
        <input type="text"
               name="filter"
               v-model="filterValue"
               class="filter"
               @keyup.enter="doFilter(filterValue)" />
        <button @click="doFilter(filterValue)">filtrar</button>
      </label>
    </div>
    <Body :collection="songsByPage">
      <Header slot="head"
              :headerFields="['Name', 'Composer']"
              @sortClick="doSort" />

      <template slot="row"
                slot-scope="row">
        <Row :item="row.item"
             :fields="['Name', 'Composer']"
             @rowClick="doChange" />
      </template>

      <Footer slot="footer"
              :page="pages.index"
              :totalPages="pages.total"
              @switchPageClick="switchPage" />
    </Body>
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import { Body, Header, Footer, Row } from '@/common/components/Table/all';

export default {
  components: { Body, Header, Row, Footer },
  computed: {
    ...mapState('music/local', ['pages']),
    ...mapGetters('music/local', ['songsByPage'])
  },
  methods: {
    ...mapActions('music/local', [
      'doSort',
      'doChange',
      'doFilter',
      'switchPage'
    ])
  },
  data: function() {
    return {
      filterValue: ''
    };
  },
  created() {
    this.$store.dispatch('music/local/getTracks');
  }
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

<template>
  <div id='okn' class="okn">
    <header id="okn-header" class="okn-header">
      <router-view name="header" class="child-view"></router-view>
    </header>
    <main id="okn-main" class="okn-main">
      <transition name="fade" mode="out-in" appear>
        <router-view name="container" class="child-view"></router-view>
      </transition>
    </main>
    <footer id="okn-footer" class="okn-footer">
      <router-view name="footer" class="child-view"></router-view>
    </footer>
  </div>
</template>

<script>
export default {
  created: function() {
    this.$store.dispatch('app/getToogles');
  }
};
</script>


<style lang="scss">
@import 'src/common/styles/base.scss';

body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
body,
input,
textarea {
  font-family: 'Open Sans', sans-serif;
}
.okn {
  width: 100%;
  height: 100%;
}
.okn-main {
  position: relative;
  width: 100%;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

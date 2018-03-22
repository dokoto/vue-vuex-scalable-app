<template>
  <section id="auth"
           class="auth-container flex-column">
    <p class="title flex-row flex-align-first-center">{{ literals.title }}</p>
    <Login :mode="mode" />
    <a href="#"
       class="signup flex-row flex-align-first-center"
       @click="toogleToSignUp">{{ (mode === 'signup') ? literals.signin : literals.signup }}</a>
  </section>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import Login from './components/Login';

export default {
  components: { Login },
  computed: {
    ...mapState('auth', {
      mode: state => state.mode
    })
  },
  methods: {
    ...mapActions('auth', ['toogleToSignUp'])
  },
  data() {
    return {
      literals: {
        title: this.$i18n.t('auth.title'),
        signup: this.$i18n.t('auth.signup'),
        signin: this.$i18n.t('auth.signin')
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../common/styles/base.scss';

.auth-container {
  height: 100%;
  margin: 5%;
  height: 100%;
  padding: 2%;
  background-color: $colorGrey4;
  .title {
    color: #2b2be2;
    font-size: 3em;
  }
  .signup {
    margin-top: 5%;
  }
}
</style>

<template>
  <Card class="flex-row flex-align-first-center">
    <form class="flex-column flex-align-first-center" id="loginForm" @submit="processForm"  method="post">
      <div class="error" v-show="error.code">
        <span class="error-code">{{ error.code }} </span>
        <span class="error-text">{{ error.text }} </span>
      </div>
      <label for="user">{{ literals.user }}</label>
      <Input type="text" id="username" class="username" name="username" />
      <label for="email" v-show="mode==='signup'">{{ literals.email }}</label>
      <Input type="text" id="email" class="email" name="email" v-show="mode==='signup'" />
      <label for="password">{{ literals.password }}</label>
      <Input type="password" id="password" class="password" name="password" />
      <input type="submit" class="login" :value="(mode === 'signup') ?  literals.buttonSignUp : literals.buttonSignIn" />
    </form>
  </Card>
</template>

<script>
import { mapState } from 'vuex';
import Input from "../../../common/components/Input";
import Card from "../../../common/components/Card";

export default {
  components: { Input, Card },
  props: {
    mode: {
      type: String,
      default: 'login',
    },
  },
  computed: {
    ...mapState('auth', {
      error: state => state.error,
    }),
  },
  methods: {
    processForm(ev) {
      ev.preventDefault();
      if (this.mode === 'signin') {
        this.$store.dispatch("auth/doLogin", {
          username: ev.currentTarget.elements["username"].value,
          password: ev.currentTarget.elements["password"].value
        });
      } else {
        this.$store.dispatch("auth/registrer", {
          username: ev.currentTarget.elements["username"].value,
          email: ev.currentTarget.elements["email"].value,
          password: ev.currentTarget.elements["password"].value
        });
      }
    }
  },
  data() {
    return {
      literals: {
        user: this.$i18n.t("login.user"),
        password: this.$i18n.t("login.password"),
        email: this.$i18n.t("login.email"),
        buttonSignUp: this.$i18n.t("login.buttonSignUp"),
        buttonSignIn: this.$i18n.t("login.buttonSignIn"),
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.login {
  margin-top: 20%;
}
.error {
  background-color: red;
  color: yellow;
  font-size: 2.0em;
}

label {
  margin-top: 10%;
}
</style>


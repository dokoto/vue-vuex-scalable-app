<template>
  <Card class="flex-row flex-align-first-center">
    <div class="flex-column flex-align-first-center">
      <label for="user">{{ literals.user }}</label>
      <Input type="text" id="user" class="user" />
      <label for="password">{{ literals.password }}</label>
      <Input type="password" id="password" class="password" />
      <button id="login" class="login" @click="login">{{ literals.button }}</button>
    </div>
  </Card>
</template>

<script>
import { mapActions } from 'vuex';
import Input from "../../../common/components/Input";
import Card from "../../../common/components/Card";

export default {
  components: { Input, Card },
  methods: {
    ...mapActions(['login']),
  },
  data() {
    return {
      literals: {
        user: this.$i18n.t("login.user"),
        password: this.$i18n.t("login.password"),
        button: this.$i18n.t("login.button")
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.login {
  margin-top: 20%;
}

label {
  margin-top: 10%;
}
</style>


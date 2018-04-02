import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { storiesOf } from '@storybook/vue';

import * as languaje from '../../../src/common/utils/languaje';
import Login from '../../../src/modules/auth/components/Login';
import store from '../../../src/modules/app/logic/store';

const i18n = new VueI18n(languaje);

storiesOf('Login', module)
  .add('Login: Signup mode', () => ({
    components: { Login },
    i18n,
    store,
    data() {
      return {
        mode: 'signup'
      };
    },
    template: '<Login :mode="mode" />'
  }))
  .add('Login: Signin mode', () => ({
    components: { Login },
    i18n,
    store,
    data() {
      return {
        mode: 'signin'
      };
    },
    template: '<Login :mode="mode" />'
  }));

import 'vue';
import VueI18n from 'vue-i18n';
import { storiesOf } from '@storybook/vue';
import { withReadme } from 'storybook-readme';
import { withKnobs, select } from '@storybook/addon-knobs/vue';

import * as languaje from '../../../../src/common/utils/languaje';
import Login from '../../../../src/modules/auth/components/Login';
import store from '../../../../src/modules/app/logic/store';
import LoginReadme from '../../docs/Login.readme.md';

const i18n = new VueI18n(languaje);

const LoginSelect = {
  label: 'Mode',
  options: { signup: 'signup', signin: 'signin' },
  default: 'signup',
  group: 'LOGIN-SELECT-GRP'
};
storiesOf('Auth', module)
  .addDecorator(withKnobs)
  .add(
    'Login',
    withReadme(LoginReadme, () => ({
      components: { Login },
      i18n,
      store,
      data() {
        return {
          mode: select(
            LoginSelect.label,
            LoginSelect.options,
            LoginSelect.default,
            LoginSelect.group
          )
        };
      },
      template: '<Login :mode="mode" />'
    }))
  );

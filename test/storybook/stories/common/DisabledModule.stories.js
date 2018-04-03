import 'vue';
import VueI18n from 'vue-i18n';
import { storiesOf } from '@storybook/vue';
import { withReadme } from 'storybook-readme';

import * as languaje from '../../../../src/common/utils/languaje';
import DisabledModule from '../../../../src/common/components/DisabledModule';
import DisbaleModuleReadme from '../../docs/DisbaleModule.readme.md';

const i18n = new VueI18n(languaje);


storiesOf('Common/Modals', module)
  .add(
    'DisabledModule',
    withReadme(DisbaleModuleReadme, () => ({
      components: { DisabledModule },
      i18n,
      template: '<DisabledModule />'
    }))
  );

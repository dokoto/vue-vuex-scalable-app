import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withReadme } from 'storybook-readme';
import { withKnobs, select, text } from '@storybook/addon-knobs/vue';
import InputReadme from '../../docs/Input.readme.md';

import Input from '../../../../src/common/components/Input';

const typeSelect = {
  label: 'Type',
  options: { text: 'text', password: 'password' },
  default: 'text',
  group: 'INPUT-TYPE-SELECT-GRP'
};

storiesOf('Common/Inputs', module)
  .addDecorator(withKnobs)
  .add(
    'Input',
    withReadme(InputReadme, () => ({
      components: { Input },
      data() {
        return {
          placeholder: text('PlaceHolder', 'Cool text'),
          type: select(
            typeSelect.label,
            typeSelect.options,
            typeSelect.default,
            typeSelect.group
          )
        };
      },
      template: '<Input :placeholder="placeholder" :type="type" />'
    }))
  );

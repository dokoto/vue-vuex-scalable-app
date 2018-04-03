import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withReadme } from 'storybook-readme';
import CardReadme from '../../docs/Card.readme.md';

import Card from '../../../../src/common/components/Card';

storiesOf('Common/Containers', module)
  .add(
    'Card',
    withReadme(CardReadme, () => ({
      components: { Card },
      template: '<Card style="height:100px;background-color:beige;" />'
    }))
  );

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import * as languaje from '@/common/utils/languaje';
import DisabledModule from '@/common/components/DisabledModule';

Vue.use(VueI18n);
const i18n = new VueI18n(languaje);

describe('DisabledModule.vue', () => {
  it('should render correct contents', () => {
    debugger;
    const Constructor = Vue.extend(DisabledModule);
    const vm = new Constructor({
      i18n,
    }).$mount();
    const textContent = vm.$el.textContent.trim();
    expect(textContent).toEqual('Temporal disabled module');
  });
});

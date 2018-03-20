import 'vue';
import { mount, createLocalVue } from 'vue-test-utils';
import VueI18n from 'vue-i18n';
import * as languaje from '@/common/utils/languaje';
import DisabledModule from '@/common/components/DisabledModule';
import Input from '@/common/components/Input';
import enLiterals from '@/assets/i18n/en';

const localVue = createLocalVue();
localVue.use(VueI18n);
const i18n = new VueI18n(languaje);

describe('DisabledModule.vue', () => {
  it(`[${languaje.language}] Should render correct message: "${
    enLiterals.general.disableModuleMessage
  }"`, () => {
    const wrapper = mount(DisabledModule, {
      localVue,
      i18n,
    });
    expect(wrapper.text()).toBe(enLiterals.general.disableModuleMessage);
  });
});

describe('Input.vue', () => {
  it(`[${languaje.language}] Should render with correct placeholder message: "${
    enLiterals.general.placeholder
  }"`, () => {
    const wrapper = mount(Input, {
      propsData: { placeholder: enLiterals.general.placeholder },
    });
    debugger;
    expect(wrapper.element.placeholder).toBe(enLiterals.general.placeholder);
  });
});

describe('Input.vue', () => {
  it('Should render a Input type password', () => {
    const wrapper = mount(Input, {
      propsData: { type: 'password' },
    });
    debugger;
    expect(wrapper.element.type).toBe('password');
  });
});

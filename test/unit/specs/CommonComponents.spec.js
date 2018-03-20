import { mount, createLocalVue } from 'vue-test-utils';
import VueI18n from 'vue-i18n';
import * as languaje from '@/common/utils/languaje';
import DisabledModule from '@/common/components/DisabledModule';
import Input from '@/common/components/Input';
import Card from '@/common/components/Card';
import enLiterals from '@/assets/i18n/en';

/*
 * TO DEBBUG:
 * 1º Put a debugger; where you'll want to stop
 * 2º run: $> npm run unit-dbg
 * 3º It'll stop on the first source line to wait for you
 * go to the devtools. Press play and it'll break on your point
 */

const localVue = createLocalVue();
localVue.use(VueI18n);
const i18n = new VueI18n(languaje);

/*
 * TESTING Component who has i18n texts
 */
describe('DisabledModule.vue', () => {
  it(`[${languaje.language}] Should render correct message: "${
    enLiterals.general.disableModuleMessage
  }"`, () => {
    const wrapper = mount(DisabledModule, {
      localVue,
      i18n
    });
    expect(wrapper.text()).toBe(enLiterals.general.disableModuleMessage);
  });
});

/*
 * TESTING create component with props
 */
describe('Input.vue', () => {
  it(`[${languaje.language}] Should render with correct placeholder message: "${
    enLiterals.general.placeholder
  }"`, () => {
    const wrapper = mount(Input, {
      propsData: { placeholder: enLiterals.general.placeholder }
    });
    expect(wrapper.element.placeholder).toBe(enLiterals.general.placeholder);
  });
});

/*
 * TESTING create component with props
 */
describe('Input.vue', () => {
  it('Should render a password Input type', () => {
    const wrapper = mount(Input, {
      propsData: { type: 'password' }
    });
    expect(wrapper.element.type).toBe('password');
  });
});

/*
 * TESTING create component with subcomponents in slots and
 * accessing subcomponent attributes to assert it
 */
describe('Card.vue', () => {
  it('Should render a password Input type inside component Card', () => {
    const inputWrapper = {
      render(h) {
        return h(Input, { props: { type: 'password' } });
      }
    };

    const wrapper = mount(Card, {
      slots: {
        default: inputWrapper
      }
    });
    expect(wrapper.find('.input').element.type).toBe('password');
  });
});

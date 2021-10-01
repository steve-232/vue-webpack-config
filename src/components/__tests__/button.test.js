import { mount } from '@vue/test-utils';
import Button from '../Button.vue';

describe('Button.vue', () => {
  it('should render custom text & on "click" invoke custom function & snapshot', () => {
    const customFun = jest.fn();
    const wrapper = mount(Button, {
      slots: {
        default: 'Custom text',
      },
      propsData: {
        onClick: customFun,
      },
    });

    // custom text
    expect(wrapper.text()).toBe('Custom text');

    // custom function
    wrapper.trigger('click');
    expect(customFun).toHaveBeenCalled();

    // snapshot
    expect(wrapper).toMatchSnapshot();
  });
});

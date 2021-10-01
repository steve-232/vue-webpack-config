import { mount } from '@vue/test-utils';
import Paragraph from '../Paragraph';

describe('Paragraph.vue', () => {
  it('render custom text & add custom css style & snapshot', () => {
    const wrapper = mount(Paragraph, {
      slots: {
        default: 'Lorem ipsum'
      },
      propsData: {
        fontSize: '20px',
        color: '#09f'
      },
    });

    // custom text
    expect(wrapper.text()).toBe('Lorem ipsum');

    // custom style
    expect(wrapper.element.style._values).toHaveProperty('font-size', '20px');
    expect(wrapper.element.style._values).toHaveProperty('color', 'rgb(0, 153, 255)');

    // snapshot
    expect(wrapper).toMatchSnapshot();
  })
});
import { mount } from '@vue/test-utils'
import HelloComponent from '../src/js/components/HelloComponent.vue'

describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(HelloComponent)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('button click should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})
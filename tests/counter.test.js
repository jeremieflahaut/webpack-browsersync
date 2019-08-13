import { mount } from '@vue/test-utils'
import CountComponent from '../src/js/components/CountComponent.vue'

describe('Counter', () => {
  const wrapper = mount(CountComponent)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">Count : 0</span>')
  })

  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('button click should increment the count', () => {
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WelcomeItem from '../WelcomeItem.vue'

describe('WelcomeItem', () => {
  it('renders properly', () => {
    const wrapper = mount(WelcomeItem)
    expect(wrapper.find('.item').exists()).toBe(true)
  })

  it('renders icon slot', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        icon: '<span class="test-icon">Icon</span>'
      }
    })
    expect(wrapper.find('.test-icon').exists()).toBe(true)
  })

  it('renders heading slot', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        heading: 'Test Heading'
      }
    })
    expect(wrapper.find('h3').text()).toBe('Test Heading')
  })

  it('renders default slot content', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        default: 'Test content'
      }
    })
    expect(wrapper.text()).toContain('Test content')
  })

  it('renders all slots together', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        icon: '<span class="icon">Icon</span>',
        heading: 'My Heading',
        default: 'My content'
      }
    })
    expect(wrapper.find('.icon').exists()).toBe(true)
    expect(wrapper.find('h3').text()).toBe('My Heading')
    expect(wrapper.text()).toContain('My content')
  })

  it('has correct CSS classes', () => {
    const wrapper = mount(WelcomeItem)
    expect(wrapper.find('.item').exists()).toBe(true)
    expect(wrapper.find('.details').exists()).toBe(true)
  })
})

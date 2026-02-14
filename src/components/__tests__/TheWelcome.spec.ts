import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheWelcome from '../TheWelcome.vue'

describe('TheWelcome', () => {
  it('renders properly', () => {
    const wrapper = mount(TheWelcome)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders WelcomeItem components', () => {
    const wrapper = mount(TheWelcome)
    const welcomeItems = wrapper.findAll('[class="item"]')
    expect(welcomeItems.length).toBeGreaterThan(0)
  })

  it('renders Documentation section with heading', () => {
    const wrapper = mount(TheWelcome)
    expect(wrapper.text()).toContain('Documentation')
  })

  it('renders Tooling section with heading', () => {
    const wrapper = mount(TheWelcome)
    expect(wrapper.text()).toContain('Tooling')
  })

  it('renders Ecosystem section with heading', () => {
    const wrapper = mount(TheWelcome)
    expect(wrapper.text()).toContain('Ecosystem')
  })

  it('renders Community section with heading', () => {
    const wrapper = mount(TheWelcome)
    expect(wrapper.text()).toContain('Community')
  })

  it('renders Support section with heading', () => {
    const wrapper = mount(TheWelcome)
    expect(wrapper.text()).toContain('Help us keep Vue thriving')
  })

  it('contains external links', () => {
    const wrapper = mount(TheWelcome)
    const links = wrapper.findAll('a[target="_blank"]')
    expect(links.length).toBeGreaterThan(0)
  })

  it('renders icon components', () => {
    const wrapper = mount(TheWelcome)
    const icons = wrapper.findAll('svg')
    expect(icons.length).toBeGreaterThan(0)
  })
})

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IconTooling from '../icons/IconTooling.vue'

describe('IconTooling', () => {
  it('renders SVG element', () => {
    const wrapper = mount(IconTooling)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('has correct SVG namespace', () => {
    const wrapper = mount(IconTooling)
    const svg = wrapper.find('svg')
    expect(svg.attributes('xmlns')).toBe('http://www.w3.org/2000/svg')
  })

  it('has path element', () => {
    const wrapper = mount(IconTooling)
    expect(wrapper.find('path').exists()).toBe(true)
  })

  it('uses currentColor for fill', () => {
    const wrapper = mount(IconTooling)
    expect(wrapper.find('svg').attributes('fill')).toBe('currentColor')
  })
})

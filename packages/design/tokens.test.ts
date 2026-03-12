import { describe, it, expect } from 'vitest'
import { colors, spacing, breakpoint } from './tokens'

describe('tokens', () => {
  it('exports colors with expected keys', () => {
    expect(colors.primary).toBe('#000')
    expect(colors.bg).toBe('#fff')
    expect(colors.text).toBeDefined()
  })

  it('exports spacing scale', () => {
    expect(spacing.md).toBe('2rem')
    expect(spacing.xl).toBe('6rem')
  })

  it('exports breakpoint numbers', () => {
    expect(breakpoint.tablet).toBe(768)
    expect(breakpoint.desktop).toBe(1200)
  })
})

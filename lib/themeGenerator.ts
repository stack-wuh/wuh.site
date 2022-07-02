import { presetPalettes, generate } from '@ant-design/colors'

import { createElem, getDocumentThemeMode } from './dom'

export const PRESET_COLORS = ['grey', 'blue', 'green', 'yellow', 'orange']

export type TDefaultThemeMode = 'default' | 'dark'
export const LIGHT_THTME_COLOR = '#fff'
export const DARK_THEME_COLOR = '#000'
export const DEFALT_THEME_MODE: TDefaultThemeMode = 'default'

export type TGeneratorColorOps = {
  mode: TDefaultThemeMode
}
const defaultColorOps: TGeneratorColorOps = {
  mode: 'default',
}
/**
 * 生成默认的色彩
 * @param groups []
 * @returns
 */
const generatorColors = (
  groups = PRESET_COLORS,
  ops: TGeneratorColorOps = defaultColorOps
): string => {
  let str = ''

  groups.map((g: string) => {
    const colorObj = presetPalettes[g]

    colorObj.map((c, idx) => {
      str += `;--color-${g}-${idx}: ${c}`
    })
  })

  const primary = generate('#58a6ff', { theme: ops.mode })
  const white = generate('#ffffff', { theme: ops.mode })
  const black = generate('#333', { theme: ops.mode })

  primary.map((c, idx) => {
    str += `;--color-primary-${idx}: ${c}`
  })

  white.map((c, idx) => {
    str += `;--color-white-${idx}: ${c}`
  })

  black.map((c, idx) => {
    str += `;--color-black-${idx}: ${c}`
  })

  return str
}

/**
 * * 主题颜色生成器
 */
export const themeGenerator = () => {
  const prefix = ':root {'
  const affix = '}'
  const presetColorStr = generatorColors(PRESET_COLORS, {
    mode: getDocumentThemeMode() as TDefaultThemeMode,
  })

  const innerHTML = [prefix, presetColorStr, affix].join(' ')
  createElem('style', innerHTML)
}

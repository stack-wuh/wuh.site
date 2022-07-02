import { getLocaleId } from './index'
const DOM_TOKEN = 'ww-theme__style'

/**
 * 生成一个DOM元素
 */
export const createElem = (
  tag: keyof HTMLElementTagNameMap = 'div',
  innerHtml: string,
  target: keyof HTMLElementTagNameMap = 'body'
): void => {
  if (typeof document !== 'object') return
  const el = document.createElement(tag)
  const parentEl = document.querySelector(target)

  el.className = DOM_TOKEN
  el.id = `${DOM_TOKEN}--${getLocaleId()}`
  el.innerHTML = innerHtml

  if (!parentEl) return
  parentEl.append(el)
}

/**
 * 获取html元素上的【data-theme-mode】值
 */
export const getDocumentThemeMode = (): string => {
  if (typeof document !== 'object') return 'default'

  const target = document.querySelector('html')
  const mode = target?.getAttribute('data-theme-mode') || 'default'

  return mode
}

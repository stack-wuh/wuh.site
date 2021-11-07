/** 允许格式化的地址 */
export const allowPaths = ['post']

export const formatter = (url) => {
  if (window.hljs && allowPaths.some(s => url.includes(s))) {
    window.hljs.highlightAll()
  }
}
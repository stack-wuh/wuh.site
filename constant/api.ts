import { isDev } from '@/lib/index'
export const PREFIX = ''
export const DOMAIN = 'https://api.wuh.site'
export const DOMAIN_STATIC = isDev() ? 'http://localhost:3000' : 'https://wuh.site'

export const API_ARTICLE_LIST = `${DOMAIN}${PREFIX}/articles`

export const API_ARTICLE_ITEM = `${DOMAIN}${PREFIX}/articles/`

export const API_BANNER_HOME = `${DOMAIN_STATIC}/api/banner`

export const API_GALLERY_LIST = `${DOMAIN_STATIC}/api/gallery`
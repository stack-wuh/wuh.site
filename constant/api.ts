import { isDev } from '@/lib/index'
export const PREFIX = ''
export const DOMAIN = 'https://api.wuh.site'
export const DOMAIN_STATIC = isDev() ? 'http://localhost:3000' : DOMAIN

export const API_ARTICLE_LIST = `${DOMAIN}${PREFIX}/articles`

export const API_ARTICLE_ITEM = `${DOMAIN}${PREFIX}/articles/`

export const API_BANNER_HOME = `${DOMAIN_STATIC}/api/banner`
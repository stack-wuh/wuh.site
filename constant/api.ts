import { isDev } from '@/lib/index'
export const PREFIX = ''
export const DOMAIN = 'https://api.wuh.site'
export const VERCEL_DOMAIN =
  'https://netease-cloud-music-api-umber-seven.vercel.app'
export const DOMAIN_STATIC = isDev()
  ? 'http://localhost:3000'
  : 'https://wuh.site'

export const API_ARTICLE_LIST = `${DOMAIN}${PREFIX}/articles`

export const API_ARTICLE_ITEM = `${DOMAIN}${PREFIX}/articles/`

export const API_BANNER_HOME = `${DOMAIN_STATIC}/api/banner`

export const API_GALLERY_LIST = `${DOMAIN_STATIC}/api/gallery`

export const API_PLAY_LIST = `${DOMAIN_STATIC}/api/playlist`

export const API_VERCEL_LOGIN = `${VERCEL_DOMAIN}/login/cellphone?phone=18827057040&captcha=2974`

export const API_VERCEL_ACCOUNT = `${VERCEL_DOMAIN}/user/account`

export const API_VERCEL_LISTLIST = `${VERCEL_DOMAIN}/likelist?uid=398326271`

export const API_VERCEL_PLAYLIST =
  `${VERCEL_DOMAIN}/playlist/detail?id=5417278232&timestamp=${new Date().getTime()}&cookie=` +
  'MUSIC_A_T=1484056104529; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/eapi/feedback;;MUSIC_R_T=1484056123783; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/wapi/clientlog;;MUSIC_A_T=1484056104529; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/weapi/feedback;;__csrf=1413293f8c57b62b63a523d27adb53d2; Max-Age=1296010; Expires=Sun, 28 Nov 2021 13:21:15 GMT; Path=/;;MUSIC_R_T=1484056123783; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/wapi/feedback;;MUSIC_U=9de0b492647e466183adb0f6c6d71d023a72dffa63448f46408ff126231e692de865e922881deed94258bee06fad8fedabcbf7551dcd336e22fac3ef9d6f10fce758fe0f42e0166289e1a1143b71fa34c3061cd18d77b7a0; Max-Age=1296000; Expires=Sun, 28 Nov 2021 13:21:05 GMT; Path=/;;__remember_me=true; Max-Age=1296000; Expires=Sun, 28 Nov 2021 13:21:05 GMT; Path=/;;MUSIC_R_T=1484056123783; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/neapi/feedback;;MUSIC_A_T=1484056104529; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/eapi/clientlog;;MUSIC_R_T=1484056123783; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/openapi/clientlog;;MUSIC_A_T=1484056104529; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/weapi/clientlog;;MUSIC_A_T=1484056104529; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/neapi/clientlog;;MUSIC_R_T=1484056123783; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/eapi/clientlog;;MUSIC_R_T=1484056123783; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/eapi/feedback;;MUSIC_A_T=1484056104529; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/neapi/feedback;;MUSIC_A_T=1484056104529; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/wapi/clientlog;;MUSIC_A_T=1484056104529; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/api/clientlog;;MUSIC_A_T=1484056104529; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/openapi/clientlog;;MUSIC_A_T=1484056104529; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/api/feedback;;MUSIC_A_T=1484056104529; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/wapi/feedback;;MUSIC_R_T=1484056123783; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/weapi/clientlog;;MUSIC_R_T=1484056123783; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/api/feedback;;NMTID=00Oyj6D5UCW3PKCkURNtB04V1g5vY4AAAF9GXVqVQ; Max-Age=315360000; Expires=Tue, 11 Nov 2031 13:21:05 GMT; Path=/;;MUSIC_R_T=1484056123783; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/neapi/clientlog;;MUSIC_R_T=1484056123783; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/weapi/feedback;;MUSIC_R_T=1484056123783; Max-Age=2147483647; Expires=Thu, 1 Dec 2089 16:35:12 GMT; Path=/api/clientlog;'

export const API_VERCEL_SONG_URL = `${VERCEL_DOMAIN}/song/url?id=1370879975,1340543218,1465288704,3165930362967,1419346842,1485850351,1410415908,1382576444,36190432`

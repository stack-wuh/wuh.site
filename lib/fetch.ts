import fetch from 'isomorphic-fetch'

export default function fetcher (url: string): Promise<any> {
  return fetch(url, { keepalive: true, referrer: 'server' }).then(res => res.json())
}
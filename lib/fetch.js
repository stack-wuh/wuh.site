import fetch from 'isomorphic-fetch'
export default function fetcher (url) {
  return fetch(url).then(res => res.json())
}
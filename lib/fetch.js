import fetch from 'isomorphic-fetch'
import { Agent } from 'https'

const agent = new Agent({
  keepAlive: true
})

export default function fetcher (url) {
  return fetch(url, { agent }).then(res => res.json())
}
import fetch from 'isomorphic-fetch'

export default function fetcher(url: string): Promise<any> {
	return fetch(url, {
		keepalive: true,
		referrer: 'server',
		credentials: 'include',
	}).then((res) => res.json())
}

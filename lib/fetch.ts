import fetch from 'isomorphic-fetch'

export default function fetcher(url: string): Promise<unknown> {
	return fetch(url, {
		keepalive: true,
		referrer: 'server',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => res.json())
}

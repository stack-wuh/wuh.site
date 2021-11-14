import { isDev } from '@/lib/index'

const isdev = isDev()

export const config = {
	themeMode: 'light',
	language: 'zh-cn',
	header: {
		title: '日积跬步,以致千里',
	},
	footer: {
		suffixTitle: '你也想起舞吗',
		mainTitle: '由NextJS、MongoDB和Express驱动',
		prefixTitle: '驿寄梅花  鱼传尺素',
		copyright: 'Copyright© 2021 Shadow.',
		domain: '鄂ICP备20001814号-1',
	},
	pager: {
		nextText: '远眺山河',
		disableNextText: '空空如也',
	},
	popupLabels: [
		'富强',
		'民主',
		'文明',
		'和谐',
		'自由',
		'平等',
		'公正',
		'法治',
		'爱国',
		'敬业',
		'诚信',
		'友善',
		'富强',
	],
	pagesConfig: {
		prefix: '-- wuh.site',
		suffix: 'shadow * ',
	},
	external: {
		icons: [
			'//at.alicdn.com/t/font_1587964_7d319bqcbhx.css',
			'//at.alicdn.com/t/font_2595178_wa25xow6jmp.css',
		],
		fonts: [
			'//fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap',
		],
	},
	stateLocale: {
		options: {
			expires: new Date('9999-12-31 23:59:59'),
			path: '/',
			domain: isdev ? 'localhost' : 'wuh.site',
			secure: false,
			sameSite: 'strict',
		},
	},
}

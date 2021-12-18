import * as React from 'react'
import Link from 'next/link'
import { IHomeItemProps, THomeIntialProps } from '@/pages/index'
import Image from '@/components/image/image'
import { LoadMoreButton } from '@/components/button'
import useConfig from '@/hooks/useConfig'
import fetcher from '@/lib/fetch'
import useSWRInfinite from 'swr/infinite'
import { API_ARTICLE_LIST } from '@/constant/api'

const PAGE_SIZE = 10

interface IListProps {
	data: THomeIntialProps
	count: number
}

const usePostPages = (initialData: THomeIntialProps, count: number) => {
	const { data, size, setSize, error } = useSWRInfinite(
		(index: number) => `${API_ARTICLE_LIST}?p=${index + 1}`,
		fetcher,
		{
			revalidateOnFocus: true,
			revalidateOnMount: true,
			revalidateIfStale: true,
			initialSize: 1,
			persistSize: false,
			dedupingInterval: 5000,
			fallbackData: [initialData],
		}
	)
	const isEmpty = data?.length
	const allowLoadMore = size < Math.ceil(count / PAGE_SIZE)

	const hits = (data || []).reduce(
		(acc: [], curr: any) => acc.concat(curr.data.rows),
		[]
	)

	return {
		size,
		setSize,
		error,
		isEmpty,
		allowLoadMore,
		hits,
	}
}

const Item = (props: IHomeItemProps) => {
	return (
		<>
			<Link
				href={{ pathname: '/post/[id]', query: { id: props.title } }}
				passHref
			>
				<a>
					<li className="ww_home__item">
						<div className="lf">
							<Image
								src={props.cover_img}
								width="160px"
								height="108px"
								alt="cover"
							/>
						</div>
						<div className="body">
							<h4 className="title">{props.title}</h4>
							<p className="description text-overflow-multi transition-text">
								{props.sub_title}
							</p>
						</div>
					</li>
				</a>
			</Link>
		</>
	)
}

const List: React.FC<IListProps> = (props) => {
	const config = useConfig()

	const { hits, size, setSize, allowLoadMore } = usePostPages(
		props.data,
		props.count
	)

	const handleFetchNextPage = () => {
		if (allowLoadMore) {
			setSize(size + 1)
		}
	}

	return (
		<ul className="ww_home__list">
			{hits.map((item: IHomeItemProps) => (
				<Item {...item} key={item.title} />
			))}
			<LoadMoreButton
				disabled={!allowLoadMore}
				icon="icon-costoms-alearance"
				size="small"
				onClick={handleFetchNextPage}
			>
				{allowLoadMore ? config?.pager.nextText : config?.pager.disableNextText}
			</LoadMoreButton>
		</ul>
	)
}

export default React.memo(List)

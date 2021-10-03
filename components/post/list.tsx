import * as React from "react";
import Link from 'next/link';
import { IHomeProps, IHomeItemProps } from "@/pages/index";
import Image from '@/components/image/image'
import fetcher from "@/lib/fetch";
import useSWRInfinite from "swr/infinite";

const PAGE_SIZE = 10;

const usePostPages = (initialData: any) => {
  const { count } = initialData.data;
  const { data, size, setSize, error } = useSWRInfinite(
    (index: number) => {
      return `https://api.wuh.site/articles?p=${index + 1}`;
    },
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnMount: false,
      initialSize: 1,
      persistSize: true,
    }
  );
  const isEmpty = initialData.data.rows.length;
  const allowLoadMore = size < Math.ceil(count / PAGE_SIZE);

  const hits =
    data &&
    (data || []).reduce(
      (acc: [], curr: any) => acc.concat(curr?.data.rows),
      []
    );

  return {
    size,
    setSize,
    error,
    isEmpty,
    allowLoadMore,
    hits,
  };
};

const Item = (props: IHomeItemProps) => {
  return (
    <>
      <Link href="/post/detail" passHref>
        <a>
          <li className="ww_home__item">
            <div className="lf">
              <Image src={props.cover_img} width="160px" height="108px" alt='cover' />
            </div>
            <div className="body">
              <h4 className="title">{props.title}</h4>
              <p className='description text-overflow-multi transition-text'>{props.sub_title}</p>
            </div>
          </li>
        </a>
      </Link>
    </>
  );
};

const List = (props: IHomeProps) => {
  const { initialData } = props;
  const { hits, size, setSize, allowLoadMore } = usePostPages(initialData);

  const handleFetchNextPage = () => {
    if (allowLoadMore) {
      setSize(size + 1);
    }
  };

  return (
    <ul className="ww_home__list">
      {(hits || initialData.data.rows).map((item: IHomeItemProps) => (
        <Item {...item} key={item.title} />
      ))}
      <button onClick={handleFetchNextPage}>load more</button>
    </ul>
  );
};

export default React.memo(List);

import React from "react";
import useSWR from "swr";
import fetcher from "@/lib/fetch";
import { useRouter } from "next/router";
import { API_ARTICLE_ITEM } from "@/constant/api";
import { PostHeader, PostBody, PostContext } from "@/components/post";
import Divider from "@/components/divider";
import Alert from "@/components/alert/alert";
import ShareGroup from "@/components/button/share-group";
import withLayout from "@/layout/layout";

const Detail: React.FC<{}> = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    `${API_ARTICLE_ITEM}${router.query.id}`,
    fetcher
  );
  if (error) return <div className="error">ERROR</div>;
  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div className="ww_detail">
      <PostContext value={data.data}>
        {/* 文章详情页--页头meta处理 */}
        <PostHeader />
        {/* 文章详情页--文章主体 */}
        <PostBody />

        {/* 版权声明 */}
        <Divider />
        <Alert
          type="warning"
          showIcon={false}
          message="版权声明: 署名-非商业性使用-禁止演绎 3.0 中国大陆(CC BY-NC-ND 3.0 CN)"
          description="文章首发于 Shadow's Blog, 转载文章请务必以超链接形式标明文章出处，作者信息及本版权声明。"
        />

        {/* 分享--按钮组 */}
        <Divider size='small' />
        <ShareGroup />
        <Divider size='small' />
      </PostContext>
    </div>
  );
};

export default withLayout(Detail);

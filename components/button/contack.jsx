/* eslint-disable @next/next/no-html-link-for-pages */
import Card from '@/components/card'
import Space from '@/components/space'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import { useRouter } from 'next/router'

const Contack = ({
  subTitle,
  url,
  title,
  coverImage
}) => {
  const router = useRouter()
  const [_, copy] = useCopyToClipboard(`://wuh.site${router.asPath}`)

  return (<div>
      <Card>
        <Space size={20}>
          <a role="button" title="分享至: QQ空间" aria-hidden tabIndex="1" rel="external next noreferrer" target="_blank" className='btn is-focus iconfont icon-QQkongjian' href={`https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https://wuh.site${router.asPath}&sharesource=qzone&title=${title}&pics=${coverImage}&summary=${subTitle}`} />
          <a role="button" title="分享至: twitter" aria-hidden tabIndex="1" rel="external next noreferrer" target="_blank" className='btn is-focus iconfont icon-ttww' href={`https://twitter.com/intent/tweet?text=${subTitle}&url=https://wuh.site${router.asPath}`} />
          <a role="button" title="分享至: 新浪微博" aria-hidden tabIndex="1" rel="external next noreferrer" target="_blank" className='btn is-focus iconfont icon-weibo-circle-fill' href={`http://service.weibo.com/share/share.php?url=https://wuh.site${router.asPath}&sharesource=weibo&title=${title}&pic=${coverImage}`} />
          <a role="button" title="分享至: 知乎" aria-hidden tabIndex="1" className='btn is-focus iconfont icon-zhihu' href="/" />
          <a role="button" title="复制当前网址至粘贴板" onClick={copy} aria-hidden tabIndex="1" className='btn is-focus iconfont icon-insertlink' />
        </Space>
        <style jsx>{`
          .btn {
            display: inline-block;
            width: 34px;
            height: 34px;
            text-align: center;
            line-height: 34px;
            font-size: 24px;
            color: var(--color-base-7);
            text-decoration: none;
            transition: var(--transition-base);
          }
          .btn:hover {
            cursor: pointer;
            color: var(--color-base-8);
            border-radius: var(--border-radius-base);
            background-color: var(--color-base-2);
            transition: var(--transition-base);
          }
        `}</style>
      </Card>
  </div>)
}

export default Contack
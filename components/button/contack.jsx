import Card from '@/components/card'
import Space from '@/components/space'

const Contack = ({
  subTitle,
  url,
  title,
  coverImage
}) => {
  return (<div>
      <Card>
        <Space size={20}>
          <a role="button" aria-hidden tabIndex="1" rel="external next" target="_blank" className='btn is-focus iconfont icon-QQkongjian' href={`https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https://wuh.site${url}&sharesource=qzone&title=${title}&pics=${coverImage}&summary=${subTitle}`} />
          <a role="button" aria-hidden tabIndex="1" rel="external next" target="_blank" className='btn is-focus iconfont icon-ttww' href={`https://twitter.com/intent/tweet?text=${subTitle}&url=https://wuh.site${url}`} target='_blank' />
          <a role="button" aria-hidden tabIndex="1" rel="external next" target="_blank" className='btn is-focus iconfont icon-qq' href={`http://service.weibo.com/share/share.php?url=https://wuh.site${url}&sharesource=weibo&title=${title}&pic=${coverImage}`} />
          <a role="button" aria-hidden tabIndex="1" className='btn is-focus iconfont icon-zhihu' href="/" />
          <a role="button" aria-hidden tabIndex="1" className='btn is-focus iconfont icon-insertlink' href="/" />
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
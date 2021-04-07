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
          <a tabIndex="1" target="_blank" className='btn is-focus iconfont icon-QQkongjian' href={`https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https://wuh.site${url}&sharesource=qzone&title=${title}&pics=${coverImage}&summary=${subTitle}`} />
          <a tabIndex="1" target="_blank" className='btn is-focus iconfont icon-ttww' href={`https://twitter.com/intent/tweet?text=${subTitle}&url=https://wuh.site${url}`} target='_blank' />
          <a tabIndex="1" target="_blank" className='btn is-focus iconfont icon-qq' href={`http://service.weibo.com/share/share.php?url=https://wuh.site${url}&sharesource=weibo&title=${title}&pic=${coverImage}`} />
          <a tabIndex="1" className='btn is-focus iconfont icon-zhihu' href="/" />
          <a tabIndex="1" className='btn is-focus iconfont icon-insertlink' href="/" />
        </Space>
        <style jsx>{`
          .btn {
            display: inline-block;
            width: 34px;
            height: 34px;
            text-align: center;
            line-height: 34px;
            font-size: 24px;
            color: #333;
            text-decoration: none;
            transition: all .5s ease;
          }
          .btn:hover {
            cursor: pointer;
            color: #666;
            border-radius: 3px;
            background-color: #ccc;
          }
        `}</style>
      </Card>
  </div>)
}

export default Contack
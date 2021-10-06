import React from 'react'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import { usePostContext } from '@/components/post/context'
import Space from '@/components/space/space'

import { Button } from '.'

export type ShareTypeProps = {}

type createBtnName = 'qqzone' | 'qqperson' | 'twitter' | 'weibo'
type createBtnOps = {
  getQuery?: () => string,
  btnOption: {
    title: string,
    cover_img: string,
    sub_title: string
  }
}
const createBtnHref = (key: createBtnName, ops: createBtnOps): string => {
  const { title, cover_img: coverImg, sub_title: subTitle } = ops.btnOption
  const maps = {
    qqzone: {
      href: 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey',
      query: {
        sharesource: 'qzone',
        title: title,
        pics: coverImg,
        summary: subTitle,
        desc: `${subTitle} -- 来自于[@吴尒红]的博客`
      }
    },
    qqperson: {
      href: 'http://connect.qq.com/widget/shareqq/index.html',
      query: {
        sharesource: 'qzone',
        title: title,
        pics: coverImg,
        summary: subTitle,
        desc: `${subTitle} -- 来自于[@吴尒红]的博客`
      }
    },
    twitter: {
      href: 'https://twitter.com/intent/tweet',
      query: {
        text: `《${title}》 -- ${subTitle}`
      }
    },
    weibo: {
      href: 'http://service.weibo.com/share/share.php',
      query: {
        title: `《${title}》 -- ${subTitle}`,
        sharesource: 'weibo',
        pic: coverImg
      }
    }
  }
  const current = maps[key]

  const queryStringify = new URLSearchParams({
    url: `https://wuh.site/post/${title}`,
    ...current.query
  })
  return current.href + '?' + queryStringify.toString()
}

const ShareGroup: React.FC<ShareTypeProps> = (props) => {
  const { } = props
  const info = usePostContext()
  const { title } = info
  const [_, copy] = useCopyToClipboard(`https://wuh.site/post/${title}`)

  const qqzone = createBtnHref('qqzone', { btnOption: info })
  const qqperson = createBtnHref('qqperson', { btnOption: info })
  const twitter = createBtnHref('twitter', { btnOption: info })
  const weibo = createBtnHref('weibo', { btnOption: info })
  // const qqzone = `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https://wuh.site/post/${title}&sharesource=qzone&title=${title}&pics=${coverImage}&summary=${subTitle}&desc=简单简单的描述`
  // const qqperson = `http://connect.qq.com/widget/shareqq/index.html?url=https://wuh.site/post/${title}&sharesource=qzone&title=${title}&pics=${coverImage}&summary=${subTitle}&desc=简单描述`
  // const twitter = `https://twitter.com/intent/tweet?text=${subTitle}&url=https://wuh.site/post/${title}`
  // const weibo = `http://service.weibo.com/share/share.php?url=https://wuh.site/post/${title}&sharesource=weibo&title=${title}&pic=${coverImage}`

  return <div className="ww_button ww_button-group ww_button-group__share">
    <Space>
      <Button className='btn__item' htmlHref={qqzone} hrefClassName='ww_button__share--qqzone' icon='icon-QQkongjian' ghost />
      <Button className='btn__item' htmlHref={qqperson} hrefClassName='ww_button__share--qq' icon='icon-qq' ghost />
      <Button className='btn__item' htmlHref={twitter} hrefClassName='ww_button__share--twitter' icon='icon-ttww' ghost />
      <Button className='btn__item' htmlHref={weibo} hrefClassName='ww_button__share--weibo' icon='icon-weibo-circle-fill' ghost />
      <Button className='btn__item' hrefClassName='ww_button__share--zhihu' icon='icon-zhihu' ghost />
      <Button className='btn__item' onClick={copy} hrefClassName='ww_button__share--link' icon='icon-insertlink' ghost />
    </Space>
  </div>
}

export default ShareGroup
import React, { useRef } from 'react'
import Space from '@/components/space/space'
import Affix from '@/components/affix'
import { useHover } from 'ahooks'
import { Button } from '.'

export type BehaviorTypeProps = {}

const useScroll = () => {
  const speed = 20
  const scroll = () => {
    if (window.pageXOffset <= window.outerHeight) {
      scroll()
    }
    window.scroll(0, window.pageXOffset + 20)
  }

  return {
  }
}

const Behavior: React.FC<BehaviorTypeProps> = (props) => {
  const { } = props
  const btnDownRef = useRef<any>()
  useHover(btnDownRef, {
    onEnter: () => {
      console.log('======= [onEnter]')
    }
  })

  console.log('======== [btnDownRef]', btnDownRef)

  return (<Affix position='right' offsetY={'70vh'} offsetX={'90vw'}>
    <div className="ww_button ww_button-group ww_button-group__state">
      <Space direction='vertical' size={0}>
        <Button className='btn__item' ghost htmlHref='https://src.wuh.site/common/rss.xml' shape='rect' icon='icon-Rss' />
        <Button className='btn__item' ghost shape='rect' icon='icon-up' />
        <Button ref={btnDownRef} className='btn__item' ghost shape='rect' icon='icon-down' />
        <Button className='btn__item' ghost htmlHref='mailto:wuh131420@foxmail.com?subject=联系我吧&body=在这里写内容' shape='rect' icon='icon-email' />
      </Space>
    </div>
  </Affix>)
}

export default Behavior
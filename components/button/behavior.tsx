import React from 'react'
import Affix from '../affix'
import Space from '@/components/space/space'
import { Button } from '.'

export type BehaviorTypeProps = {}
const Behavior: React.FC<BehaviorTypeProps> = (props) => {
  const { } = props

  return (<Affix position='right' offsetY={'70vh'} offsetX={'90vw'}>
    <div className="ww_button ww_button-group ww_button-group__state">
      <Space direction='vertical' size={0}>
        <Button className='btn__item' ghost shape='rect' icon='icon-Rss' />
        <Button className='btn__item' ghost shape='rect' icon='icon-up' />
        <Button className='btn__item' ghost shape='rect' icon='icon-down' />
        <Button className='btn__item' ghost htmlHref='mailto:wuh131420@foxmail.com?subject=联系我吧&body=在这里写内容' shape='rect' icon='icon-email' />
      </Space>
    </div>
  </Affix>)
}

export default Behavior
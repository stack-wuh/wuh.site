import React from 'react'
import Space from '@/components/space/space'
import Affix from '@/components/affix'
import { Button } from '.'

const StateGroup: React.FC<{}> = (props) => {
  const { } = props

  return (<Affix position='right' offsetY={120}>
    <div className="ww_button ww_button-group">
      <Space direction='vertical' size={0}>
        <Button className='ww_button__state ww_button__state--lang' ghost size='small' icon='icon-Exportservices' />
        <Button className='ww_button__state ww_button__state--dark' ghost size='small' icon='icon-Sun' />
      </Space>
    </div>
  </Affix>)
}

export default StateGroup
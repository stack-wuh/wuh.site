import * as React from 'react'
import Affix from '@/components/affix'
import Modal from '@/components/modal'

const Gallery = () => {
  const [visible, setvisible] = React.useState(false)

  return (<>
    <Modal title='注意' visible={visible} onCancel={() => setvisible(false)} footer={false}>
      <p style={{ height: '120vh' }}>hello world</p>
    </Modal>
    <Affix offsetY={'70vh'}>
      <span onClick={() => setvisible(true)}>click</span>
    </Affix>
  </>)
}

export default Gallery
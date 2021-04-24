import { useContext } from 'react'

import { AudioContext } from './index'

const withAudio = (Component) => {
  const audio = useContext(AudioContext)

  return <AudioContext.Coonsumer>
    {
      props => <Component {...props} audio={audio} />
    }
  </AudioContext.Coonsumer>
}

export default withAudio
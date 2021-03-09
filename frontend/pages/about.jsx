import withLayout from '@/layout/withLayout'

const About = () => {
  return (<div className='about'>
    <p className='description'>Nothing</p>
    <style jsx>{`
      .about {
        height: 80vh;
        font-size: 30px;
        text-align: center;
        line-height: 10em;
        overflow: hidden;
      }
      .about p {
        margin-left: -20%;
        user-select: none;
      }
    `}
    </style>
  </div>)
}

export default withLayout(About)
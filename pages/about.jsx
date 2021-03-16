import withLayout from '@/layout/withLayout'
import LocationMap from '@/components/amap'
import Divider from '@/components/divider'
import Empty from '@/components/empty'
import Space from '@/components/space'

const About = () => {
  return (<div className='about'>
    <div className="about-list">
      <ul>
        <li>
          <i className='iconfont icon-email' />
          <span>柴门闻犬吠, 风雪夜归人</span>
        </li>
        <li>
          <i className="iconfont icon-email" />
          <span>周杰伦, 纯音乐, 网抑云</span>
        </li>
        <li>
          <i className='iconfont icon-email' />
          <span>阅读, 历史, 小说, 推理, 诗词</span>
        </li>
      </ul>
    </div>
    <Divider />
    <div className="about-map">
      <LocationMap />
    </div>
    <Divider />
    <Empty style={{ marginBottom: 16 }} />
    <style jsx>{`
      .about {
        padding: 0 1rem;
        font-size: 30px;
        overflow: hidden;
        font-size: 14px;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      li {
        height: 40px;
        line-height: 40px;
        padding: 4px 0;
        vertical-align: baseline;
      }
      li i {
        margin-right: 8px;
      }
    `}
    </style>
  </div>)
}

export default withLayout(About)
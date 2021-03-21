import withLayout from '@/layout/withLayout'
import LocationMap from '@/components/amap'
import Divider from '@/components/divider'
import Empty from '@/components/empty'

const About = () => {
  return (<div className='about'>
    <div className="about-list">
      <ul>
        <li>
          <i className='iconfont icon-email' />
          <span>柴门闻犬吠, 风雪夜归人</span>
        </li>
        <li>
          <i className='iconfont icon-copy' />
          <span>他是一个男孩，尽管岁数不小了，还是想继续活在理想的世界里，因为现实世界里的月光太惨白。</span>
        </li>
        <li>
          <i className="iconfont icon-favorites" />
          <span>周杰伦, 纯音乐, <a href="https://music.163.com/#/playlist?id=565717308" target='_blank'>网抑云</a></span>
        </li>
        <li>
          <i className='iconfont icon-Notvisible' />
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
      .about-list {
        border-radius: 3px;
        padding: .2em;
        box-sizing: border-box;
        background-color: var(--color-background-primary);
        color: var(--color-text-less);
        border: 1px solid var(--color-border);
        transition: all .5s ease;
      }
      a {
        color: inherit;
      }
    `}
    </style>
  </div>)
}

export default withLayout(About)
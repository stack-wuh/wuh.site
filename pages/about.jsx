import withLayout from '@/layout/withLayout'

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
    <style jsx>{`
      .about {
        padding: 0 1rem;
        font-size: 30px;
        line-height: 10em;
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
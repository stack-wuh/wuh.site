const Tag = ({
  children,
  icon,
  color = '#31cc79'
}) => {
  const prefix = icon && (<i className={['iconfont', icon].join()} />)

  return (<div className='tag tag-color'>
    <div className='tag-inner'>
      {prefix}
      {children}
    </div>
    <style jsx>{`
      .tag {
        display: inline-block;
        height: 1.5em;
        line-height: 1.5em;
        border-radius: var(--border-radius-base);
        user-select: none;
        box-sizing: border-box;
        overflow: hidden;
      }
      .tag-inner {
        display: inline-flex;
        align-items: center;
        padding: 0 4px;
      }
      .tag-color {
        color: #fff;
        background-color: ${color};
      }
    `}</style>
  </div>)
}

export default Tag
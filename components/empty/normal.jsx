const Empty = ({ style, title, center, children, goast }) => {
  let classNames = 'empty'
  if (center) {
    classNames += ' is-center'
  }


  return (<div className={classNames} style={style}>
    {/* 幽灵模式下只渲染children */}
    { !goast &&  <>
      <p className='nothing'>{title}</p>
    </>}

    {children}

    <style jsx>{`
      .empty {
        width: 100%;
        min-height: 4rem;
        padding: 8px;
        margin: 8px 0;
        color: var(--color-base-7);
        border: 1px solid var(--color-gray-1);
        box-sizing: border-box;
        border-radius: 3px;
        background-color: var(--color-gray-2);
        user-select: none;
        transition: var(--transition-base);
      }
      .nothing {
        height: 4rem;
        margin: 0;
        padding: 1em 0;
        font-size: 22px;
        text-align: center;
        line-height: 4rem;
      }

      .is-center {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </div>)
}

Empty.defaultProps = {
  title: 'Nothing About',
  goast: false
}

export default Empty
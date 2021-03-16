import React, { Children } from 'react'

const Space = ({
  children,
  size,
  direction,
  style,
  bordered
}) => {
  const initialSize = size ?? 8
  const initialDirection = direction ?? 'row'
  const initialStyle = {
    ...style,
    flexDirection: initialDirection
  }

  const childStyle = {}
  const lastChildStyle = {}
  if (initialDirection === 'row') {
    childStyle.marginRight = initialSize
    lastChildStyle.marginRight = 0
  } else {
    childStyle.marginBottom = initialSize
    lastChildStyle.marginBottom = 0
  }


  const childs = Children.map(children, (item, index) => {
    const child = React.cloneElement(item, {
      className: ['space-item ', item.props.className??null, bordered && 'space-item-border'].join(" "),
      key: Math.random() ?? item.key,
      style: index === children.length - 1 ? lastChildStyle : childStyle
    })
    
    return child
  })

  return (<div className='space' style={initialStyle}>
    {childs}
    <style jsx>{`
      .space {
        width: auto;
        height: auto;
        display: flex;
        justiful-content: flex-start;
        margin: 0;
        padding: 6px 8px;
        box-sizing: border-box;
      }
      .space-item {
        flex: 1 1 auto;
        display: inline-block;
      }
      .space-item-border {
        border: 1px solid #eee;
        flex: 1 1 auto;
        display: inline-block;
        padding: 0;
        margin: 0;
        border: 1px solid #eee;
      }
    `}</style>
  </div>)
}

export default Space
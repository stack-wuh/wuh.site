const Empty = ({ style }) => {
  return (<div className='empty' style={style}>
    <p className='nothing'>Nothing About</p>

    <style jsx>{`
      .empty {
        width: 100%;
        min-height: 4rem;
        padding: 8px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        border-radius: 3px;
        background-color: rgba(239, 229, 229, .5);
        user-select: none;
      }
      .nothing {
        height: 4rem;
        margin: 0;
        padding: 1em 0;
        font-size: 22px;
        text-align: center;
        line-height: 4rem;
      }
    `}</style>
  </div>)
}

export default Empty
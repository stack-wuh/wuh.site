const LoadmoreButton = ({
  onClick,
  disabled,
  children
}) => {
  const childrenWrapper = children ?? 'loadmore'

  return (<>
    <div className='button'>
      <button tabIndex="-1" disabled={disabled} onClick={onClick}>{childrenWrapper}</button>
    </div>
    <style jsx>{`
      .button {
        display: inline-block;
        height: 40px;
        width: 100%;
        width: 100%;
        padding: 3px;
        border: none;
        outline: none;
        line-height: 34px;
        box-sizing: border-box;
        overflow: hidden;
      }
      button {
        background-color: var(--color-background-primary);
        outline: none;
        border: 1px solid #eee;
        text-align: left;
        width: 100%;
        height: 100%;
        border-radius: 2px;
        color: #ccc;
        transition: all .5s ease;
      }
      button:hover {
        cursor: pointer;
        color: #1e97f7;
        border: 1px solid #1e97f7;
        border-radius: 3px;
        transition: all .5s ease;
      }
      button[disabled]:hover {
        cursor: not-allowed;
        color: #ccc;
        border-color: #ccc;
      }
    `}</style>
  </>)
}

export default LoadmoreButton
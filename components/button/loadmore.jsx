import config from '../../global.config'
const { pager } = config

const LoadmoreButton = ({
  onClick,
  disabled,
  children
}) => {
  const childrenWrapper = children ?? (disabled ? pager.disabled_text : pager.next_text)

  return (<>
    <div className='button' onClick={onClick}>
      <i className='iconfont icon-costoms-alearance fade-color' />
      <button
        tabIndex="0" 
        name='loadmore' 
        role='button' 
        aria-hidden 
        disabled={disabled}>
          {childrenWrapper}
      </button>
    </div>
    <style jsx>{`
      .button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 3.6em;
        padding: var(--padding-base);
        padding-right: 0;
        border: 1px solid transparent;
        outline: none;
        font-size: var(--font-size-base);
        line-height: 22px;
        box-sizing: border-box;
        background-color: var(--color-gray-1);
        overflow: hidden;
        transition: var(--transition-base);
      }

      .button:hover {
        cursor: pointer;
        border: 1px solid var(--color-yellow-7);
        border-radius: var(--border-radius-base);
        background-color: var(--color-gray-2);
        transition: var(--transition-base);
      }

      .button::before {
        content: '';
        position: absolute;
        top: 0;
        right: 9em;
        bottom: 0;
        border-bottom: 4em solid var(--loadmore-button-large);
        border-left: 4em solid transparent;
        transform: translateX(15px);
        transition: var(--transition-base);
      }
      .button::after {
        content: '';
        position: absolute;
        top: -2em;
        bottom: 0;
        right: 10em;
        width: 1em;
        height: 8em;
        background-color: var(--loadmore-button-regular);
        transform: rotateZ(45deg);
        transition: var(--transition-base);
      }

      .button i {
        font-size: 32px;
        color: var(--color-yellow-8);
      }
      .button button {
        font-size: var(--font-size-base);
      }

      button {
        position: relative;
        outline: none;
        border: none;
        background-color: var(--loadmore-button-large);
        width: 8em;
        height: 4em;
        padding: 0;
        margin: 0;
        text-align: center;
        color: var(--color-base-1);
        letter-spacing: .25em;
        font-weight: var(--font-weight-medium);
        transition: var(--transition-base);
      }
      button:hover {
        cursor: pointer;
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
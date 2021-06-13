import ReactDom from 'react-dom'

const Dialog = ({ children, visible, onCancel, allowCloseIcon, title, bodyStyle, dialogStyle, wrapperStyle }) => {
  const outerRender =  (<dialog id="dialog" className="dialog" open={visible} style={dialogStyle}>
    <div className="dialog__outer" style={wrapperStyle}>
      <div className="dialog__header">
        <span role='label' aria-label='Dialog' className="dh__title">
          <i className='iconfont-color iconhangkonghangtian-leidaradars' />&nbsp;{title}&nbsp;<i className='iconfont-color iconhangkonghangtian-leidaradars' />
        </span>
        {
          allowCloseIcon && (<span onClick={onCancel} role='button' className="dh__icon iconfont icon-searchclose" />)
        }
      </div>
      <div className="dialog__body" style={bodyStyle}>
        {children}
      </div>
    </div>
    <style jsx>{`
      .dialog {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        padding: 0;
        color: var(--color-base-10);
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, .4);
        border: none;
        z-index: 999999 !important;
        transition: var(--transition-base);
      }

      .dialog__outer {
        display: flex;
        flex-direction: column;
        width: 80%;
        height: auto;
        min-height: calc(100vh - 36px);
        margin: 18px auto;
        color: inherit;
        border-radius: var(--border-radius-base);
        background-color: var(--color-base-1);
        transition: var(--transition-base);
        overflow: hidden;
        border: 1px solid var(--color-base-5);
      }

      .dialog__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        width: 100%;
        padding: 18px;
        border-bottom: 1px solid var(--color-base-5);
        box-sizing: border-box;
        background-color: var(--color-gray-3);
      }

      .dialog__header .dh__icon {
        padding: 0.5em;
        font-size: 20px;
      }
      .dialog__header .dh__icon:hover {
        cursor: pointer;
      }

      .dialog__body {
        flex: 1;
        height: 80vh;
        padding: calc(var(--padding-base) * 2);
        background-color: var(--color-base-1);
        color: inherit;
      }
    `}</style>
  </dialog>)

  return ReactDom.createPortal(outerRender, document.querySelector('body'))
}

Dialog.defaultProps = {
  children: null,
  visible: false,
  onCancel () {},
  allowCloseIcon: true,
  title: 'Dialog'
}

export default typeof document !== 'undefined' ? Dialog : () => null
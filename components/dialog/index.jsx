import ReactDom from 'react-dom'

const Dialog = ({ children, visible, onCancel, allowCloseIcon, title }) => {
  const outerRender =  (<dialog id="dialog" className="dialog" open={visible}>
    <div className="dialog__outer">
      <div className="dialog__header">
        <span role='label' aria-label='Dialog' className="dh__title">{title}</span>
        {
          allowCloseIcon && (<span onClick={onCancel} role='button' className="dh__icon">X</span>)
        }
      </div>
      <div className="dialog__body">
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
        box-sizing: border-box;
        background-color: rgba(var(--color-base-6), .55);
        z-index: 999999 !important;
        transition: var(--transition-base);
      }

      .dialog__outer {
        display: flex;
        flex-direction: column;
        width: 80%;
        height: auto;
        margin: 18px auto;
        border-radius: var(--border-radius-base);
        background-color: var(--color-base-1);
        transition: var(--transition-base);
        overflow: hidden;
      }

      .dialog__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        width: 100%;
        padding: 18px;
        box-sizing: border-box;
        background-color: var(--color-base-10);
      }

      .dialog__header .dh__icon {
        padding: 0.5em;
      }
      .dialog__header .dh__icon:hover {
        cursor: pointer;
      }

      .dialog__body {
        flex: 1;
        height: 80vh;
        padding: calc(var(--padding-base) * 2);
        background-color: var(--primary--color);
        color: var(--color-base-10);
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
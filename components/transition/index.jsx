import { PageTransition } from 'next-page-transitions'

const TIMEOUT = 400

const ops = {
  timeout: TIMEOUT,
  classNames: "page-transition",
  loadingComponent: <div>Loading...</div>,
  loadingDelay: 500,
  loadingTimeout: {
    enter: TIMEOUT,
    exit: 0
  },
  loadingClassNames: 'loading-indicator'
}

const Transition = ({ children }) => {
  return (<>
    <PageTransition {...ops}>
      {children}
    </PageTransition>

    <style jsx global>{`
      .page-transition-enter {
        opacity: 0;
        transform: translate3d(0, 24px, 0);
      }
      .page-transition-enter-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: opacity 300ms, transform ${TIMEOUT}ms;
      }
      .page-transition-exit {
        opacity: 1;
      }
      .page-transition-exit-active {
        opacity: 0;
        transition: opacity ${TIMEOUT}ms;
      }
    `}</style>
  </>)
}

export default Transition
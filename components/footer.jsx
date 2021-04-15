import { withConfig } from '@/components/ConfigProvider'

const Footer = ({
  footer
}) => {
  return (<>
    <footer className='footer'>
      <p>{footer?.lf} | {footer?.main} | <strong>{footer?.rg}</strong></p>
      <p className='footer__copyright'>
        <span>{footer?.copyright}</span>
        <span>{footer?.record_varchar}</span>
      </p>
    </footer>
    <style jsx>{`
      footer {
        width: 100%;
        height: 80px;
        border-top: 1px solid #eaeaea;
        font-size: 14px;
        text-align: center;
        color: var(--color-text-less);
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .footer__copyright span:not(:last-of-type) {
        margin-right: 10px;
      }
    `}</style>
  </>)
}

export default withConfig(Footer)
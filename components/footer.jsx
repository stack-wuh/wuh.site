import { withConfig } from '@/components/ConfigProvider'

const Footer = ({
  footer
}) => {
  return (<>
    <footer className='footer'>
      <p className="f__row">{footer?.lf} | {footer?.main} | <strong>{footer?.rg}</strong></p>
      <p className='footer__copyright f__row'>
        <span>{footer?.copyright}</span>
        <span><a href="https://beian.miit.gov.cn/" target="_blank">{footer?.record_varchar}</a></span>
      </p>
    </footer>
    <style jsx>{`
      footer {
        width: 100%;
        height: 80px;
        border-top: var(--border-base);
        font-size: 14px;
        text-align: center;
        transition: var(--transition-base);
      }
      .f__row {
        margin: var(--margin-base-2) 0;
        position: relative;
      }

      .footer__copyright span:not(:last-of-type) {
        margin-right: var(--margin-base);
      }
    `}</style>
  </>)
}

export default withConfig(Footer)
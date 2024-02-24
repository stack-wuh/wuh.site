import * as React from 'react'
import { config } from '@wuh/config'

const footerConf = config.footer

const Footer:React.FC = () => {
  return <footer className="footer w-full px-8 py-4 text-base">
    <div className='footer-wrapper flex flex-col justify-center items-center space-y-2'>
      <p className="flex flex-row">
        <span>{footerConf.tip}</span>
        <span className="border-x border-x-zinc-200 px-2 mx-2">由<strong>Nextjs</strong>、<strong>Mongodb</strong>和<strong>Nestjs</strong>驱动</span>
        <span>{footerConf.title}</span>
      </p>
      <p className="flex flex-row justify-between gap-4">
        <a className="text-blue-400" href="https://beian.miit.gov.cn/" target="blank">{footerConf.MIIT}</a>
        <a className="text-blue-400" href="https://beian.mps.gov.cn/#/query/webSearch" target="blank">{footerConf.MoPSF}</a>
      </p>
      <p>{footerConf.copyright}</p>
    </div>
  </footer>
}

export default Footer
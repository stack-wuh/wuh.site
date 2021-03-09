const Footer = () => {
  return (<>
    <footer className='footer'>
      <p>你也想起舞吗 | 由NextJS、MongoDB和Express驱动 | <strong>水滴石穿</strong> 闻鸡起舞</p>
      <p className='footer__copyright'>
        <span>Copyright© 2021 Shadow.</span>
        <span>鄂ICP备20001814号 - 1</span>
      </p>
    </footer>
    <style jsx>{`
      footer {
        width: 100%;
        height: 80px;
        border-top: 1px solid #eaeaea;
        font-size: 14px;
        text-align: center;
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

export default Footer
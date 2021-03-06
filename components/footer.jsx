const Footer = () => {
  return (<>
    <footer className='footer'>
      <p>你也想起舞吗 | 由NextJS、MongoDB和Express驱动 | <strong>水滴石穿</strong> 日月星辰</p>
      <p>鄂ICP备20001814号 - 1</p>
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
    `}</style>
  </>)
}

export default Footer
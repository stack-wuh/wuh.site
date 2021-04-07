const Alert = ({
  title,
  description
}) => {
  const titleWrap = title && (<p className='alert-desc alert-title'>{title}</p>)
  const descripionWrap = description && (<p className="alert-desc alert-description">{description}</p>)

  return (<>
    <div className="alert">
      {titleWrap}
      {descripionWrap}
    </div>
    <style jsx global>{`
      .alert {
        padding: 8px;
        border-radius: 3px;
        box-sizing: border-box;
        background-color: #ffe58f;
      }
       
      .alert-desc {
        margin: 0;
        padding:.5em;
      }

      .alert-title {
        font-size: 15px;
      }

      .alert-description {
        font-size: 14px;
      }
    `}</style>
  </>)
}

export default Alert
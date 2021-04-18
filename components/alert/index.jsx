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
        padding: var(--padding-base);
        border-radius: var(--border-radius-base);
        box-sizing: border-box;
        color: var(color-base-8);
        background-color: var(--alert-color-background);
        transition: var(--transition-base);
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
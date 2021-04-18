const Card = ({
  children
}) => {
  return <div className="card">
    <div className='card-wrapper'>
      {children}
    </div>
    <style jsx>{`
      .card {
        width: 100%;
        height: 100%;
        padding: var(--padding-base);
        box-sizing: border-box;
        background-color: var(--color-gray-1);
        border-radius: var(--border-radius-base);
        transition: var(--transition-base);
      }
    `}</style>
  </div>
}

export default Card
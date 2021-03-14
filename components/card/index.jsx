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
        padding: 8px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 3px;
      }
    `}</style>
  </div>
}

export default Card
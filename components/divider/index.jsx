const Divider = () => {
  return <div className="divider">
    <hr/>
    <style jsx global>{`
      .divider {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
      }
      hr {
        height: 1px;
        margin: 1rem 0;
        outline: 0;
        border: none;
        background-color: #ccc;
      }
    `}</style>
  </div>
}

export default Divider
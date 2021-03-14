const Affix = ({
  top,
  right,
  bottom,
  left,
  style,
  children
}) => {
  const initialStyle = {
    top,
    right,
    bottom,
    left
  }

  const styles = style ?? initialStyle

  return <div className="affix" style={styles}>
    {children}
    <style jsx>{`
      .affix {
        position: fixed;
        width: auto;
        height: auto;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
    `}</style>
  </div>
}

export default Affix
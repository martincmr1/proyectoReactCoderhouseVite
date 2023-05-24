
const FlexComponent = ({children,clase}) => {
const flexStyle ={display:"flex",justifyContent:'space-around',flexWrap:'wrap'}
  return (
    <div className={clase} style={flexStyle}>{children}</div>
  )
}

export default FlexComponent
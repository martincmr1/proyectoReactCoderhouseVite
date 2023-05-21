

const FlexComponent = ({children}) => {
  const flexStyle ={display:"flex",justifyContent:'space-around',flexWrap:'wrap'}
  
  
    return (
    <div style={flexStyle}>{children}</div>
  )
}

export default FlexComponent
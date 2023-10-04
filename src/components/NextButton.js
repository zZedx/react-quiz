import React from 'react'

const NextButton = ({dispatch , answer ,children}) => {
    if(answer === null) return null
  return (
    <button className='btn btn-ui' onClick={()=> dispatch({type : "nextQuestion"})}>{children}</button>
  )
}

export default NextButton
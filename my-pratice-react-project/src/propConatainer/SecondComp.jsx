
 
import React from 'react'

const SecondComp = (props) => {
    const {model, year, dealer,color}=props.myCar
  return (
    <div>
        <div>{model}</div>
        <div>{year}</div>
        <div>{dealer}</div>
        <div>{color}</div>
    </div>
  )
}

export default SecondComp
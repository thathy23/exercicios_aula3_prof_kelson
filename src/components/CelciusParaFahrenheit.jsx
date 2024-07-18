import React from 'react'

const CelciusParaFahrenheit = (props) => {
    const temperatura = (props.C * 1.8) + 32
    
  return (
    <div className='conversao'>
        <h1> {props.C} graus Celcius é o mesmo que {temperatura} Fahrenheit </h1>
    </div>
  )
}

export default CelciusParaFahrenheit
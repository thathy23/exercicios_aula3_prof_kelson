import React from 'react'

const FahrenheitParaCelsius = (props) => {
    const temperatura =  (props.F - 32) * 1.8
  return (
    <div className='conversao'>
        <p>{props.F} graus Fahrenheit é o mesmo que {temperatura} graus Celcius </p> 
    </div>
  )
}

export default FahrenheitParaCelsius
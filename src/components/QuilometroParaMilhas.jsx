import React from 'react'

const QuilometroParaMilhas = (props) => {
    const distancia = props.Q*0.621371
  return (
    <div className='conversao'>
        <h1> {props.Q} quilometros é o mesmo que {distancia} Milhas </h1>
    </div>
  )
}

export default QuilometroParaMilhas
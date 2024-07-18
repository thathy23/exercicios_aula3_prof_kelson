import React, { useState } from 'react'

const Sozinha_HookContador = () => {

    const [contador, setContador] = useState(1)

    const incrementarContador = () => {
        setContador(contador + 1)

    }

    const decrementarContador = () => {
        setContador(contador - 1)

    }
    
  return (

    <div className='container'>
        <h1>Modelo Hook Contador</h1>
        <h2>Contador: {contador}</h2>
        <button onClick={incrementarContador}>INCREMENTA</button>
        <br /><br />
        <button onClick={decrementarContador}>DECREMENTA</button>
    </div>
  )
}

export default Sozinha_HookContador
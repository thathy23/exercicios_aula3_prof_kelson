import React, { useState } from 'react'

const HookQuina = () => {

    const [numeroSorteado, setNumeroSorteado] = useState([])
    const [novoNumeroSorteado, setNovoNumeroSorteado] = useState("")

    const sortearNumero = () => {
        if(numeroSorteado.length < 5) {
            const novoNumero = (Math.floor(Math.random() * 80) - 1)
            setNumeroSorteado([...numeroSorteado, novoNumero])   
            
        } else {
            alert ('Ja temos 5 números sorteados')
        }

    }
  return (
    <div>
        <h1>Sorteador da Quina! :)</h1>
        <br /><br />
        <button onClick={sortearNumero}>Sortear Número</button>
        <br /><br />
        <h1>Último Número Sorteado: {numeroSorteado[numeroSorteado.length - 1]}</h1>
        <br /><br />
        <h1>Números Sorteados: {numeroSorteado.join("-")}</h1>
    </div>
  )
}

export default HookQuina

import React, { useState } from 'react'

const HookMegaSena = () => {

    const [numeroSorteado, setNumeroSorteado] = useState([])
    const [novoNumeroSorteado, setNovoNumeroSorteado] = useState("")


    const sortearNumero = () => {

        if(numeroSorteado.length < 6) {
            const novoNumero = (Math.floor(Math.random() * 60) + 1)
            setNumeroSorteado([...numeroSorteado, novoNumero])                   
        } else {
            alert ('Ja temos 6 números sorteados!')
        }        
    }
  return (
    <div>
        <h1> Sorteador da Mega em React! :) </h1>  
        <br /><br /><br />
        <button onClick={sortearNumero}>Sortear Número</button>  
        <br /><br />
        <h1>Último nùmero sorteado: {numeroSorteado[numeroSorteado.length - 1]}</h1>    
        <br /><br />
        <h1>Sorteados: {numeroSorteado.join("-")} </h1>

    </div>
  )
}

export default HookMegaSena
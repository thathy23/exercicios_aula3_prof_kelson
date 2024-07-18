import React from 'react'
import Adicao from './components/Adicao'
import './App.css'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'

const App = () => {
  return (
    <div className="container">
      <Adicao num1={2} num2={3}/>
      <Subtracao num1={10} num2={5}/> 
      <Multiplicacao num1={5} num2={3}/>   
      <Divisao num1={10} num2={5}/>
    </div>
  )
}

export default App

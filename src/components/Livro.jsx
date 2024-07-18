import React from 'react'

const Livro = ({titulo, autor, ano}) => {
  return (
    <div className='livro'>
        <h1>{titulo}</h1>
        <p>Autor: {autor}</p>
        <p>Ano: {ano}</p>
    </div>
  )
}

export default Livro
import React from 'react'
import Livro from './Livro'

const ListaDeLivro = ({ livros }) => {
  return (
    <div>
        {
            livros.map ((livro, index) => (
                <Livro
                    key={index}
                    titulo = {livro.titulo}
                    autor = {livro.autor}
                    ano = {livro.autor}
                />
            ))
        }
    </div>
  )
}

export default ListaDeLivro
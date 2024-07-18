import React from 'react'
import imagemPrivada from '../assets/privado.jpeg';


const TrabalhandoComImagens = () => {
  return (
    <div className='container'>
        <h1>Trabalhando com Imagens</h1>
        <div className='imagens'>
            <div className='imagem'>
                <h2>Imagem da pasta publica</h2>
                <img src="/publica.jpeg" alt="imagem da pasta publica" />
            </div>                
        </div>
             <div className='imagem'>
                <h2>Imagem da pasta assets</h2>
                <img src={imagemPrivada} alt="imagem da pasta assets" />
            </div>    
    </div>        
    
  )
}

export default TrabalhandoComImagens
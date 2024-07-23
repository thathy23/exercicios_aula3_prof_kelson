import React, { useState } from 'react'

const ToDoList = () => {

    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState("");

    const adicionaTarefa = () => {
      if (novaTarefa.trim() !== "" ) {
        setTarefas([...tarefas, novaTarefa])
        setNovaTarefa("")
      }
    }


  return (
    <div className='todo-list'>
      <h2>Lista</h2>
        <input 
          type="text" 
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder='Digite a nova tarefa'
        />
        <button onClick={adicionaTarefa}>Adicionar nova tarefa</button>
        <br /><br />
        <ul>
          {tarefas.map((tarefa,index) => (

            <li key={index}>{tarefa}</li>

          ))}
        </ul>      
    </div>
  )
}

export default ToDoList
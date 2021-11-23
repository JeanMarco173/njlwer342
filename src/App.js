import React, { useState } from 'react';

/// Modifica el componente para que se puedan agregar tareas

export default function App () {

  const [ tasks, setTasks ] = useState(['Sacar la ropa', 'Hacer la cama', 'Leer un rato'])
  const [ task, setTask ] = useState('')

  const handlePressEnter = e => {
    if(e.key === 'Enter'){
      let auxTasks = [...tasks]
      auxTasks.push(task)
      setTasks(auxTasks)
      setTask('')
    }
  }

  return (
    <div className="wrapper">
      <div className="list">
        <h3>Por hacer:</h3>
        <ul className="todo">
          {
            tasks.map( (task, index) => <li key={index}>{task}</li> )
          }
        </ul>
          <form onSubmit={e => { e.preventDefault(); }}>
            <input type="text" id="new-task" value={task} onChange={ e => setTask(e.target.value) } onKeyDown={handlePressEnter} placeholder="Ingresa una tarea y oprime Enter" />
          </form>
      </div>
    </div>
  )
}

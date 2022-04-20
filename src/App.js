import './App.css';

import {useState, useEffec} from 'react'
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from "react-icons/bs"

const API = "http://localhost:3004";

function App() {

  // the global state of application
  
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  
  // 
  function handleSubmit(e)
  {

    const task = {
      id: Math.random(),
      title,
      time,
      done: false,
    }

    e.preventDefault()
    console.log(task)
    setTitle("")
    setTime("")
    
  }

  return (
    <div className="App">
      <div className="task-header">
        <h1>My Tasks</h1>
      </div>

      <div className="form-task">
        <h3>Registre as suas Tarefas</h3>
        <form onSubmit={handleSubmit}>

          <div className="form-control">

            <label htmlFor="title" >Quais as suas Tarefas  ?</label>
            <input
              type="text" name="title" palceholder="Título da tarefa"
              onChange={(e) => setTitle(e.target.value)}
              value={"" || title} required
            />
          </div>

          <div className="form-control">

            <label htmlFor="time" >Duração ?</label>
            <input
              type="text" name="time" palceholder="Tempo estimado 'em horas !' "
              onChange={(e) => setTime(e.target.value)}
              value={"" || time} required
            />
          </div>

          <button>Registrar Tarefa</button>
        </form>
      </div>

      <div className="list-task">
        <h3>Lista de Tarefas</h3>
        {tasks.length === 0 && <p>Relaxe, não há o que fazer !</p>}
      </div>

    </div>
  );
}

export default App;

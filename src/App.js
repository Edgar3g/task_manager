import './App.css';

import {useState, useEffect} from 'react'
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from "react-icons/bs"

const API = "http://localhost:3004";

function App() {

  // the global state of application
  
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  
  // Load task on page
  useEffect(() => {

    const loadData = async() =>{

      setLoading(true)

      const res = await fetch(API + "/todos")
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err))
      
      setLoading(false)
      setTasks(res)   
    }
  })

  // send data to backend 
  const handleSubmit = async (e) =>
  {
    
    e.preventDefault()

    const task = {
      id: Math.random(),
      title,
      time,
      done: false,
    }

    await fetch(API + "/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-type": "application/json"
      },
    })
    
    
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

          <input type="submit" value="Registar Tarefa"/>
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

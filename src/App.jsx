import { useState } from "react";
import { useEffect } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

export default function App(){
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []) 

  useEffect(() => { // Para operações assincronas é necessário a criação de uma segunda função
    // async function fetchTasks() {
    //   const resp = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
    //     method: 'GET'
    //   })
    //   const data = await resp.json()

    //   setTasks(data)
    //   console.log(data)
    // }
    // fetchTasks()
  }, []) // Com as dependencias vazia, a funcao e realizada uma vez, na hora que o site roda

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      console.log(tasks)
      return task
    })
    setTasks(newTasks)
  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  function onAddTaskClick(title, description){
    const newTasks = {
      id: v4(),
      title,
      description,
      isCompleted: false
    }

    setTasks([...tasks, newTasks])
  }

  return(
    <div className="w-full h-max min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
        <AddTask onAddTaskClick={onAddTaskClick}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  )
}
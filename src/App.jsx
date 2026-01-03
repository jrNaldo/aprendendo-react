import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

export default function App(){
  const [tasks, setTasks] = useState([
    { id: 1,
      title: 'Estudar programação',
      description: 'Estudar programação para se tornar desenvolvedor full stack. ',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Estudar ingles',
      description: 'Estudar ingles para se tornar desenvolvedor full stack. ',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Estudar matematica',
      description: 'Estudar matematica para se tornar desenvolvedor full stack. ',
      isCompleted: false
    }
  ])
  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
        <Tasks tasks={tasks}/>
      </div>
    </div>
  )
}
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"

function App(props){
  return (
    <div>
      <h1 className="underline">Gerenciamento de Tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  )
}

export default App
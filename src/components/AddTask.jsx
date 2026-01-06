import { use, useState } from "react"
import Input from "./Input"

export default function AddTask(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function verificaForm(title, description) {
        if(!title.trim() || !description.trim()){
            return alert('Preencha os campos')
        }
        props.onAddTaskClick(title, description)
        setTitle('')
        setDescription('')
    }
    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            <Input placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} type='text'/>

            <Input placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} type='text'/>

            <button 
                className="bg-slate-600 w-full rounded-md p-2 mt-3 text-white border border-transparent transition-all duration-300 ease-in-out hover:bg-white hover:text-slate-600 hover:shadow-lg hover:border-slate-700 hover:border"  
                
                onClick={() => verificaForm(title, description)}
            >
                Adicionar
            </button>
        </div>
    )
}
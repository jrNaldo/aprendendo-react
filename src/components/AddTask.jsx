import { use, useState } from "react"

export default function AddTask(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            <input type="text" id="inome" value={title} onChange={e => setTitle(e.target.value)} className="w-full border-hidden rounded-md p-2 mb-2 outline-none" placeholder="Título da tarefa"/>
            <input type="text" id="idescricao" value={description} onChange={e => setDescription(e.target.value)} className="w-full border-hidden rounded-md p-2 outline-none" placeholder="Descrição da tarefa"/>

            <button 
                className="bg-slate-600 w-full rounded-md p-2 mt-3 text-white border border-transparent transition-all duration-300 ease-in-out hover:bg-white hover:text-slate-600 hover:shadow-lg hover:border-slate-700 hover:border"  
                
                onClick={() => { 
                    if(!title.trim() || !description.trim()){
                        return alert('Preencha os campos')
                    }
                    props.onAddTaskClick(title, description)
                    setTitle('')
                    setDescription('')
                }}
            >
                Adicionar
            </button>
        </div>
    )
}
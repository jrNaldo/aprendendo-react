import { ChevronRightIcon, TrashIcon } from "lucide-react"
import React from "react"
import { useNavigate } from "react-router-dom"

export default function Tasks(props) {
    const navigate = useNavigate()

    function onSeeDetailsClick(task){
        const query = new URLSearchParams()
        query.set('title', task.title)
        query.set('description', task.description)
        navigate(`/task?${query.toString()}`)
    }
    return (
        <div>
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">{props.tasks.map(task => 
                <li key={task.id} className="flex gap-2">

                    <button className={`bg-slate-400 w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}`} onClick={() => props.onTaskClick(task.id)}>
                        {task.title}
                    </button>

                    <button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 p-2 rounded-md text-white">
                        <ChevronRightIcon />
                    </button>

                    <button className="bg-slate-400 p-2 rounded-md text-white " onClick={() => props.onDeleteTaskClick(task.id)}>
                        <TrashIcon/> 
                    </button>
                </li>
            )}</ul>
        </div>
    )
}
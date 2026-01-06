import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react"
import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"

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
                    <Button style={`w-full flex items-center gap-2 ${task.isCompleted && "line-through"}`} onClick={() => props.onTaskClick(task.id)}>
                        {task.isCompleted && <CheckIcon />} {/* O If não pode ser usado em renderização condicional*/}
                        {task.title}
                    </Button>

                    <Button onClick={() => onSeeDetailsClick(task)}><ChevronRightIcon/></Button>

                    <Button onClick={() => props.onDeleteTaskClick(task.id)}><TrashIcon/></Button>
                </li>
            )}</ul>
        </div>
    )
}
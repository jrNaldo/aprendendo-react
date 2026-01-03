import React from "react"

export default function Tasks(props) {
    return (
        <div>
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">{props.tasks.map(task => 
                <li key={task.id} className="bg-slate-400 text-white p-2 rounded-md">{task.title}</li>
            )}</ul>
        </div>
    )
}
import { ChevronLeftIcon } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"

export default function TaskPage(){
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const title = searchParams.get('title')
    const description = searchParams.get('description')
    return(
        <div className="h-screen w-screen bg-slate-500 p-6 text-white">
            <div className="bg-slate-200  text-slate-600 p-4 rounded-md">
                <div className="flex justify-center relative">
                    <button onClick={() => navigate(-1)} className="absolute left-0 bottom-0 top-0">
                        <ChevronLeftIcon />
                    </button>
                    <h1 className="text-3xl font-bold text-center">Detalhes da Tarefa</h1>
                </div>
                <h2 className="text-xl mt-4 mb-4">Titulo: {title}</h2>
                <p className="text-base">Descrição: {description}</p>
            </div>
        </div>
    )
}
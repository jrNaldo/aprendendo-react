export default function AddTask() {
    return(
        <div className="bg-slate-300 p-6 rounded-md ">
            <input type="text" id="inome" className="w-full border-hidden rounded-md p-2 mb-2" placeholder="Título da tarefa"/>
            <input type="text" id="inome" className="w-full border-hidden rounded-md p-2" placeholder="Descrição da tarefa"/>

            <button 
                className="bg-slate-600 w-full rounded-md p-2 mt-3 text-white border border-transparent transition-all duration-300 ease-in-out hover:bg-white hover:text-slate-600 hover:shadow-lg hover:border-slate-700 hover:border"
            >
                Adicionar
            </button>
        </div>
    )
}
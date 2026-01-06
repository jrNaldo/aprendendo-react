export default function Button(props){
    return(
        <button
            className={`bg-slate-400 text-white p-2 ${props.style} text-start rounded-md`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}
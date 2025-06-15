

export default function LoginButton({children}){
    return(
        <button className="bg-emerald-600 text-white font-bold text-lg  px-12 py-5 w-[400px] rounded-full shadow-lg  hover:bg-emerald-400 transition">
            {children}
        </button>
    )
}
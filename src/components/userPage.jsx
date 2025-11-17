import { useState , useEffect} from "react"
import { useNavigate } from "react-router-dom"

// import Alphabets from "./Alphabets"

const LoginPage =() => {
    const [username, setUsername] = useState("")
    const [error, setError] = useState(false)
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

    const navigate = useNavigate() 
   
    function nameInput(event){
        setUsername(event.target.value)
    }

    function startBut(event){
        event.preventDefault()
        if (username===""){
            setError(true)
        }else{
           navigate("/hangman",{state:{username}})
        }
    }
    
   useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

    return(
        isMobile ? 
       (
        <div className="min-h-screen w-full flex items-center justify-center">
          <div
              className={`w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 bg-cover bg-center rounded-xl overflow-hidden`}
              style={{backgroundImage:"url('https://res.cloudinary.com/dpqs7ibuh/image/upload/v1752508189/hangman_ixvqg5.jpg')",}}>
            <div className="flex items-center justify-center h-[70vh] sm:h-screen w-full">
        <form onSubmit={(e) => {e.preventDefault();startBut(e)}}
            className="w-11/12 max-w-md mx-auto backdrop-blur-sm bg-white/20 p-6 sm:p-8 mt-29 rounded-xl flex flex-col items-center space-y-4">
            <label htmlFor="name" className="w-full text-center text-lg sm:text-base font-medium text-black">Username</label>
            <input value={username} id="name" onChange={nameInput} placeholder="Enter your username" className="w-full sm:w-64 px-4 py-2 rounded-md text-center text-black placeholder-gray-500 bg-white/90 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <button onClick={startBut} type="submit" className="w-full sm:w-auto mt-2 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md shadow-lg transition duration-300">Start</button>
            {error && <p className="text-sm text-red-200">Username is required</p>}
        </form>
            </div>
        </div>
    </div>)
        : 
        (
          <div className="flex flex-col justify-center items-center h-auto w-auto bg-cover">
            <div className="bg-[url('https://res.cloudinary.com/dpqs7ibuh/image/upload/v1752508189/hangman_ixvqg5.jpg')] bg-cover bg-center sm:h-screen w-[30vw] flex flex-col justify-center items-center">
                <form className="flex flex-col justify-center items-center backdrop-blur-sm space-y-4 bg-white/20  p-6 rounded-xl shadow-md mt-25">
                    <label htmlFor="name" className="text-lg font-semibold text-black drop-shadow-sm">Username</label>
                    <input value={username} id="name" onChange={nameInput} placeholder="Enter your username" className="px-4 py-2 rounded-md w-64 text-center text-black placeholder-gray-500 bg-white/80 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
                    <button onClick={startBut} type="submit" className="mt-2 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md shadow-lg transition duration-300">Start</button>
                    {error && <p>Username is required</p>}
                </form>
            </div>
        </div>  
        )
        	
    )
}



export default LoginPage;




// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// // import Alphabets from "./Alphabets"

// const LoginPage =() => {
//     const [username, setUsername] = useState("")
//     const [error, setError] = useState(false)

//     const navigate = useNavigate()

//     // Keep accents limited to indigo and cyan

//     function nameInput(event){
//         setUsername(event.target.value)
//     }
//     function startBut(event){
//         event.preventDefault()
//         if (username===""){
//             setError(true)
//         }else{
//            navigate("/hangman",{state:{username}})
//         }
//     }
    


//     return(
//         <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 via-indigo-50 to-slate-100 flex items-center justify-center p-4">
//             <div className="w-11/12 max-w-md md:max-w-lg">
//                 <div className="mb-6 sm:mb-8 flex items-center justify-center gap-1 sm:gap-2">
//                     {"HANGMAN".split("").map((ch, idx) => (
//                         <span
//                             key={idx}
//                             className={`select-none rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 text-white font-extrabold shadow-md ring-1 ring-white/40 px-2 sm:px-3 py-1 sm:py-2 text-xl sm:text-2xl tracking-wide`}
//                         >
//                             {ch}
//                         </span>
//                     ))}
//                 </div>
//                 <form className="flex flex-col items-center justify-center backdrop-blur-sm space-y-4 bg-white/60 border border-white/60 p-6 sm:p-8 rounded-xl shadow-xl">
//                     <label htmlFor="name" className="text-xl sm:text-2xl font-semibold text-slate-800">Username</label>
//                     <input value={username} id="name" onChange={nameInput} placeholder="Enter your username" className="px-4 py-3 rounded-md w-full text-center text-slate-900 placeholder-slate-400 bg-white/95 shadow-inner ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"/>
//                     <button onClick={startBut} type="submit" className="w-full sm:w-auto mt-2 px-6 py-3 text-white font-semibold rounded-md shadow-lg transition-colors duration-200 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700">
//                         Start
//                     </button>
//                     {error && <p className="text-sm sm:text-base text-red-600">Username is required</p>}
//                 </form>
//             </div>
//         </div>
        	
//     )
// }



// export default LoginPage;
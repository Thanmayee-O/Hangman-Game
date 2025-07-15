import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import Alphabets from "./Alphabets"

const LoginPage =() => {
    const [username, setUsername] = useState("")
    const [error, setError] = useState(false)
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

    return(
        <div className="flex flex-col justify-center items-center h-auto w-auto bg-cover max-width-sm">
            <div className="bg-[url('https://res.cloudinary.com/dpqs7ibuh/image/upload/v1752508189/hangman_ixvqg5.jpg')] bg-cover h-[94vh] w-[30vw] flex flex-col justify-center items-center bg-no-repeat">
                <form className="flex flex-col justify-center items-center backdrop-blur-sm space-y-4 bg-white/20  p-6 rounded-xl shadow-md mt-25">
                    <label htmlFor="name" className="text-lg font-semibold text-black drop-shadow-sm" >Username</label>
                    <input value={username} id="name" onChange={nameInput} placeholder="Enter your username" className="px-4 py-2 rounded-md w-64 text-center text-black placeholder-gray-500 bg-white/80 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
                    <button onClick={startBut} type="submit" className="mt-2 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md shadow-lg transition duration-300">Start</button>
                    {error && <p>Username is required</p>}
                </form>
            </div>
        </div>
        
    )
}

export default LoginPage;
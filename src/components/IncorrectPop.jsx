import React from 'react'
import { useLocation } from 'react-router-dom';
function IncorrectPop(props) {
    const {qusn , fun} = props
    const location = useLocation()
    const username = location.state?.username;
  const onPlay=()=>{
       fun()
  }

  return (
    <div class="fixed inset-0 flex flex-col items-center justify-center z-50  backdrop-brightness-50">
    <div className='border-1 border-gray-100 bg-[#f9fafb] rounded-lg shadow-lg p-4 md:p-6 max-w-sm w-[80vw] md:w-[60vw] lg:w-[35vw] h-[30vh] md:h-[35vh] mx-4 transform transition-all flex flex-col items-center justify-center'>
       <h1 className='text-lg md:text-2xl font-bold text-gray-800 mb-2 text-center'>Oops! Your Turn Was Done {username}.</h1>
       <p className='text-gray-700 mb-2 md:mb-4 text-center'>The correct word was: <span className='text-[#193175] font-bold'>{qusn.word}</span></p>
       <button className='w-auto bg-[#193175] hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition duration-200' onClick={onPlay}>Play Again</button>
    </div>
    </div>
  )
}

export default IncorrectPop

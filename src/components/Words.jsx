import React from 'react'
import { useState } from 'react'


function Words(props) {
   const {blank , qusn , incorrectGuess} = props
  return (
    <div className='flex flex-col items-center m-2 md:m-4'> 
  <div className='flex flex-row justify-center gap-2 md:gap-4 mt-5'>
    {blank.split('').map((each , i)=>(
      <span key={i} className='border-b-2 border-white w-5 md:w-6 text-center text-[#ffffff]'>
         {each!=="_" ? each.toUpperCase() : '\u00A0'}
      </span>
    ))}
  </div>
  <h1 className="text-lg md:text-2xl text-[#ffffff] text-center p-1 md:p-2 mt-5">Hint: <span className='font-bold'>{qusn.hint}</span></h1>
  <p className="text-lg md:text-2xl text-[#ffffff] m-1 md:m-2 text-center">Incorrect Guesses:{incorrectGuess}/6</p>
</div>

  )
}

export default Words

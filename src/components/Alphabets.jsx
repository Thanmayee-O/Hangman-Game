import React, { useEffect } from 'react'
import Words from './Words'
import { useState } from 'react';
import CorrectPopUp from './CorrectPopUp';
import IncorrectPop from './IncorrectPop'
import { useNavigate,useLocation } from 'react-router-dom';
const wordList = [{
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
];
let random = Math.floor(Math.random()*wordList.length)
function Alphabets() {
    const navigate = useNavigate()
    const location = useLocation()
    const username = location.state?.username;
    console.log(username)

   const letters = Array.from({length : 26} , (_,i) => String.fromCharCode(65+i))
   
   const [qusn , setQusn] = useState(wordList[random])
   const [blank , setBlank] = useState('_'.repeat(qusn.word.length))
   const [incorrectGuess , setIncorrectGuess] = useState(0)
   const [clickedLetters, setClickedLetters] = useState([])
   const [correctGuess , setCorrectGuess] = useState(0)  
   const [score , setScore] = useState(0);
   const [popUp , setPopUp] = useState(false)   
   
        const onAlpha=(letter)=>{
        if(!clickedLetters.includes(letter)){
            if(incorrectGuess<6){
                setClickedLetters([...clickedLetters,letter])
            }
        }

        let index = []
        if(!qusn.word.includes(letter.toLowerCase())){
            if(!clickedLetters.includes(letter.toLowerCase())){
                if(incorrectGuess<6){
                  setIncorrectGuess(prev => prev + 1);
         }
           }
         
        }
         else{
           for(let i=0;i<qusn.word.length;i++){
                if(qusn.word[i]===letter.toLowerCase()){
                    index.push(i);
                   
                }
               
            }

            const newBlank = blank.split('')
            const word = qusn.word.toLowerCase()
            for(let i=0;i<word.length;i++){
                if(word[i]===letter.toLowerCase()){
                    newBlank[i]=letter.toUpperCase()
                }
            }
            setBlank(newBlank.join(''))
            setCorrectGuess(count => count + index.length)
            console.log(correctGuess)
            }
           
        // console.log(letter)
   }
   useEffect(()=>{
       if(incorrectGuess===6 || correctGuess===qusn.word.length){
            setPopUp(true)
    }
    if(correctGuess===qusn.word.length){
        setScore(prev=>prev+1)
    }
    const timer = setTimeout(() => {
            setPopUp(true);
    }, 1000); // 1 second
    return () => clearTimeout(timer);
  
   } , [incorrectGuess,correctGuess,qusn.word.length])
   let n = Math.floor(Math.random()*wordList.length)
   let newQusn = wordList[n]
  function fun(){
     setPopUp(false)
     setIncorrectGuess(0)
     setQusn(wordList[n])
     setCorrectGuess(0)
     setBlank('_'.repeat(newQusn.word.length))
     setClickedLetters([])
    
}
  function quitBut(){
      navigate('/userpage')
  }
    console.log(username)
  return (
    <div className='relative flex flex-col list-none justify-end items-center '>
  
    <div className="bg-[url('https://res.cloudinary.com/dybw1km5u/image/upload/v1752509331/hangman_img_uyayvj.jpg')] w-auto h-[120vh] rounded-lg w-[90vw] md:w-[70vw] lg:w-[50vw] h-[100vh] text-[#000000] w-auto h-auto bg-gradient-to-b from-[#0c1d3c] to-[#000814]">
            <div className="flex flex-row justify-between">
            <div>
                {username && (
                   <p className="font-bold text-[20px] mt-8 ml-8 text-black-200">Welcome, {username}</p>
                   )}
                 <p className="font-bold text-[20px] mt-8 ml-8">Score: <span>{score}</span></p>
                 </div>
              <div>
                  <button onClick={quitBut} className="mt-2 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md shadow-lg transition duration-300 mr-5 mt-5">Quit</button>
              </div>
            </div>
    <div className='flex flex-col justify-end items-center h-[100vh] mt-6'>
    <Words blank={blank} qusn={qusn} incorrectGuess={incorrectGuess}/>
    <div className='flex flex-row flex-wrap list-none justify-center items-center w-[90vw] md:w-[70vw] lg:w-[50vw]'>
      <ul className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-2 justify-items-center mt-4">
        {letters.map((each , i) => (
          <li key={i}>
            <button 
              onClick={() => onAlpha(each)} 
              className={`rounded-lg m-1 md:m-2 size-10 md:size-12 font-bold ${clickedLetters.includes(each)? 'bg-[#E0E0E0]  px-4 py-2 rounded shadow text-[#000000]' : 'bg-[#fffefd]  text-[#000000]'}`}
            >
              {each}
            </button>
          </li>
        ))}
      </ul>
    </div>
    <div className='flex justify-center'>
      <button 
        onClick={()=>fun()} 
        className='bg-yellow-400 hover:bg-yellow-500 hover:bg-blue-700 text-white font-semibold py-1.5 px-3 md:py-2 md:px-4 rounded transition duration-200 mb-3 mt-5'
      >
        Skip
      </button>
    </div>
  </div>  
  <div className='absolute top-[40%] md:top-[350px] left-[10%] md:left-[400px] mt-1'>
    {incorrectGuess===6 && popUp ? <IncorrectPop qusn={qusn} fun={fun}/> : ''}
    {correctGuess===qusn.word.length && popUp? <CorrectPopUp qusn={qusn} fun={fun} />: ''}
  </div>
</div>
</div>
  )
}

export default Alphabets



import React, { useState, useEffect } from 'react'
import Words from './Words'
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
   const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
   
  
   
   
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

    useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);
   
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
      navigate('/')
  }
    console.log(username)

console.log(isMobile)
  return (
    <div className="flex justify-center items-start px-4 py-6 bg-transparent">
      {/* Card/container - background image kept exactly as provided */}
      <div
        className="relative w-full max-w-[1100px] rounded-lg overflow-hidden bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dybw1km5u/image/upload/v1752509331/hangman_img_uyayvj.jpg')",
        }}
      >
        {/* Overlay for contrast (doesn't change the image file or fonts) */}
        <div className="w-full min-h-[70vh] sm:min-h-screen ">
          {/* Header - stacks on small screens, row on larger */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-4 sm:p-6">
            <div className="w-full sm:w-auto flex justify-end">
              <button
                onClick={quitBut}
                className="sm:w-auto px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md shadow-lg transition duration-300"
                aria-label="Quit game"
              >
                Quit
              </button>
            </div>
            <div className="px-1">
              {username && <p className="font-bold text-[18px] sm:text-[20px] mt-2">Welcome, {username}</p>}
              <p className="font-bold text-[18px] sm:text-[20px] mt-1">Score: <span className="text-[black]">{score}</span></p>
            </div>

            
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center w-full px-4 pb-8 mt-20">
            {/* Words / puzzle display (keeps your component as-is) */}
            <div className="w-full max-w-3xl">
              <Words blank={blank} qusn={qusn} incorrectGuess={incorrectGuess} />
            </div>

            {/* Letters grid - mobile-first (3 cols) then increase on larger screens */}
            <div className="w-full mt-6 flex justify-center px-2">
              <ul className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-2 sm:gap-3 md:gap-4 justify-items-center w-full max-w-2xl">
                {letters.map((each, i) => {
                  const active = clickedLetters.includes(each);
                  return (
                    <li key={i} className="w-full flex justify-center">
                      <button
                        onClick={() => onAlpha(each)}
                        className={`flex items-center justify-center rounded-lg font-bold transition-transform active:scale-95
                        ${active ? 'bg-[#E0E0E0] px-4 py-2 shadow-inner text-black' : 'bg-[#fffefd] text-black px-4 py-2'}
                        w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14`}
                        aria-pressed={active}
                        aria-label={`Letter ${each}`}
                      >
                        {each}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Skip button */}
            <div className="w-full flex justify-center mt-5 px-4">
              <button
                onClick={() => fun()}
                className="w-full sm:w-40 px-3 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded transition duration-200"
                aria-label="Skip"
              >
                Skip
              </button>
            </div>
          </div>

          {/* Popups - centered overlay, responsive */}
          
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="pointer-events-auto w-full max-w-md mx-4">
                {incorrectGuess === 6 && <IncorrectPop qusn={qusn} fun={fun} />}
                {correctGuess === qusn.word.length && <CorrectPopUp qusn={qusn} fun={fun} />}
              </div>
            </div>
          
        </div>
      </div>
    </div>
  
  )

  
    


}
export default Alphabets



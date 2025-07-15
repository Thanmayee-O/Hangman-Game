import React from 'react'
import Alphabets from './components/Alphabets'
import Words from './components/Words'
import LoginPage from './components/userPage'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/userpage' element={<LoginPage/>}/>
         <Route path='/hangman' element={<Alphabets/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

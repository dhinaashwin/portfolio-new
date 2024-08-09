import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import HomePage from './Components/HomePage'
import About from './Components/About'
import Work from './Components/Work'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
  <NavBar/>
  <HomePage/>
  <About/>
  <Work/>
  <Skills/>
  <Contact/>
    </div>
    </>
  )
}

export default App

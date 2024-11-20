import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Hero from './Components/Hero.jsx'
import Feature from './Components/Feature.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Hero/>
      <Feature/>
    </div>
  )
}

export default App

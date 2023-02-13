import { useState } from 'react'
import reactLogo from './../react.svg'
import Navbar from './Navbar'
import Hero from './Hero'
import CardGrid from './CardGrid'
import './../assets/styles/App.css'

function App() {

  return (
    <div className="App">
        <Navbar />
        <Hero />
        <CardGrid />
    </div>
  )
}

export default App

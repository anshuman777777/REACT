import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 5

  function Up(){
   
    if(counter >= 20) return
    setCounter(counter + 1)
    
  }

  function Down(){
    if(counter <= 0) return
    setCounter(counter - 1)
    
  }

  return (
    <>
      <h1>COUNTER PROJECT</h1>
      <h2>COUNTER VALUE: {counter}</h2>


      <button onClick={Up}>Up</button>
      <br />
      <button onClick={Down}>Down</button>
    </>
  )
}

export default App

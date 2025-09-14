import { useState } from 'react'
import Game from "./Components/Game"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Game />
  )
}

export default App

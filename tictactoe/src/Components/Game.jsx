import { useState } from 'react'
import OptionSquare from "./OptionSquare";

function Game() {
  const [isCircleTurn, setIsCircleTurn] = useState(true);

  const switchPlayerTurn = () => {
    setIsCircleTurn(!isCircleTurn);
  }

  return (
     <div>
       <OptionSquare isCircleTurn={isCircleTurn} setIsCircleTurn={switchPlayerTurn}/>
     </div>
  )
}

export default Game

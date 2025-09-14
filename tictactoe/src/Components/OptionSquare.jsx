import { useState } from 'react'

function OptionSquare(isCircleTurn, setIsCircleTurn) {
  const [circleOption, setCircleOption] = useState(null);
  const [wasClicked, setWasClicked] = useState(false);

const handleClick = () => {
  if(!wasClicked){
    if(isCircleTurn){
      setCircleOption(true);
    } else{
      setCircleOption(false);
    }
    setWasClicked(true);
    setIsCircleTurn(!isCircleTurn);
  }
}
  return (
    <button onClick={handleClick}>
      {circleOption}
    </button>

  )
}

export default OptionSquare

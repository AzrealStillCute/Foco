import React, { useState } from 'react'
import "./timer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faStop, faStopwatch } from '@fortawesome/free-solid-svg-icons'


let isKeyPressed = {
  "Control": false,
  "b": false,
}

document.onkeydown = (e) => {
  
  isKeyPressed[e.key] = true

  if (isKeyPressed["Control"] && isKeyPressed["b"]) console.log("hello");
}

const Timer = () => {

  const [ pause, setPause ] = useState(false)

  return (
    <div className='timerContainer'>
        <div className='stopwatch'>
        </div>
        <div className='btnContainer'>
            <button className='timerBtn'><FontAwesomeIcon icon={faStopwatch}/></button>
            <button className='timerBtn' onClick={() => setPause(!pause)}><FontAwesomeIcon icon={ pause ? faPlay : faPause }/></button>
            <button className='timerBtn'><FontAwesomeIcon icon={faStop}/></button>
        </div>
    </div>
  )
}

export default Timer

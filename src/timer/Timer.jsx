import React, { useEffect, useReducer, useState } from 'react'
import "./timer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faStop, faStopwatch } from '@fortawesome/free-solid-svg-icons'
import border from "../assets/timerBorder.svg"
import CircularProgress from '../components/CircularProgress'
import clickSound from "../assets/audio/typewriter.mp3"


const Timer = ({current, setCurrent, popup, setPopup, minute, dipatchMinute, initialMinute, getFullScreen}) => {

  const btnSound = new Audio(clickSound)
  const [ pause, setPause ] = useState(true)
  const [ active, setActive ] = useState(false)
  const [ second, setSecond] = useState(60)

  let setTimer;

  useEffect(()=> {
    if (pause) {
      clearInterval(setTimer)
    } else {
      setTimer = setInterval(() => {
        setSecond(prev => prev - 1)
        if (second === 1) {
          dipatchMinute(current)
          setSecond(60)
        }
        if ( minute[current] === 0) {
          setCurrent(current === "study" ? "break" : "study")
          clearInterval(setTimer)
        }
      }, 1000);
    }

    return()=> {
      clearInterval(setTimer)
    }
  })

  let isKeyPressed = {
    "Control": false,
    "Enter": false,
    "f": false,
    "r": false
}

document.onkeydown = (e) => {

    e.preventDefault()
    
    isKeyPressed[e.key] = true

    if (isKeyPressed["Control"] && isKeyPressed["f"]) getFullScreen()
    if (isKeyPressed["Control"] && isKeyPressed["Enter"]) setCurrent(current === "study" ? "break" : "study")
    if (e.key === " ") playPauseHandle()
    if (isKeyPressed["Control"] && isKeyPressed["r"]) stopHandle()
}

document.onkeyup = (e) => {

    e.preventDefault()
    isKeyPressed[e.key] = false
}

  useEffect(()=> {
    setSecond(60)
  }, [current])

  function playPauseHandle() {
    btnSound.play()
    if(!active) {
      setActive(true)
    }
    setPause(!pause)
  }

  function stopHandle() {
    clearInterval(setTimer)
    setPause(true)
    dipatchMinute("reset")
    setActive(false)
  }

  useEffect(()=> {
    stopHandle()
  }, [initialMinute])

  function timeAdjustHandle() {
    setPopup(!popup)
  }

  return (
    <div className='stopwatchContainer'>
        <div className='stopwatch'>
          <CircularProgress percentage={ 100 - (minute[current] * 100 / initialMinute[current]) } />
          <img src={border} className='timerBorder'/>
          <div className='timeContainer'>
            <span className={`${active ? "minuteActive" : ""} minute`}>{minute[current]}</span>
            <span className={`${active ? "appear" : ""} second`} >{second < 10 ? "0"+second : second }</span>
          </div>
        </div>
        <div className='btnContainer'>
          <button className='timerBtn' onClick={timeAdjustHandle}><FontAwesomeIcon icon={faStopwatch}/></button>
          <button className='timerBtn' onClick={playPauseHandle}><FontAwesomeIcon icon={ pause ? faPlay : faPause }/></button>
          <button className='timerBtn' onClick={stopHandle}><FontAwesomeIcon icon={faStop}/></button>
        </div>
    </div>
  )
}

export default Timer

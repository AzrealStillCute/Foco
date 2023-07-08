import React, { useReducer, useState } from 'react'
import "./App.scss"
import Header from './header/Header'
import Timer from './timer/Timer'
import Footer from './footer/Footer'
import TimeAdjust from './components/TimeAdjust'
import Setting from './components/Setting'

function App() {

  const reducer = ( state , action ) => {
    switch (action) {
      case "study":
        return { ...initialMinute, study: state.study - 1}
      case "break":
        return { ...initialMinute, break: state.break - 1}
      case "reset":
        return initialMinute
      default:
        return state
    }
  }

  const [initialMinute, setInitialMinute] = useState({study: 15, break: 5})
  const [ current, setCurrent ] = useState("study")
  const [ settingPopup, setSettingPopup ] = useState(false)
  const [ popup, setPopup ] = useState(false)
  const [ minute, dipatchMinute ] = useReducer(reducer, initialMinute)

  const getFullScreen = () => {
    if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        document.documentElement.requestFullscreen();
      }
}

  return (
    <div id="mainContainer">
      <div id="contentContainer">
        <Header current={current} setCurrent={setCurrent} settingPopup={settingPopup} setSettingPopup={setSettingPopup}/>
        <Timer current={current} setCurrent={setCurrent} popup={popup} setPopup={setPopup} 
          minute={minute} dipatchMinute={dipatchMinute} initialMinute={initialMinute} getFullScreen={getFullScreen}/>
        {
          popup ? <TimeAdjust popup={popup} setPopup={setPopup} initialMinute={initialMinute} setInitialMinute={setInitialMinute} /> : ""
        }
        {
          settingPopup ? <Setting setSettingPopup={setSettingPopup} /> : ""
        }
        <Footer getFullScreen={getFullScreen}/>
      </div>
    </div>
  )
}

export default App


import React, { useState } from 'react'
import "./header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [ active, setActive ] = useState("study")

    const [ mute, setMute ] = useState(false)

    const stateClick = (e) => {
        setActive(e.target.id)
    }

  return (
    <div id="header">
        <div id="logo">Foco.</div>
        <div className="indicator">
            <div onClick={stateClick} id="study" className={`${ active === "study" ? "active" : ""} state`}>Study Time</div>
            <div className="divider"></div>
            <div onClick={stateClick} id="break" className={`${ active === "break" ? "active" : ""} state`}>Break Time</div>
        </div>
        <div className="optionIcon">
            <FontAwesomeIcon icon={faGear} className='icon'/>
            <FontAwesomeIcon onClick={() => setMute(!mute)} icon={ mute ? faVolumeMute : faVolumeHigh } className='icon'/>
        </div>
    </div>
  )
}

export default Header

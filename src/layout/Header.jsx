import React, { useContext, useEffect, useRef, useState } from 'react'
import "./header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import forestSound from "../assets/audio/backgroundSound.mp3"
import { Howl } from 'howler'

const Header = ({current, setCurrent, settingPopup, setSettingPopup}) => {

    const [sound, setSound] = useState(null);
    const [ mute, setMute ] = useState(false)

    useEffect(() => {
      const sound = new Howl({
        src: [forestSound],
        autoplay: true,
        loop: true,
        volume: 0.5,
        mute: mute,
      });

      setSound(sound)
  
      return () => {
        sound.unload();
      };
    }, [mute])

    const muteHandle = () => {
      sound.mute(!mute)
      setMute(!mute)
    }

  return (
    <div id="header">
        <div id="logo">Foco.</div>
        <div id='desktopIndicator' className="indicator">
            <div onClick={(e) => setCurrent(e.target.id)} id="study" className={`${ current === "study" ? "active" : ""} state`}>Study Time</div>
            <div className="divider"></div>
            <div onClick={(e) => setCurrent(e.target.id)} id="break" className={`${ current === "break" ? "active" : ""} state`}>Break Time</div>
        </div>
        <div className="optionIcon">
            <FontAwesomeIcon icon={faGear} onClick={() => {setSettingPopup(!settingPopup)}} className='icon'/>
            <FontAwesomeIcon id='desktopVolumeIcon' onClick={muteHandle} icon={ mute ? faVolumeMute : faVolumeHigh } className='icon'/>
        </div>
    </div>
  )
}

export default Header

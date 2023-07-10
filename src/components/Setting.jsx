import React, { useState } from 'react'
import "./setting.scss"
import Appearance from './appearance'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

function Setting({setSettingPopup}) {

  const [ activeSetting, setActiveSetting ] = useState("appearance")

  return (
    <div className='popupContainer desktopContainer'>
        <div className='settingContainer'>
            <div>
                <div onClick={() => setActiveSetting("appearance")} className={`settingTypes ${ activeSetting === "appearance" ? "activeSetting" : ""}`}>Appearance</div>
                <div onClick={() => setActiveSetting("sound")} className={`settingTypes ${ activeSetting === "sound" ? "activeSetting" : ""}`}>Sound</div>
            </div>
            <div className='settingRight'>
              <Appearance activeSetting={activeSetting} />
            </div>
            <div className='settingBtnContainer'>
              <button className='closeBtn' onClick={() => setSettingPopup(false)}>Close</button>
              <small style={{color: "red", fontSize: "12px"}}>Setting functions are not available yet.</small>
              <button className='saveBtn'>Save</button>
            </div>
        </div>
        <div className='mobileSettingContainer'>
          <small style={{color: "red", fontSize: "12px"}}>Setting functions are not available yet.</small>
          <div>
          <div className='appearanceSetting'>
            <div className='settingSection'>
              <label className='settingName'>Primary font</label>
              <select className='settingOptions'>
                <option>Mattone</option>
                <option>Montserrat</option>
                <option>Lumina</option>
                <option>Elysium</option>
                <option>Nebula</option>
              </select>
            </div>
            <div className='settingSection'>
              <label className='settingName'>Secondary font</label>
              <select className='settingOptions'>
                <option>IBM Plex Mono</option>
                <option>Space Mono</option>
                <option>Roboto Mono</option>
                <option>Cousine</option>
              </select>
            </div>
            <div className="settingSection">
              <label className="settingName">Theme</label>
              <div style={{display: 'flex'}}>
                <div className='colorOptions'>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className="colorOptions"></div>
                <div className="colorOptions"></div>
                <div className="colorOptions"></div>
              </div>
            </div>
            <div className='soundSetting'>
            <div className='settingSection'>
              <label className='settingName'>Alarm sound</label>
              <select className='settingOptions'>
                <option>Simple alarm</option>
              </select>
            </div>
            <div className='settingSection'>
              <label className='settingName'>Background Music</label>
              <select className='settingOptions'>
                <option>Forest</option>
              </select>
            </div>
            </div>
          </div>
            <div  className="mobileBtnContainer">
              <FontAwesomeIcon icon={faVolumeHigh} className='icon' />
              <div>
                <button className='closeBtn' onClick={() => setSettingPopup(false)}>Close</button>
                <button className='saveBtn'>Save</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Setting

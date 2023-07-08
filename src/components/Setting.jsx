import React, { useState } from 'react'
import "./setting.scss"
import Appearance from './appearance'

function Setting({setSettingPopup}) {

  const [ activeSetting, setActiveSetting ] = useState("appearance")

  return (
    <div className='popupContainer'>
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
              <button className='saveBtn'>Save</button>
            </div>
        </div>
    </div>
  )
}

export default Setting

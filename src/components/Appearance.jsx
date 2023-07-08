import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Appearance({ activeSetting }) {

    if( activeSetting === "appearance") {
        return  ( 
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
          </div>
          )
    } else if ( activeSetting === "sound") {
        return (
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
        )
    }
}

export default Appearance

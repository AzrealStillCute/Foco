import React, { useEffect, useRef, useState } from 'react'
import "./timeAdjust.scss"

function TimeAdjust({popup, setPopup, initialMinute, setInitialMinute}) {

    const studyTimeSteps = [15, 20, 30, 45, 60]
    const breakTimeSteps = [5, 10, 15, 20]

    const [sliderValue, setSliderValue ] = useState({study: 0, break: 0})

    const [ temp, setTemp ] = useState({...initialMinute})
    const studyRef = useRef(null)
    const breakRef = useRef(null)

    useEffect(()=> {

        const studyIndex = studyTimeSteps.indexOf(initialMinute.study)
        const breakIndex = breakTimeSteps.indexOf(initialMinute.break)

        setSliderValue({study: studyIndex, break: breakIndex})

        studyRef.current.children[studyIndex].classList.add("activeValue")
        breakRef.current.children[breakIndex].classList.add("activeValue")
    }, [])

    const sliderHandle = (event) => {
        let snappedValue = Math.round(event.target.value);

        // let targetId = event.target.id

        // temp[targetId] = studyTimeSteps[snappedValue]
        // timeOption[targetId === "study" ? "0" : "1"].querySelectorAll("span").forEach( a => a.classList.remove("activeValue"))
        // setSliderValue({ ...sliderValue, [targetId]: snappedValue})
        // timeOption[targetId === "study" ? "0" : "1"].children[snappedValue].classList.add("activeValue")

        if( event.target.id === "study" ) {
            temp.study = studyTimeSteps[snappedValue]
            studyRef.current.querySelectorAll("span").forEach( a => a.classList.remove("activeValue"))
            setSliderValue({ ...sliderValue, study: snappedValue})
            studyRef.current.children[snappedValue].classList.add("activeValue")
        } else {
            temp.break = breakTimeSteps[snappedValue]
            breakRef.current.querySelectorAll("span").forEach( a => a.classList.remove("activeValue"))
            setSliderValue({ ...sliderValue, break: snappedValue})
            breakRef.current.children[snappedValue].classList.toggle("activeValue")
        }
    };

    function saveHandle() {
        setInitialMinute({...temp})
        setPopup(!popup)
    }

  return (
    <div className='popupContainer'>
        <div className='timeAdjustInnerContainer'>
            <div>
                <span className='settingName'>Study Time</span>
                <div style={{display: 'grid', gridTemplateColumns: "auto auto"}}>
                    <div style={{position: "relative"}}>
                        <input
                            id='study'
                            type="range"
                            min="0"
                            max="4"
                            step="1"
                            value={sliderValue.study}
                            onChange={sliderHandle}
                            className='timeRange'
                        />
                        <div className='pointContainer'>
                            <div className="point"></div>
                            <div className="point"></div>
                            <div className="point"></div>
                            <div className="point"></div>
                            <div className="point"></div>
                        </div>
                        <div ref={studyRef} className='timeOption'>
                            <span>15</span>
                            <span>20</span>
                            <span>30</span>
                            <span>45</span>
                            <span>60</span>
                        </div>
                    </div>
                    <label className='sliderLabel'>mins</label>
                </div>
            </div>
            <div>
                <span className='settingName'>Break Time</span>
                <div style={{display: 'grid', gridTemplateColumns: "auto auto"}}>
                    <div style={{ position: 'relative'}}>
                        <input
                            id='break'
                            type="range"
                            min="0"
                            max="3"
                            step="1"
                            value={sliderValue.break}
                            onChange={sliderHandle}
                            className='timeRange'
                        />
                        <div className='pointContainer'>
                            <div className="point"></div>
                            <div className="point"></div>
                            <div className="point"></div>
                            <div className="point"></div>
                        </div>
                        <div ref={breakRef} className='timeOption'>
                            <span>5</span>
                            <span>10</span>
                            <span>15</span>
                            <span>20</span>
                        </div>
                    </div>
                    <label className='sliderLabel'>mins</label>
                </div>
            </div>
            <div className='btnContainer'>
                <button className='closeBtn' onClick={() => setPopup(!popup)}>Close</button>
                <button className='saveBtn' onClick={() => saveHandle()}>Save</button>
            </div>
        </div>
    </div>
  )
}

export default TimeAdjust

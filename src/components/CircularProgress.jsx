import React, { useEffect, useRef } from 'react'
import "./circularProgress.scss"

function CircularProgress({percentage}) {

  const progerssRef = useRef(null)

    useEffect(()=> {
        const value = window.getComputedStyle(progerssRef.current).strokeDasharray
        progerssRef.current.style.strokeDashoffset = value.slice(0, -2) / 100 * percentage
    }, [percentage])

  return (
    <svg className='ring'>
        <circle className='track'/>
        <circle ref={progerssRef} className='progress'/>
    </svg>
  )
}

export default CircularProgress

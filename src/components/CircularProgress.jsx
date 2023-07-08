import React, { useEffect } from 'react'
import "./circularProgress.scss"

function CircularProgress({percentage}) {

    useEffect(()=> {
        document.querySelector(".progress").style.strokeDashoffset = 848 / 100 * percentage
    }, [percentage])

  return (
    <svg className='ring'>
        <circle className='track'/>
        <circle className='progress'/>
    </svg>
  )
}

export default CircularProgress

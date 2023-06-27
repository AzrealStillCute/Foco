import React from 'react'
import "./App.scss"
import Header from './header/Header'
import Timer from './timer/Timer'
import Footer from './footer/Footer'

function App() {
  return (
    <div id="mainContainer">
      <div id="contentContainer">
        <Header/>
        <Timer/>
        <Footer/>
      </div>
    </div>
  )
}

export default App


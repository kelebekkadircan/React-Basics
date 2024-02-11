import React from 'react'
import SliderOne from './Slider/SliderOne'
import CardOne from './Card/CardOne'
import './App.scss'
-
  function App() {

    return (
      <>
        <div className="slick">
          <div className="container">
            Kadircan
            <SliderOne />
            <CardOne />
          </div>
        </div>
      </>
    )
  }

export default App

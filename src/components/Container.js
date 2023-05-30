import React from 'react'
import Intro from './Intro'
import Ratings from './Ratings'
import Reviews from './Reviews'

function Container() {
  return (
    <>
      <div className="desktop__top">
        <Intro />
        <Ratings />
      </div>
      <div className="review__container">
        <Reviews />
      </div>
    </>
  )
}

export default Container

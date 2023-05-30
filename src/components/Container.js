import React from 'react'
import Intro from './Intro'
import Ratings from './Ratings'
import Reviews from './Reviews'

function Container() {
  return (
    <>
      <Intro />
      <Ratings />
      <div className="review__container">
        <Reviews />
      </div>
    </>
  )
}

export default Container

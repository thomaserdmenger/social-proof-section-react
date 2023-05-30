import React from 'react'
import Rating from './RatingElements'

function Ratings() {
  return (
    <div className="rating__container">
      <Rating
        rating={['Rated 5 Stars in Reviews', 'Rated 5 Stars in Report Guru', 'Rated 5 Stars in BestTech']}
      />
    </div>
  )
}

export default Ratings

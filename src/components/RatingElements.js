import React from 'react'

function RatingElements(props) {
  const ratings = props.rating.map(rating => {
    return (
      <div className="rating__element">
        <div className="rating__stars">
          <img src="/images/icon-star.svg" alt="" />
          <img src="/images/icon-star.svg" alt="" />
          <img src="/images/icon-star.svg" alt="" />
          <img src="/images/icon-star.svg" alt="" />
          <img src="/images/icon-star.svg" alt="" />
        </div>
        <p className="rating__text">{rating}</p>
      </div>
    )
  })

  return ratings
}

export default RatingElements

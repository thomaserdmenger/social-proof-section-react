import React from 'react'

function RatingElements(props) {
  const ratings = props.rating.map((rating, index) => {
    return (
      <div className="rating__element" id={'rating_' + index} key={'rating_' + index}>
        <div className="rating__stars" key={'stars' + index}>
          <img src="./images/icon-star.svg" alt="" />
          <img src="./images/icon-star.svg" alt="" />
          <img src="./images/icon-star.svg" alt="" />
          <img src="./images/icon-star.svg" alt="" />
          <img src="./images/icon-star.svg" alt="" />
        </div>
        <p className="rating__text" key={'rating_text_' + index}>
          {rating}
        </p>
      </div>
    )
  })

  return ratings
}

export default RatingElements

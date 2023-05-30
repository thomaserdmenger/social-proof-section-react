import React from 'react'

function ReviewElements(props) {
  return props.names.map((name, index) => {
    const avatar = <img src={props.source[index]} className="review__image" alt="avatars" />
    // const review = <p>{</p>
    return (
      <div className="review__element" key={index}>
        <div className="review__media">
          <div>{avatar}</div>
          <div className="review__name">
            <h2 className="review__heading">{name}</h2>
            <p className="review__status">{props.status}</p>
          </div>
        </div>
        <div className="review__text">
          <p>{props.review[index]}</p>
        </div>
      </div>
    )
  })
}

export default ReviewElements

import React from 'react'

function ReviewElements(props) {
  return props.names.map((name, index) => {
    const avatar = <img src={props.source[index]} className="review__avatars" alt="avatars" />
    return (
      <div key={index}>
        <div>{avatar}</div>
        <h2>{name}</h2>
        <p>{props.status}</p>
      </div>
    )
  })
}

export default ReviewElements

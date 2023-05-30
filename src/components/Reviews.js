import React from 'react'
// import Avatars from './Reviews-Avatars'
import ReviewElements from './ReviewsElements'
// import Review from './Review'

function Reviews() {
  return (
    <>
      {/* <Avatars avatar={['/images/image-colton.jpg', '/images/image-irene.jpg', '/images/image-anne.jpg']} /> */}
      <ReviewElements
        names={['Colton Smith', 'Irene Roberts', 'Anne Wallace']}
        status={'Verified Buyer'}
        source={['/images/image-colton.jpg', '/images/image-irene.jpg', '/images/image-anne.jpg']}
      />
    </>
  )
}

export default Reviews

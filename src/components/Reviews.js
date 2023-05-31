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
        source={['./images/image-colton.jpg', './images/image-irene.jpg', './images/image-anne.jpg']}
        review={[
          '“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”',
          '“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”',
          '“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”'
        ]}
      />
    </>
  )
}

export default Reviews

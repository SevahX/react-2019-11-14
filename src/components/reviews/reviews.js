import React from 'react'
import Review from '../review'
import {Typography} from 'antd'

function Reviews(props) {
  const {reviews} = props
  return (
    <div>
      <Typography.Title level={2}>Reviews: {reviews.length}</Typography.Title>
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <Review review={review} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Reviews

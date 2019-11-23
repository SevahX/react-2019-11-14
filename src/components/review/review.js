import React from 'react'
import {Rate, Typography} from 'antd'

function Review(props) {
  const {review} = props

  return (
    <div>
      <Typography.Title level={5}>{review.user}</Typography.Title>
      <p>Rating:</p>
      <Rate
        key={review.rating}
        allowHalf
        disabled
        defaultValue={review.rating}
      />
      <Typography.Title level={3}>{review.text}</Typography.Title>
    </div>
  )
}

export default Review

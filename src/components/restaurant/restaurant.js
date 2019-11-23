import React, {useState} from 'react'
import Dishes from '../dishes'
import {Rate} from 'antd'
import Reviews from '../reviews'

function Restaurant(props) {
  const {restaurant} = props

  const rating =
    restaurant.reviews.reduce((res, curr) => res + curr.rating, 0) /
    restaurant.reviews.length

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>Rating:</p>
      <Rate key={rating} allowHalf disabled defaultValue={rating} />
      <Dishes menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  )
}

export default Restaurant

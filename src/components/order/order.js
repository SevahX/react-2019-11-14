import React from 'react'
import {Card, Col, Row, Typography} from 'antd'
import {connect} from 'react-redux'
import styles from '../dish/dish.module.css'

function Order({cart, restaurants}) {
  let array = []
  let index = 0
  for (let id in cart) {
    let dish
    restaurants.forEach(r => {
      if (!dish) {
        dish = r.menu.find(dish => dish.id === id)
      }
    })

    array[index++] = {dish: dish, count: cart[id]}
  }

  return (
    <div style={{background: '#ECECEC', padding: '30px'}}>
      <Typography.Title level={4} className={styles.title}>
        Общая сумма:{' '}
        {array.reduce((accum, curr) => accum + curr.count * curr.dish.price, 0)}{' '}
        $
      </Typography.Title>

      {array.map(e => (
        <Row gutter={16}>
          <Col span={8}>
            <Card title={e.dish.name} bordered={false}>
              Количество: {e.count}, на сумму: {e.count * e.dish.price}$
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  cart: state.cart,
})

export default connect(mapStateToProps)(Order)

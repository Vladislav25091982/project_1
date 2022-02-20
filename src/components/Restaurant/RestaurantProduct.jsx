import React, { useEffect, useState } from 'react'
import BasketButton from '../UI/BasketButton'
import '../../styles/RestaurantProduct.scss'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const RestaurantProduct = ({ product }) => {
  const dispatch = useDispatch()
  const productBasket = useSelector(state => state.basket.basket)
  const [buyed, setBuyed] = useState(false)
  const productAdd = (product) => {
    product.count = 1
    product.allPrise = product.count * product.prise
    dispatch({ type: "ADD_PRODUCT", product: product })
  }
  const buttonView = () => {
    if (buyed) {
      return (
        <BasketButton>
          <span>В корзинe</span>
          <img src="/img/buttonBbasket.svg" alt="" />
        </BasketButton>
      )
    } else {
      return (
        <BasketButton onClick={() => productAdd(product)}>
          <span>В корзину</span>
          <img src="/img/buttonBbasket.svg" alt="" />
        </BasketButton>
      )
    }
  }

  useEffect(() => {
    for (let index = 0; index < productBasket.length; index++) {
      const element = productBasket[index];
      if (element.id === product.id) {
        setBuyed(true)
        return
      } else if (element.id !== product.id) {
        setBuyed(false)
      }
    }
    if (productBasket.length === 0) {
      setBuyed(false)
      return
    }
  }, [buyed, productBasket])

  return (
    <div className="restaurant-product__block">
      <div className="restaurant-product__img">
        <img src={product.img} alt="" />
      </div>
      <h4 className="restaurant-product__title">{product.title}</h4>
      <p className="restaurant-product__discription">{product.discription}</p>
      <div className="restaurant-product__checkout">
        {
          buttonView()
        }
        <span className="restaurant-product__prise">{product.prise} ₽</span>
      </div>
    </div>
  )
}

export default RestaurantProduct
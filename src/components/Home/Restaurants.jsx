import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import '../../styles/Restorans.scss'
import RestoranBlock from './RestaurantBlock'
const Restorans = () => {
  const [restaurants, setRestaurants] = useState([])
  const getRestoran = async () => {
    axios.get('https://trp-web.github.io/Delivery-Food/DeliveryFood/restorans.json')
      .then(res => {
        setRestaurants(res.data)
      })
  }
  useEffect(() => {
    getRestoran()
  }, [])

  return (
    <section className="restorans">
      <div className="restorans__title-inner">
        <h3 className="restorans__title">Рестораны</h3>
        <div className="restorans__input">
          <input type="text" className="restorans__shearce" placeholder='Поиск блюд и ресторанов' />
          <img src="/img/search.svg" alt="search" />
        </div>
      </div>
      <div className="restorans__inner">
        {
          restaurants.map(restaurant => {
            return (
              <Link to={"restaurant/" + restaurant.id} key={restaurant.id} className='restorans-block__link'>
                < RestoranBlock restaurant={restaurant}  />
              </Link>
            )
          })
        }

      </div>
    </section >
  )
}

export default Restorans
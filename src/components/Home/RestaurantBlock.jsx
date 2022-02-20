import React from 'react'
import '../../styles/RestoranBlock.scss'
const RestaurantBlock = ({restaurant}) => {
  return (
    <div className="restorans-block" >
      <div className="restorans-block__img">
        <img src={restaurant.img} alt="logo" />
      </div>
      <div className="restorans-block__text">
        <div className="restorans-block__title-inner">
          <h4 className="restorans-block__title">{restaurant.title}</h4>
          <div className="restorans-block__time">{restaurant.time}</div>
        </div>
        <div className="restorans-block__info">
          <div className="restorans-block__reiting">
            <img src="/img/star.svg" alt="" />
            <span>{restaurant.reiting}</span>
          </div>
          <span className="restorans-block__prise">От {restaurant.prise} ₽</span>
          <span className="restorans-block__catigories">{restaurant.catigories}</span>
        </div>
      </div>
    </div>
  )
}

export default RestaurantBlock
import React from 'react'
import '../../styles/HomeContent.scss'
import Restorans from './Restaurants' 
const HomeContent = () => {
  return (
    <main className="home">
      <div className="home-banner">
        <div className="home-banner__text-inner" style={{ backgroundImage: 'url(/img/banner.png)' }}>
          <h1 className="home-banner__title">Онлайн-сервис доставки еды на дом</h1>
          <p className="home-banner__text">Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком</p>
        </div>
      </div>
      <Restorans/> 
    </main>
  )
}

export default HomeContent
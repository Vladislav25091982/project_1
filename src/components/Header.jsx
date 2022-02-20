import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.scss'
import Basket from './Header/Basket'
import Login from './Header/Login'
const Header = () => {
  const [basketView, setBasketView] = useState(false)
  const [loginView, setLoginView] = useState(false)
  const loginActive = () => {
    setLoginView(true)
  }
  const loginDiseble = () => {
    setLoginView(false)
  }
  const basketActive = () => { 
    setBasketView(true)
  }
  const basketDiseble = () => {
    setBasketView(false)
  }
  return (
    <header className="header">
      <Basket
        basketView={basketView} 
        basketDiseble={basketDiseble} 
      />
      <Login
        loginView={loginView}
        loginDiseble={loginDiseble}
      />
      <div className="container">
        <div className="header__inner">
          <Link to="/" >
            <div className="header__logo">
              <img src="/img/logo.svg" alt="logo" />
            </div>
          </Link>
          <nav className="footer-menu header-menu">
              <ul>
                <li>
                  <Link to='for-restoran' className="footer-menu__link">Ресторанам</Link> 
                </li>
                <li>
                  <Link to='for-curier' className="footer-menu__link">Курьерам</Link>
                </li>
                <li>
                  <Link to='pres' className="footer-menu__link">Пресс-центр</Link>
                </li>
                <li>
                  <Link to='contact' className="footer-menu__link">Контакты</Link>
                </li>
              </ul>
            </nav>
          <div className="header__buttons">
            <div className="header__sing" onClick={loginActive} >
              <img src="/img/user.svg" alt="user" />
              <span>Войти</span>
            </div>
            <div className="header__busket" onClick={basketActive}>
              <img src="/img/basket.svg" alt="basket" />
              <span>Корзина</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
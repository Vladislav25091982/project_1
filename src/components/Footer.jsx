import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Footer.scss'

const Footer = () => {
  return (
    <footer className="footer"> 
      <div className="container">
        <div className="footer__inner">
          <div className="footer__first">
            <Link to="/" >
              <div className="footer__logo">
                <img src="/img/logo.svg" alt="" />
              </div>
            </Link>
            <nav className="footer-menu">
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
          </div>
          <div className="footer__last">
            <a href={'https://www.instagram.com'} target={'_blank'} rel={'nofollow noopener noreferrer'} className='soc-link'>
              <img src="/img/inst.svg" alt="instagram" />
            </a>
            <a href={'https://uk-ua.facebook.com'} target={'_blank'} rel={'nofollow noopener noreferrer'} className='soc-link'>
              <img src="/img/face.png" alt="facebook" />
            </a>
            <a href={'https://vk.com'} target={'_blank'} rel={'nofollow noopener noreferrer'} className='soc-link'>
              <img src="/img/vk.svg" alt="vk" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
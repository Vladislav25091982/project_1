import React from 'react'
import '../styles/navpage/Contact.scss'

const Contact = () => {
  return (
    <>
      <div className="back-gorodun">
        <div className="container">
          <div className="contact__block">
            <h3 className="contact__title">Телефоны контактных центров</h3>
            <span className="contact__info">Круглосуточно, без выходных</span>
            <div className="contact__elem">
              <h5 className="contact__city">Москва</h5>
              <div className="contact__phones">
                <a href="tel:" className="contact__phone">+7 (495) 663-77-22</a>
                <a href="tel:" className="contact__phone">+7 (495) 252-26-03</a>
              </div>
            </div>
            <div className="contact__elem">
              <h5 className="contact__city">Москва</h5>
              <div className="contact__phones">
                <a href="tel:" className="contact__phone">+7 (495) 663-77-22</a>
                <a href="tel:" className="contact__phone">+7 (495) 252-26-03</a>
              </div>
            </div>
            <div className="contact__elem">
              <h5 className="contact__city">Москва</h5>
              <div className="contact__phones">
                <a href="tel:" className="contact__phone">+7 (495) 663-77-22</a>
                <a href="tel:" className="contact__phone">+7 (495) 252-26-03</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
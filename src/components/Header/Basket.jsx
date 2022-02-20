
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import '../../styles/Basket.scss'
const Basket = ({ basketView, basketDiseble }) => { 
  const productBasket = useSelector(state => state.basket.basket)
  const totalBasket = useSelector(state => state.basket.total)
  const dispatch = useDispatch()
  const incrimentCount = (productId) => {
    dispatch({ type: "INCRIMENT_COUNT", productId: productId }) 
  }
  const decrimentCount = (product) => {
    if (product.count > 0) {
      dispatch({ type: "DECRIMENT_COUNT", productId: product.id }) 
    }
  }
  const removeProudct = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", id:id }) 
  }
  if (productBasket.length) {
    dispatch({ type: "CALC_TOTAL" }) 
  }
  return (
    <>
      {
        
        (basketView) ?
          <div className="basket" onClick={basketDiseble}> 
            <div className="basket__block" onClick={e => e.stopPropagation()}> 
              <div className="basket__title-inner">
                <h3 className="basket__title">Корзина</h3>
                <img src="/img/del.svg" alt="" onClick={basketDiseble} />
              </div>
              <div className="basket-block__inner">
                {
                  productBasket.map(block => {
                    return (
                      <div className="basket-block" key={block.id}>
                        <div className="basket-block__first">
                          <h5 className="basket-block__name">{block.title}</h5>
                        </div>
                        <div className="basket-block__last">
                          <span className="restaurant-product__prise" style={{ marginRight: '47px' }}>{block.allPrise} ₽</span>
                          <div className="basket-count">
                            <div className="basket-count__dic" onClick={() => decrimentCount(block)}>-</div>
                            <span className="basket-count__count">{block.count}</span>
                            <div className="basket-count__inc" onClick={() => incrimentCount(block.id)}>+</div>
                          </div>
                          <div className="basket-block__del" onClick={() => removeProudct(block.id)}>
                            <img src="/img/del.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="basket__button-inner">
                <div className="basket__total">
                  <span>{totalBasket} ₽</span>
                </div>
                <div className="basket__buttons">
                  <button className='basket__onchen'>Оформить заказ</button>
                  <button className='basket__back'>Отмена</button>
                </div>
              </div>

            </div>
          </div>
          : false
      }
    </>

  )
}

export default Basket